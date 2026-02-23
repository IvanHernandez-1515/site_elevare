class AppConfig {
  constructor() {
    /** Entorno */
    this.siteName = 'Sistema de Currículums Elevare';
    this.env = 'development';

    /** Servidor */
    this.host = '0.0.0.0';
    this.port = 3000;
    this.debug = true;

    /** Externos */
    this.frontUrl = process.env.FRONT_URL

    /** Base de datos */
    this.dbType = 'mysql';
    this.dbHost = 'db';
    this.dbUser = 'devuser';
    this.dbPassword = 'devpass';
    this.dbName = 'site_elevare_db';
    this.dbPort = 3306;
    this.dbPrefix = 'pbeo7_';

    /** Seguridad */
    this.jwtSecret = 'supersecreto';
    this.jwtExpiresIn = '1d';

    /** Correo */
    this.mailOnline = true;// si false, NO manda mail (solo log)
    this.mailFrom = 'ivan.hernandez@ayuntamientopuebla.gob.mx';
    this.mailFromName = 'Sistema de Currículums Elevare';

    this.mailer = 'smtp';
    this.smtpHost = 'smtp.office365.com';
    this.mailPort = 587;
    this.smtpSecure = false; // 587 => STARTTLS (secure=false)
    this.smtpAuth = true;
    this.mailUser = 'ivan.hernandez@ayuntamientopuebla.gob.mx';
    this.mailPass = '';

    /** Tokens */
    this.emailVerifyTtlMinutes = 60;

    /** Configuración general */
    this.editor = 'tinymce';
    this.listLimit = 20;
    this.access = 1;
    this.timezone = 'America/Mexico_City';
  }
}

const config = new AppConfig();

export default config;
