import crypto from "crypto";
import { getPool } from "../../../db/pool.js";

/**
 * crear verificacion de correo para registro
*/
export const registerEmailVerifyToken = async ({ userId, rawToken, ttlMinutes = 60 }) => {
    //instancia la bdObject
    const pool = getPool();

    //actualiza el token
    const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");

    await pool.query(
        `INSERT INTO user_tokens (user_id, token_hash, kind, expires_at)
     VALUES (?, ?, 'email_verify', DATE_ADD(NOW(), INTERVAL ? MINUTE))`,
        [userId, tokenHash, ttlMinutes]
    );

    return true;
};

export const VerifyRegisterTokenAndVerifyUser = async ({ token }) => {
    //instancia la bdObject
    //conexion manual de bd
    const pool = getPool();
    const conn = await pool.getConnection();

    try {
        //comienza un flujo siguiendo un mismo dbObject
        await conn.beginTransaction();

        //convertir hash a crypt
        const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

        const [rows] = await conn.query(
            `SELECT id, user_id
            FROM user_tokens
            WHERE token_hash = ?
                AND kind = 'email_verify'
                AND used_at IS NULL
                AND expires_at > NOW()
            LIMIT 1
            FOR UPDATE`,
            [tokenHash]
        );

        const row = rows[0];
        if (!row) {
            //si no hay token finalizar
            await conn.rollback();
            return { ok: false };
        }

        //actualizar la verificacion del usuario
        await conn.query(`UPDATE users SET email_verified = 1 WHERE id = ?`, [row.user_id]);
        await conn.query(`UPDATE user_tokens SET used_at = NOW() WHERE id = ?`, [row.id]);

        //ejecuta el sql
        await conn.commit();
        return { ok: true };
    } catch (e) {
        await conn.rollback(); //si falla revierte todo
        throw e;
    } finally {
        conn.release(); //finaliza la conexion
    }
};


/**
 * crear verificacion de correo para recuperar contraseña
*/
export const resetEmailVerifyToken = async ({ userId, rawToken, ttlMinutes = 60 }) => {
    //instancia la bdObject
    const pool = getPool();

    //actualiza el token
    const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");

    await pool.query(
        `INSERT INTO user_tokens (user_id, token_hash, kind, expires_at)
     VALUES (?, ?, 'password_reset', DATE_ADD(NOW(), INTERVAL ? MINUTE))`,
        [userId, tokenHash, ttlMinutes]
    );

    return true;
};

export const VerifyTokenResetPassword = async ({ token }) => {
    //instancia la bdObject
    //conexion manual de bd
    const pool = getPool();
    const conn = await pool.getConnection();

    try {
        //comienza un flujo siguiendo un mismo dbObject
        await conn.beginTransaction();

        //convertir hash a crypt
        const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

        const [rows] = await conn.query(
            `SELECT id, user_id
            FROM user_tokens
            WHERE token_hash = ?
                AND kind = 'password_reset'
                AND used_at IS NULL
                AND expires_at > NOW()
            LIMIT 1
            FOR UPDATE`,
            [tokenHash]
        );

        const row = rows[0];
        if (!row) {
            //si no hay token finalizar
            await conn.rollback();
            return { ok: false };
        }

        //actualizar la verificacion el token del usuario
        await conn.query(`UPDATE user_tokens SET used_at = NOW() WHERE id = ?`, [row.id]);

        //ejecuta el sql
        await conn.commit();
        return { ok: true };
    } catch (e) {
        await conn.rollback(); //si falla revierte todo
        throw e;
    } finally {
        conn.release(); //finaliza la conexion
    }
};