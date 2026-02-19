import { env } from "../../../../config/config.project";

class ApiError extends Error {
    constructor(message, { status, data } = {}) {
        super(message);
        this.name = "ApiError";
        this.status = status;
        this.data = data;
    }
}

export const registerService = async ({ name, email, password }) => {
    const res = await fetch(`${env.API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // si tu API usa cookies/sesión:
        // credentials: "include",
        body: JSON.stringify({ name, email, password }),
    });

    let data = null;
    try {
        data = await res.json();
    } catch {
        // si el backend no regresa JSON
    }

    if (!res.ok) {
        // intenta sacar un mensaje estándar del backend
        const message =
            data?.message ||
            data?.error ||
            "No se pudo completar el registro. Intenta de nuevo.";

        throw new ApiError(message, { status: res.status, data });
    }

    return data; // ej: { user, token } o lo que regrese tu API
};