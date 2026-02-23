import { getPool } from "../../../db/pool.js";

/**
 * encuentra el usuario por correo
*/
export const findUserByEmail = async(email) => {
    //instancia la bdObject
    const pool = getPool();

    const [rows] = await pool.query(
        "SELECT id, email, status FROM users WHERE email = ? LIMIT 1",
        [email]
    );
    //devuelve el primer resultado si existe
    return rows[0] || null;
}

/**
 * consulta los roles de usuario segun el usuario
*/
export const getRoleIdByName = async(roleName) => {
    //instancia la bdObject
    const pool = getPool();

    //consulta los roles segun el usuario
    const [rows] = await pool.query(
        "SELECT id FROM roles WHERE name = ? LIMIT 1",
        [roleName]
    );
    return rows[0]?.id || null;
}

/**
 * Crea user + user_auth + user_roles dentro de una transacción
*/
export const createUserWithAuthAndRole = async({ name, email, passwordHash, roleName = "client" }) => {
    //instancia la bdObject
    //conexion manual de bd
    const pool = getPool();
    const conn = await pool.getConnection(); 
    
    try {
        //comienza un flujo siguiendo un mismo dbObject
        await conn.beginTransaction();

        const [userRes] = await conn.query(
            "INSERT INTO users (email, display_name, email_verified, status) VALUES (?, ?, 0, 'active')",
            [email, name]
        );
        const userId = userRes.insertId; //regresa el id del registro

        await conn.query(
            "INSERT INTO user_auth (user_id, password_hash, password_algo) VALUES (?, ?, 'bcrypt')",
            [userId, passwordHash]
        );

        const roleId = await (async () => {
            const [r] = await conn.query("SELECT id FROM roles WHERE name = ? LIMIT 1", [roleName]);
            return r[0]?.id || null;
        })();

        if (!roleId) {
            //si no hay rol regresa error
            throw new Error(`Role '${roleName}' no existe`);
        }

        await conn.query(
            "INSERT INTO user_roles (user_id, role_id) VALUES (?, ?)",
            [userId, roleId]
        );

        await conn.commit(); //ejecuta las consultas

        return { id: userId, name, email }; //retorna al front
    } catch (err) {
        await conn.rollback(); //revierte todo si falla
        throw err; //devuelve el fallo
    } finally {
        conn.release(); //si todo funciona devuelve la conexion a pool
    }
}