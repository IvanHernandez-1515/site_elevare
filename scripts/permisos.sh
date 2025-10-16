#!/bin/bash

# ==========================
# Otorga permisos recursivos a todo el proyecto
# Uso: chmod +x scripts/permisos.sh && ./scripts/permisos.sh
# ==========================

# Ruta base del proyecto (puedes exportar PHP_PROJECT_PATH para sobreescribir)
PROJECT_PATH="dev/"

if [ "$PHP_PROJECT_PATH" ]; then
    PROJECT_PATH=$PHP_PROJECT_PATH
fi

# Obtener usuario y grupo actuales
USER_OWN=$(id -un)
GROUP_OWN=$(id -gn)

# Establecer permisos y propiedad
sudo chown -R 33:$GROUP_OWN "$PROJECT_PATH"

sudo find "$PROJECT_PATH" -type d -exec chmod 0775 {} \;

sudo find "$PROJECT_PATH" -type f -exec chmod 0664 {} \;