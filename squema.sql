-- CREATE DATABASE fitaccess;

-- ============================
--  Tabla: socios
-- ============================
CREATE TABLE socios (
    id_socio        SERIAL PRIMARY KEY,
    nombre          VARCHAR(100) NOT NULL,
    apellido        VARCHAR(100) NOT NULL,
    documento       VARCHAR(50)  NOT NULL,
    telefono        VARCHAR(30)  NOT NULL,
    correo          VARCHAR(120),
    fecha_registro  TIMESTAMP DEFAULT NOW()
);

-- ============================
--  Tabla: planes_membresia
-- ============================
CREATE TABLE planes_membresia (
    id_plan        SERIAL PRIMARY KEY,
    nombre_plan    VARCHAR(100) NOT NULL,
    duracion_dias  INTEGER      NOT NULL,
    descripcion    TEXT
);

-- ============================
--  Tabla: instructores
-- ============================
CREATE TABLE instructores (
    id_instructor  SERIAL PRIMARY KEY,
    nombre         VARCHAR(100) NOT NULL,
    apellido       VARCHAR(100) NOT NULL,
    telefono       VARCHAR(30),
    correo         VARCHAR(120)
);

-- ============================
--  Tabla: membresias
--  (Este relaciona los socios con planes de membresía)
-- ============================
CREATE TABLE membresias (
    id_membresia  SERIAL PRIMARY KEY,
    id_socio      INTEGER NOT NULL,
    id_plan       INTEGER NOT NULL,
    fecha_inicio  DATE    NOT NULL,
    fecha_fin     DATE    NOT NULL,
    estado        VARCHAR(20) NOT NULL, -- ej. 'activa', 'por_vencer', 'vencida'

    CONSTRAINT fk_membresias_socio
        FOREIGN KEY (id_socio)
        REFERENCES socios (id_socio)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    CONSTRAINT fk_membresias_plan
        FOREIGN KEY (id_plan)
        REFERENCES planes_membresia (id_plan)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- ============================
--  Tabla: rutinas
--  (Rutinas: Asignada a un socio por un instructor)
-- ============================
CREATE TABLE rutinas (
    id_rutina      SERIAL PRIMARY KEY,
    id_socio       INTEGER NOT NULL,
    id_instructor  INTEGER NOT NULL,
    titulo         VARCHAR(150) NOT NULL,
    objetivo       VARCHAR(200),
    detalle        TEXT,
    fecha_creacion DATE DEFAULT CURRENT_DATE,

    CONSTRAINT fk_rutinas_socio
        FOREIGN KEY (id_socio)
        REFERENCES socios (id_socio)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    CONSTRAINT fk_rutinas_instructor
        FOREIGN KEY (id_instructor)
        REFERENCES instructores (id_instructor)
        ON UPDATE CASCADE
        ON DELETE SET NULL
);

-- ============================
--  Tabla: registro_progreso
--  (Registros de avance de un socio)
-- ============================
CREATE TABLE registro_progreso (
    id_registro     SERIAL PRIMARY KEY,
    id_socio        INTEGER NOT NULL,
    id_rutina       INTEGER, -- opcional
    fecha_registro  DATE DEFAULT CURRENT_DATE,
    peso            NUMERIC(5,2), -- ej. 75.50 kg
    notas           TEXT,

    CONSTRAINT fk_registros_socio
        FOREIGN KEY (id_socio)
        REFERENCES socios (id_socio)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    CONSTRAINT fk_registros_rutina
        FOREIGN KEY (id_rutina)
        REFERENCES rutinas (id_rutina)
        ON UPDATE CASCADE
        ON DELETE SET NULL
);
