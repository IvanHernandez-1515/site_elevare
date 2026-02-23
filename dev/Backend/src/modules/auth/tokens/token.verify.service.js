import { HttpError } from "../../../utils/httpError.js";
import { VerifyRegisterTokenAndVerifyUser } from "./tokens.repository.js";

export const verifyEmail = async ({ token }) => {
    const t = String(token ?? "").trim();
    if (!t) throw new HttpError(400, "Token requerido.");

    const result = await VerifyRegisterTokenAndVerifyUser({ token: t });
    if (!result.ok) throw new HttpError(400, "El enlace de verificación es inválido o expiró.");

    return true;
};