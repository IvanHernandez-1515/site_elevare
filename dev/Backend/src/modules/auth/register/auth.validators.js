import { HttpError } from "../../../utils/httpError.js";

function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

export const validateRegisterInput = ({ name, email, password }) => {
    const errors = {};
    const n = String(name || "").trim();
    const e = String(email || "").trim().toLowerCase();
    const p = String(password || "");

    if (!n) errors.name = "El nombre es obligatorio.";
    else if (n.length < 3) errors.name = "El nombre debe tener al menos 3 caracteres.";

    if (!e) errors.email = "El correo es obligatorio.";
    else if (!isEmail(e)) errors.email = "Ingresa un correo válido.";

    // mínimo base; tu front ya valida más fuerte, pero backend siempre debe validar mínimo
    if (!p) errors.password = "La contraseña es obligatoria.";
    else if (p.length < 8) errors.password = "Mínimo 8 caracteres.";

    if (Object.keys(errors).length) throw new HttpError(400, "Datos inválidos", errors);

    return { name: n, email: e, password: p };
}