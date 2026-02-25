import { OAuth2Client } from "google-auth-library";
import { HttpError } from "../../../utils/httpError.js";
import { validateGoogleCredential } from "./google.validators.js";
import {
    findOauthByProviderUserId,
    findOauthByUserAndProvider,
    createOauthAccount,
    createUserGoogleWithRole,
    updateUserEmailVerified,
    findUserByEmail,
    findUserById,
} from "./google.repository.js";

export const handleGoogleAuth = async (credential) => {
    const client = new OAuth2Client(config.oathCliendid);
    // 1) validar input (capa validators)
    const cred = validateGoogleCredential(credential);

    // 2) verificar token con Google
    const ticket = await client.verifyIdToken({
        idToken: cred,
        audience: config.oathCliendid,
    });

    const payload = ticket.getPayload();
    if (!payload) throw new HttpError(401, "Token Google inválido.");

    const googleId = payload.sub; // provider_user_id
    const email = payload.email?.toLowerCase();
    const name = payload.name || null;
    
    const emailVerified = !!payload.email_verified;

    if (!googleId || !email) {
        throw new HttpError(401, "Token Google incompleto.");
    }

    // 3) si ya existe oauth por googleId => login directo
    const existingOauth = await findOauthByProviderUserId("google", googleId);
    if (existingOauth) {
        const user = await findUserById(existingOauth.user_id);
        if (!user) throw new HttpError(401, "Usuario no encontrado.");
        return { user };
    }

    // 4) si no existe oauth, buscamos user por email (para vincular o crear)
    let user = await findUserByEmail(email);

    if (!user) {
        // crear usuario nuevo (sin password)
        const created = await createUserGoogleWithRole({
            name,
            email,
            roleName: "client",
            emailVerified: emailVerified, // si google dice verificado, lo marcamos
        });

        user = await findUserById(created.id);
        if (!user) throw new HttpError(500, "No se pudo crear el usuario.");
    } else {
        // si ya existe usuario y google dice verificado => actualizar users.email_verified
        if (emailVerified && !user.email_verified) {
            await updateUserEmailVerified(user.id, true);
            user.email_verified = 1;
        }
    }

    // 5) vincular oauth account si no estaba vinculada a ese user
    const alreadyLinked = await findOauthByUserAndProvider(user.id, "google");
    if (!alreadyLinked) {
        await createOauthAccount({
            userId: user.id,
            provider: "google",
            providerUserId: googleId,
            providerEmail: email,
        });
    }

    // 6) regresar user
    return { user };
};