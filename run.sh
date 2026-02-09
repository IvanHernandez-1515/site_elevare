#!/bin/bash

# chmod +x run.sh
# ./run.sh

RED=$'\e[1;31m'
GREEN=$'\e[1;32m'
YELLOW=$'\e[1;33m'
WHITE=$'\e[0m'

get_color() {
	local color=$1
	local default_color=$WHITE

	if [ "$color" ]; then
		default_color=$color
	fi
	echo $default_color
}

print_text() {
	local text=$1
	local color=$2
	color=$(get_color $color)
	echo -e "$color$text$WHITE"
}

print_text_br() {
	print_text "$1" "$2"
	echo ""
}

# Opciones de entorno
DEVELOPMENT=1
# Modo de desarrollo
DEV_PORTS=1
DEV_TRAEFIK=2

QUALITY=2
PRODUCTION=3

print_text_br "Ingrese el número del entorno que utilizará:"
print_text " [\"$DEVELOPMENT\"]: Desarrollo"
print_text " [\"$QUALITY\"]: Calidad"
print_text " [\"$PRODUCTION\"]: Producción"
read -p '> ' enviroment_mode
print_text ""

if [[ ! $enviroment_mode =~ ^[0-9]+$ ]] || [[ $enviroment_mode -lt 1 || $enviroment_mode -gt 3 ]]; then
	print_text_br "Error: entrada inválida." $RED
	exit 1
fi

PATH_TO_CONFIG=""
if [ "$enviroment_mode" -eq $DEVELOPMENT ]; then
  PATH_TO_CONFIG="./conf/development/"
elif [ "$enviroment_mode" -eq $QUALITY ]; then
  PATH_TO_CONFIG="./conf/quality/"
else
  PATH_TO_CONFIG="./conf/production/"
fi
  
DOCKERCOMPOSE_FILE=""
ENV_FILE="${PATH_TO_CONFIG}.env"

# Elegir compose según modo (solo en desarrollo)
if [ "$enviroment_mode" -eq $DEVELOPMENT ]; then
  print_text_br "Modo de desarrollo: ¿Cómo quieres levantar el proyecto?"
  print_text " [\"$DEV_PORTS\"]: Con puertos (localhost)"
  print_text " [\"$DEV_TRAEFIK\"]: Con Traefik (URL)"
  read -p '> ' dev_mode
  print_text ""

  if [[ ! $dev_mode =~ ^[0-9]+$ ]] || [[ $dev_mode -lt 1 || $dev_mode -gt 2 ]]; then
    print_text_br "Error: opción inválida." $RED
    exit 1
  fi

  if [ "$dev_mode" -eq $DEV_PORTS ]; then
    DOCKERCOMPOSE_FILE="${PATH_TO_CONFIG}docker-compose.ports.yml"
  else
    DOCKERCOMPOSE_FILE="${PATH_TO_CONFIG}docker-compose.traefik.yml"
  fi
else
  DOCKERCOMPOSE_FILE="${PATH_TO_CONFIG}docker-compose.yml"
fi

# Verificar que el .env exista
if [ ! -f "$ENV_FILE" ]; then
	print_text ""
	print_text "ERROR: El archivo \"$ENV_FILE\" no existe." $RED
	cp "${PATH_TO_CONFIG}.env.example" "$ENV_FILE"
	print_text_br "Se ha creado una copia desde \".env.example\"." $GREEN
	exit 1
fi

# Exportar las variables del archivo .env
export $(grep -v '^#' "$ENV_FILE" | xargs)

# Opciones de acción
START=1
STOP=2
PERMISSIONS=3
BACKUP=4
MIN_NUM=1
MAX_NUM=4

print_text "Ingrese el número de la acción que desea realizar:"
print_text " [\"$START\"]: Iniciar el proyecto con Docker"
print_text " [\"$STOP\"]: Detener el proyecto con Docker"
print_text " [\"$PERMISSIONS\"]: Dar permisos al proyecto"
print_text " [\"$BACKUP\"]: Backup de base de datos"
read -p '> ' todo
print_text ""

if [[ ! $todo =~ ^[0-9]+$ ]] || [[ $todo -lt $MIN_NUM || $todo -gt $MAX_NUM ]]; then
	print_text_br "Error: opción inválida." $RED
	exit 1
fi

# Acción: iniciar proyecto
if [ "$todo" -eq $START ]; then
	print_text_br "Eliminando contenedores anteriores si existen..." $YELLOW
	for container in "${CONTAINER_NAME}_frontend" "${CONTAINER_NAME}_backend" "${CONTAINER_NAME}_db"; do
		if docker ps -a --format '{{.Names}}' | grep -Eq "^${container}$"; then
			print_text "Eliminando contenedor: $container" $RED
			docker rm -f "$container" > /dev/null 2>&1
		fi
	done

	print_text_br "Levantando servicios con Docker Compose..." $GREEN
	docker compose --env-file "$ENV_FILE" --project-name "$PROJECT_NAME" -f "$DOCKERCOMPOSE_FILE" up -d --build
fi

# Acción: detener proyecto
if [ "$todo" -eq $STOP ]; then
	print_text_br "Deteniendo y eliminando contenedores..." $YELLOW
	docker compose --env-file "$ENV_FILE" --project-name "$PROJECT_NAME" -f "$DOCKERCOMPOSE_FILE" down -v --remove-orphans
fi

# Acción: dar permisos
if [ "$todo" -eq $PERMISSIONS ]; then
	chmod +x ./scripts/permisos.sh
	source ./scripts/permisos.sh
fi

# Acción: backup de base de datos
if [ "$todo" -eq $BACKUP ]; then
	mkdir -p ./conf/mysql/backups
	BACKUP_PATH="./conf/mysql/backups/${MYSQL_DATABASE}.sql"
	print_text "Realizando backup de \"$MYSQL_DATABASE\"..." $YELLOW
	docker exec ${DB_CONTAINER_NAME} rm -f /backups/${MYSQL_DATABASE}.sql 2>/dev/null
	docker exec ${DB_CONTAINER_NAME} /usr/bin/mysqldump -u root --password="$MYSQL_ROOT_PASSWORD" "$MYSQL_DATABASE" > "$BACKUP_PATH"
	print_text_br "Backup guardado en: $BACKUP_PATH" $GREEN
fi
