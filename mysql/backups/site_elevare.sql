-- =========================================================
-- Elevare CV - Schema 3FN (MySQL 8+) - Updated
-- =========================================================

CREATE DATABASE IF NOT EXISTS site_elevare_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;

USE site_elevare_db;

-- -------------------------
-- Users & Auth
-- -------------------------

CREATE TABLE users (
  id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  email           VARCHAR(191) NOT NULL,
  email_verified  TINYINT(1) NOT NULL DEFAULT 0,
  display_name    VARCHAR(120) NULL,

  -- user profile photo reference (optional)
  profile_file_id BIGINT UNSIGNED NULL,

  status          ENUM('active','disabled','deleted') NOT NULL DEFAULT 'active',
  created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_users_email (email)
) ENGINE=InnoDB;

CREATE TABLE user_auth (
  user_id         BIGINT UNSIGNED PRIMARY KEY,
  password_hash   VARCHAR(255) NOT NULL,
  password_algo   VARCHAR(30) NOT NULL DEFAULT 'bcrypt',
  last_login_at   TIMESTAMP NULL,
  created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_user_auth_user FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE oauth_accounts (
  id                BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  user_id           BIGINT UNSIGNED NOT NULL,
  provider          ENUM('google') NOT NULL,
  provider_user_id  VARCHAR(191) NOT NULL,
  provider_email    VARCHAR(191) NULL,
  access_token      TEXT NULL,
  refresh_token     TEXT NULL,
  token_expires_at  TIMESTAMP NULL,
  created_at        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_oauth_provider_user (provider, provider_user_id),
  KEY idx_oauth_user (user_id),
  CONSTRAINT fk_oauth_user FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -------------------------
-- Roles & Permissions
-- -------------------------

CREATE TABLE roles (
  id          SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name        VARCHAR(60) NOT NULL,
  description VARCHAR(255) NULL,
  UNIQUE KEY uq_roles_name (name)
) ENGINE=InnoDB;

CREATE TABLE permissions (
  id          INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  code        VARCHAR(80) NOT NULL,
  description VARCHAR(255) NULL,
  UNIQUE KEY uq_permissions_code (code)
) ENGINE=InnoDB;

CREATE TABLE user_roles (
  user_id     BIGINT UNSIGNED NOT NULL,
  role_id     SMALLINT UNSIGNED NOT NULL,
  created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, role_id),
  CONSTRAINT fk_user_roles_user FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_user_roles_role FOREIGN KEY (role_id) REFERENCES roles(id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE role_permissions (
  role_id       SMALLINT UNSIGNED NOT NULL,
  permission_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (role_id, permission_id),
  CONSTRAINT fk_role_perm_role FOREIGN KEY (role_id) REFERENCES roles(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_role_perm_perm FOREIGN KEY (permission_id) REFERENCES permissions(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -------------------------
-- Files (references only; binaries stored in filesystem/object storage)
-- -------------------------

CREATE TABLE user_files (
  id           BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  user_id      BIGINT UNSIGNED NOT NULL,
  kind         ENUM('user_profile','cv_photo','cv_attachment') NOT NULL,
  storage      ENUM('local','s3') NOT NULL DEFAULT 'local',
  path         VARCHAR(255) NOT NULL,      -- file path or object key
  mime_type    VARCHAR(120) NULL,
  size_bytes   BIGINT UNSIGNED NULL,
  checksum     VARCHAR(128) NULL,          -- optional sha256/md5
  created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_files_user (user_id),
  CONSTRAINT fk_files_user FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

ALTER TABLE users
  ADD CONSTRAINT fk_users_profile_file
  FOREIGN KEY (profile_file_id) REFERENCES user_files(id)
  ON DELETE SET NULL ON UPDATE CASCADE;

-- -------------------------
-- Templates
-- -------------------------

CREATE TABLE cv_templates (
  id           INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  code         VARCHAR(80) NOT NULL,
  name         VARCHAR(120) NOT NULL,
  description  VARCHAR(255) NULL,
  is_active    TINYINT(1) NOT NULL DEFAULT 1,
  preview_url  VARCHAR(255) NULL,
  created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_templates_code (code)
) ENGINE=InnoDB;

-- -------------------------
-- CV Core (+ public sharing)
-- -------------------------

CREATE TABLE cvs (
  id            BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  user_id       BIGINT UNSIGNED NOT NULL,
  template_id   INT UNSIGNED NOT NULL,
  title         VARCHAR(120) NOT NULL DEFAULT 'Mi CV',

  -- public sharing
  is_public     TINYINT(1) NOT NULL DEFAULT 0,
  public_slug   VARCHAR(160) NULL,
  published_at  TIMESTAMP NULL,

  -- cloning
  source_cv_id  BIGINT UNSIGNED NULL,

  -- optional: photo specific for this CV
  cv_photo_file_id BIGINT UNSIGNED NULL,

  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  UNIQUE KEY uq_cvs_public_slug (public_slug),
  KEY idx_cvs_user (user_id),
  KEY idx_cvs_template (template_id),

  CONSTRAINT fk_cvs_user FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_cvs_template FOREIGN KEY (template_id) REFERENCES cv_templates(id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_cvs_source FOREIGN KEY (source_cv_id) REFERENCES cvs(id)
    ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT fk_cvs_cv_photo FOREIGN KEY (cv_photo_file_id) REFERENCES user_files(id)
    ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE cv_template_history (
  id           BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  cv_id        BIGINT UNSIGNED NOT NULL,
  template_id  INT UNSIGNED NOT NULL,
  changed_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_cv_hist_cv FOREIGN KEY (cv_id) REFERENCES cvs(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_cv_hist_template FOREIGN KEY (template_id) REFERENCES cv_templates(id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -------------------------
-- CV Profile (1:1) + DOB
-- -------------------------

CREATE TABLE cv_profile (
  cv_id            BIGINT UNSIGNED PRIMARY KEY,
  full_name        VARCHAR(120) NULL,
  birth_date       DATE NULL,              -- DOB (instead of age)
  occupation       VARCHAR(120) NULL,
  summary          TEXT NULL,
  phone            VARCHAR(30) NULL,
  contact_email    VARCHAR(191) NULL,

  country          VARCHAR(80) NULL,
  state            VARCHAR(80) NULL,
  city             VARCHAR(80) NULL,

  address_line1    VARCHAR(160) NULL,
  address_line2    VARCHAR(160) NULL,
  neighborhood     VARCHAR(120) NULL,
  postal_code      VARCHAR(15) NULL,

  consent_address  TINYINT(1) NOT NULL DEFAULT 0,
  consent_phone    TINYINT(1) NOT NULL DEFAULT 1,
  consent_email    TINYINT(1) NOT NULL DEFAULT 1,

  created_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_profile_cv FOREIGN KEY (cv_id) REFERENCES cvs(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -------------------------
-- Education (1:N)
-- -------------------------

CREATE TABLE cv_educations (
  id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  cv_id           BIGINT UNSIGNED NOT NULL,
  institution     VARCHAR(160) NOT NULL,
  city            VARCHAR(80) NULL,
  degree          VARCHAR(120) NULL,
  field_of_study  VARCHAR(120) NULL,
  start_date      DATE NULL,
  end_date        DATE NULL,
  is_current      TINYINT(1) NOT NULL DEFAULT 0,
  description     TEXT NULL,
  sort_order      INT NOT NULL DEFAULT 0,
  created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_edu_cv (cv_id),
  CONSTRAINT fk_edu_cv FOREIGN KEY (cv_id) REFERENCES cvs(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -------------------------
-- Languages (catalog + mapping)
-- -------------------------

CREATE TABLE languages (
  id     SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name   VARCHAR(80) NOT NULL,
  UNIQUE KEY uq_languages_name (name)
) ENGINE=InnoDB;

CREATE TABLE language_levels (
  id     TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  code   VARCHAR(30) NOT NULL,
  label  VARCHAR(60) NOT NULL,
  UNIQUE KEY uq_lang_levels_code (code)
) ENGINE=InnoDB;

CREATE TABLE cv_languages (
  cv_id              BIGINT UNSIGNED NOT NULL,
  language_id        SMALLINT UNSIGNED NOT NULL,
  level_id           TINYINT UNSIGNED NULL,
  has_certification  TINYINT(1) NOT NULL DEFAULT 0,
  certification_name VARCHAR(120) NULL,
  certification_org  VARCHAR(120) NULL,
  sort_order         INT NOT NULL DEFAULT 0,
  PRIMARY KEY (cv_id, language_id),
  CONSTRAINT fk_cv_lang_cv FOREIGN KEY (cv_id) REFERENCES cvs(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_cv_lang_language FOREIGN KEY (language_id) REFERENCES languages(id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_cv_lang_level FOREIGN KEY (level_id) REFERENCES language_levels(id)
    ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -------------------------
-- Work Experience (1:N)
-- -------------------------

CREATE TABLE cv_work_experiences (
  id            BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  cv_id         BIGINT UNSIGNED NOT NULL,
  company       VARCHAR(160) NOT NULL,
  location      VARCHAR(120) NULL,
  position      VARCHAR(120) NOT NULL,
  start_date    DATE NULL,
  end_date      DATE NULL,
  is_current    TINYINT(1) NOT NULL DEFAULT 0,
  activities    TEXT NULL,
  sort_order    INT NOT NULL DEFAULT 0,
  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_work_cv (cv_id),
  CONSTRAINT fk_work_cv FOREIGN KEY (cv_id) REFERENCES cvs(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -------------------------
-- Skills (catalog + mapping)
-- -------------------------

CREATE TABLE skills (
  id        INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name      VARCHAR(120) NOT NULL,
  UNIQUE KEY uq_skills_name (name)
) ENGINE=InnoDB;

CREATE TABLE cv_skills (
  cv_id      BIGINT UNSIGNED NOT NULL,
  skill_id   INT UNSIGNED NOT NULL,
  level      TINYINT UNSIGNED NULL,
  sort_order INT NOT NULL DEFAULT 0,
  PRIMARY KEY (cv_id, skill_id),
  CONSTRAINT fk_cv_skill_cv FOREIGN KEY (cv_id) REFERENCES cvs(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_cv_skill_skill FOREIGN KEY (skill_id) REFERENCES skills(id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -------------------------
-- Certifications (free per CV)
-- -------------------------

CREATE TABLE cv_certifications (
  id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  cv_id           BIGINT UNSIGNED NOT NULL,
  name            VARCHAR(160) NOT NULL,
  organization    VARCHAR(160) NULL,
  issue_date      DATE NULL,
  expiry_date     DATE NULL,
  credential_id   VARCHAR(120) NULL,
  credential_url  VARCHAR(255) NULL,
  sort_order      INT NOT NULL DEFAULT 0,
  created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_cert_cv (cv_id),
  CONSTRAINT fk_cert_cv FOREIGN KEY (cv_id) REFERENCES cvs(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -------------------------
-- Social links
-- -------------------------

CREATE TABLE social_platforms (
  id      SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  code    VARCHAR(40) NOT NULL,
  name    VARCHAR(80) NOT NULL,
  UNIQUE KEY uq_social_code (code)
) ENGINE=InnoDB;

CREATE TABLE cv_social_links (
  id           BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  cv_id        BIGINT UNSIGNED NOT NULL,
  platform_id  SMALLINT UNSIGNED NOT NULL,
  url          VARCHAR(255) NOT NULL,
  label        VARCHAR(80) NULL,
  sort_order   INT NOT NULL DEFAULT 0,
  created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_social_cv (cv_id),
  CONSTRAINT fk_social_cv FOREIGN KEY (cv_id) REFERENCES cvs(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_social_platform FOREIGN KEY (platform_id) REFERENCES social_platforms(id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -------------------------
-- CV Exports
-- -------------------------

CREATE TABLE cv_exports (
  id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  cv_id       BIGINT UNSIGNED NOT NULL,
  format      ENUM('pdf','png','jpg') NOT NULL,
  status      ENUM('queued','processing','done','error') NOT NULL DEFAULT 'queued',
  file_path   VARCHAR(255) NULL,
  error_msg   VARCHAR(255) NULL,
  created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_export_cv (cv_id),
  CONSTRAINT fk_export_cv FOREIGN KEY (cv_id) REFERENCES cvs(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -------------------------
-- Feedback / Retroalimentación por CV (público o autenticado)
-- -------------------------

CREATE TABLE cv_feedback (
  id            BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  cv_id         BIGINT UNSIGNED NOT NULL,

  -- si está logueado, guardas user_id; si no, es NULL
  user_id       BIGINT UNSIGNED NULL,

  -- para anónimos puedes guardar nombre/email opcional (no obligatorio)
  guest_name    VARCHAR(120) NULL,
  guest_email   VARCHAR(191) NULL,

  rating        TINYINT UNSIGNED NULL, -- 1-5 opcional
  message       TEXT NULL,

  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  KEY idx_cv_feedback_cv (cv_id),
  KEY idx_cv_feedback_user (user_id),

  CONSTRAINT fk_cv_feedback_cv FOREIGN KEY (cv_id) REFERENCES cvs(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_cv_feedback_user FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -------------------------
-- Seeds
-- -------------------------

INSERT IGNORE INTO roles (name, description) VALUES
('client', 'Usuario cliente'),
('moderator', 'Moderador'),
('superuser', 'Superusuario');

INSERT IGNORE INTO language_levels (code, label) VALUES
('A1','Básico A1'),('A2','Básico A2'),
('B1','Intermedio B1'),('B2','Intermedio B2'),
('C1','Avanzado C1'),('C2','Avanzado C2'),
('native','Nativo');

INSERT IGNORE INTO social_platforms (code, name) VALUES
('linkedin','LinkedIn'),
('github','GitHub'),
('portfolio','Portafolio'),
('instagram','Instagram'),
('x','X'),
('facebook','Facebook'),
('youtube','YouTube');