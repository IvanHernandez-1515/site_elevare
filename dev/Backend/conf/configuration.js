class AppConfig {
  constructor() {
    /** Entorno */
    this.env = 'development';

    /** Servidor */
    this.host = '0.0.0.0';
    this.port = 3000;
    this.debug = true;

    /** Base de datos */
    this.dbType = 'mysql';
    this.dbHost = 'db';
    this.dbUser = 'devuser';
    this.dbPassword = 'devpass';
    this.dbName = 'elevare_db';
    this.dbPort = 3306;
    this.dbPrefix = 'pbeo7_';

    /** Seguridad */
    this.jwtSecret = 'supersecreto';
    this.jwtExpiresIn = '1d';

    /** Correo */
    this.mailOnline = true;
    this.mailFrom = 'portales.web@ayuntamientopuebla.gob.mx';
    this.mailFromName = 'Sistema Municipal DIF';
    this.mailHost = 'localhost';
    this.mailPort = 25;
    this.mailUser = '';
    this.mailPass = '';
    this.mailSecure = false;

    /** Configuración general */
    this.editor = 'tinymce';
    this.listLimit = 20;
    this.access = 1;
    this.timezone = 'America/Mexico_City';
  }
}

const config = new AppConfig();

export default config;