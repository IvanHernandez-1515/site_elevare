# Elevare CV

**Elevare CV** es una plataforma de generación de currículums vitae digitales, dinámica, modular y ultra personalizable. Su propósito es permitir a cada usuario crear, editar y mantener múltiples versiones de sus CVs con una experiencia moderna e intuitiva.

## Objetivo

Brindar a cualquier persona una herramienta avanzada y fácil de usar para crear currículums profesionales, con vista previa en tiempo real, personalización total y opciones exportables.

## Misión

Facilitar la generación de currículums vitae mediante una plataforma tecnológica accesible, intuitiva y personalizable, que se adapte a las necesidades de cada usuario sin requerir conocimientos técnicos.

## Visión

Convertirse en la herramienta líder para la creación de currículums en América Latina, promoviendo la empleabilidad a través del diseño inteligente, la accesibilidad y el uso de tecnologías modernas.

## Propuesta de valor

Elevare CV transforma tu experiencia en una presentación estratégica, adaptable y profesional para cada oportunidad.

---

## Estructura general del proyecto
```
├── conf
│   ├── development
│   │   ├── .env
│   │   ├── .env.example
│   │   ├── docker-compose.ports.yml
│   │   └── docker-compose.traefik.yml
│   └── production
│       ├── .env.example
│       └── docker-compose.yml
├── dev
│   ├── Backend
│   │   ├── conf/
│   │   ├── node_modules/
│   │   └── src/
│   │       ├── routes/
├   ├── Frontend
│   │   ├── node_modules/
│   │   ├── public/
│   │   │   ├── assets/
│   │   ├── src/
│   │   │   ├── assets/
│   │   │   │   ├── images/
│   │   │   │   │   ├── home/
│   │   │   │   │   │   └── hero/
│   │   │   │   │   └── pages
│   │   │   │   │       └── icons/
│   │   │   │   │       │    ├── Auth/
│   │   │   │   │       │    │    └── Login/
│   │   │   │   │       │    ├── general/
│   │   │   │   │       │    ├── home/
│   │   │   │   │       │    │    └── feature/
│   │   │   ├── components/
│   │   │   │   ├── common/
│   │   │   │   │   ├── header/
│   │   │   │   │   └── footer/
│   │   │   │   ├── layouts/
│   │   │   │   │   ├── auth/
│   │   │   │   │   └── home/
│   │   │   │   └── ui/
│   │   │   │       └── containers/
│   │   │   ├── pages/
│   │   │   │   ├── auth/
│   │   │   │   ├── Counter/
│   │   │   │   └── home/
│   │   │   ├── router/
│   │       └── styles/
│   └── index.html
├── mysql
│   ├── backups
│   │   └── index.html
│   └── migrations
│       └── index.html
├── README.md
├── run.sh
└── scripts
    └── permisos.sh
```
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

---

## Guía de clases Tailwind (convención de orden)

**Orden recomendado:**

LAYOUT → POSITION → SIZE → SPACING → TYPO → COLOR → EFFECT → BORDER → MISC → RESPONSIVE

Ejemplo real:
```
className="flex flex-col justify-center items-center relative w-full h-screen p-10 gap-6 font-sans text-4xl text-white bg-slate-700 shadow-xl rounded-xl hover:bg-slate-800 sm:text-center"
```

### Categorías comunes:

- *Layout:* flex, grid, block, inline-flex, hidden

- *osition:* relative, absolute, top-0, z-10

- *Size:* w-64, h-10, max-w-7xl, aspect-[2/3]

- *Spacing:* p-4, px-6, my-10, gap-x-4, space-y-6

- *Typography:* font-sans, text-3xl, font-bold, tracking-tight, leading-relaxed

- *Color:* text-slate-900, bg-slate-700, text-white, hover:bg-slate-800

- *Effect:* shadow-xl, opacity-80, backdrop-blur

- *Border:* rounded-md, border, border-slate-300

- *Misc:* overflow-hidden, isolate, shrink-0

- *Responsive:* sm:, md:, lg:, xl:

### Consejos

- Mantener este orden mejora la lectura y mantenimiento.
- Usa clases personalizadas para consistencia institucional.
- Combina gap con flex o grid para espaciado limpio.

Si deseas ver ejemplos de implementación reales, revisa los componentes en src/pages/HomePage.jsx, donde se siguen estas reglas.

Para cambiar de flex a grid, puedes seguir esta estructura:
```
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>Contenido 1</div>
  <div>Contenido 2</div>
</div>
```