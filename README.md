# Elevare CV

**Elevare CV** es una plataforma de generación de currículums vitae digitales, dinámica, modular y ultra personalizable. Su propósito es permitir a cada usuario crear, editar y mantener múltiples versiones de sus CVs con una experiencia moderna e intuitiva.

## Objetivo

Brindar a cualquier persona una herramienta avanzada y fácil de usar para crear currículums profesionales, con vista previa en tiempo real, personalización total y opciones exportables.

## Misión

Facilitar la generación de currículums vitae mediante una plataforma tecnológica accesible, intuitiva y personalizable, que se adapte a las necesidades de cada usuario sin requerir conocimientos técnicos.

## Visión

Convertirse en la herramienta líder para la creación de currículums en América Latina, promoviendo la empleabilidad a través del diseño inteligente, la accesibilidad y el uso de tecnologías modernas.

---

## Estructura general del proyecto

├── conf
│   ├── development
│   │   └── docker-compose.yml
│   └── production
│       └── docker-compose.yml
├── dev
│   ├── Backend
│   │   ├── conf
│   │   │   └── configuration.js
│   │   ├── index.js
│   │   ├── node_modules
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── src
│   │       ├── routes
│   │       │   ├── index.js
│   │       │   └── initial.js
│   │       └── server.js
│   ├── Frontend
│   │   ├── README.md
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   ├── node_modules
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── postcss.config.js
│   │   ├── public
│   │   │   └── vite.svg
│   │   ├── src
│   │   │   ├── App.jsx
│   │   │   ├── assets
│   │   │   │   └── react.svg
│   │   │   ├── index.css
│   │   │   ├── main.jsx
│   │   │   ├── pages
│   │   │   │   └── Counter
│   │   │   │       ├── Counter.css
│   │   │   │       └── Counter.jsx
│   │   │   ├── router
│   │   │   │   └── AppRouter.jsx
│   │   │   └── styles
│   │   │       └── index.css
│   │   ├── tailwind.config.js
│   │   └── vite.config.js
│   └── index.html
├── mysql
│   ├── backups
│   │   └── index.html
│   └── migrations
│       └── index.html
│   ├── scripts
│       └── permisos.sh
├── README.md
└── run.sh

---

## Descripción por módulo

### Backend (Node.js + Express)
- API REST para autenticación y gestión de currículums.
- Uso de rutas organizadas (`/routes/index.js`, `/routes/initial.js`).
- Configuración centralizada (`conf/configuration.js`).
- Preparado para JWT y conexión con base de datos MySQL.

### Frontend (React + Vite + TailwindCSS)
- Arquitectura modular con estructura clara por dominios (`features`, `pages`, `components`, etc).
- Ruteo moderno con React Router.
- Estilos configurados con TailwindCSS y PostCSS.
- Integración con alias `@` para imports limpios.

### MySQL
- Almacenamiento persistente para usuarios, currículums y configuraciones.
- Directorios separados para datos, migraciones y respaldos.

### Docker
- Separación por entornos (`development`, `production`).
- Contenedores para Frontend, Backend y Base de Datos.
- Script `run.sh` para orquestar acciones comunes (levantamiento, permisos, backups, etc).

---

## Tecnologías utilizadas

- **Frontend**
  - React 18
  - Vite
  - TailwindCSS

- **Backend**
  - Node.js
  - Express.js

- **Base de datos**
  - MySQL 8

- **DevOps**
  - Docker
  - Docker Compose
  - Bash scripting

---

## Funcionalidades clave (versión inicial)

### Usuario
- Registro con validación
- Login seguro con JWT
- Recuperación de contraseña
- Perfil editable

### Currículum
- Crear, editar, duplicar y eliminar CVs
- Guardar múltiples CVs por usuario
- Descargar como PDF
- Compartir por link (futuro)

### Vista previa dinámica
- Cambios reflejados en tiempo real
- Cambio de plantilla sin pérdida de datos

### Personalización
- Temas (claro/oscuro)
- Colores primarios/secundarios
- Tipografía por plantilla

---

## Cómo levantar el proyecto (modo desarrollo)

1. Clona el repositorio:

```bash
git clone https://github.com/usuario/elevare-cv.git
cd elevare-cv
```

Levanta el entorno de desarrollo (necesita traefik):
```bash
./run.sh
```
**Nota:** La primera vez que levante el proyecto dira que no se encuentra archivo .env disponible, este se creará a partir de una copia de .env.example.
Modificar unicamente el .env ya que el archivo .env.example es una plantilla fiel de .env