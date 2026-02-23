import mysql from "mysql2/promise";

let _pool = null; //inicializa vacio el objeto db

export const initPool = (cfg) => {
    if (_pool) return _pool;

    //si hay objeto config crea el dbObject
    _pool = mysql.createPool({
        host: cfg.dbHost,
        user: cfg.dbUser,
        password: cfg.dbPassword,
        database: cfg.dbName,
        port: cfg.dbPort,
        waitForConnections: true,
        connectionLimit: 10,
    });

    return _pool;
}

//si no hay db manda mensaje de depuracion
export const getPool = () => {
    if (!_pool) {
        throw new Error("DB pool not initialized. Call initPool(config) before using repositories.");
    }
    return _pool;
}