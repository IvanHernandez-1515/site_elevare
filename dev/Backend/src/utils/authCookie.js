import jwt from "jsonwebtoken";
import { HttpError } from "./httpError.js";

export const signAccessToken = (user) => {
    if (!config.jwtSecret) throw new HttpError(500, "jwtSecret no configurado en configuration.js");

    return jwt.sign(
        { sub: String(user.id) },
        config.jwtSecret,
        {
            expiresIn: config.jwtAccessTtl || "60m", // o minutos
            issuer: "elevare-api",
            audience: "elevare-web",
        }
    );
};

export const sessionCookieOptions = () => ({
    httpOnly: true,
    secure: !!config.cookieSecure,     // true en https
    sameSite: config.cookieSameSite,   // "lax" / "none"
    path: "/",
    // domain: config.cookieDomain || undefined, // opcional
});

export const setAuthCookie = (res, user) => {
    const token = signAccessToken(user);
    res.cookie(config.cookieName, token, sessionCookieOptions());
};

export const clearAuthCookie = (res) => {
    res.clearCookie(config.cookieName, sessionCookieOptions());
};