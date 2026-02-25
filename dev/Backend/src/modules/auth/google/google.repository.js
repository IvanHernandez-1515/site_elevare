import { getPool } from "../../../db/pool.js";

// =========================
// Users helpers 
// =========================
export const findUserByEmail = async (email) => {
    //instancia la bdObject
    const pool = getPool();
    
    const [rows] = await pool.query(
        `SELECT * FROM users WHERE email=? LIMIT 1`,
        [email]
    );
    return rows[0] || null;
};

export const findUserById = async (userId) => {
    //instancia la bdObject
    const pool = getPool();

    const [rows] = await pool.query(
        `SELECT * FROM users WHERE id=? LIMIT 1`,
        [userId]
    );
    return rows[0] || null;
};

// =========================
// OAuth queries
// =========================
export const findOauthByProviderUserId = async (provider, providerUserId) => {
    //instancia la bdObject
    const pool = getPool();

    const [rows] = await pool.query(
        `SELECT * FROM oauth_accounts 
     WHERE provider=? AND provider_user_id=? LIMIT 1`,
        [provider, providerUserId]
    );
    return rows[0] || null;
};

export const findOauthByUserAndProvider = async (userId, provider) => {
    //instancia la bdObject
    const pool = getPool();
    
    const [rows] = await pool.query(
        `SELECT * FROM oauth_accounts 
     WHERE user_id=? AND provider=? LIMIT 1`,
        [userId, provider]
    );
    return rows[0] || null;
};

export const createOauthAccount = async ({
    userId,
    provider,
    providerUserId,
    providerEmail,
}) => {
    //instancia la bdObject
    const pool = getPool();

    await pool.query(
        `INSERT INTO oauth_accounts 
      (user_id, provider, provider_user_id, provider_email)
     VALUES (?, ?, ?, ?)`,
        [userId, provider, providerUserId, providerEmail]
    );
};

export const createUserGoogleWithRole = async ({
    name,
    email,
    roleName,
    emailVerified,
}) => {
    //instancia la bdObject
    const pool = getPool();

    const conn = await pool.getConnection();
    try {
        await conn.beginTransaction();

        const [u] = await conn.query(
            `INSERT INTO users (email, email_verified, display_name)
       VALUES (?, ?, ?)`,
            [email, emailVerified ? 1 : 0, name]
        );

        const userId = u.insertId;

        const [[role]] = await conn.query(
            `SELECT id FROM roles WHERE name=? LIMIT 1`,
            [roleName]
        );

        await conn.query(
            `INSERT INTO user_roles (user_id, role_id)
       VALUES (?, ?)`,
            [userId, role.id]
        );

        await conn.commit();

        return { id: userId, email };
    } catch (e) {
        await conn.rollback();
        throw e;
    } finally {
        conn.release();
    }
};

export const updateUserEmailVerified = async (userId, verified) => {
    //instancia la bdObject
    const pool = getPool();

    await pool.query(
        `UPDATE users SET email_verified=? WHERE id=?`,
        [verified ? 1 : 0, userId]
    );
};