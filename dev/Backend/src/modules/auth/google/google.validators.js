import { HttpError } from "../../../utils/httpError.js";

export const validateGoogleCredential = (credential) => {
    if (!credential || typeof credential !== "string") {
        throw new HttpError(400, "Token de Google no proporcionado.");
    }

    const trimmed = credential.trim();
    if (!trimmed) {
        throw new HttpError(400, "Token de Google no proporcionado.");
    }

    return trimmed;
};