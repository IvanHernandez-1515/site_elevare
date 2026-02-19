import { isEmail, passwordStrength } from "../../../../shared/lib/validators";

export const validateRegister = (values) => {
    const errors = {};

    const name = (values.name ?? "").trim();
    const email = (values.email ?? "").trim();
    const password = values.password ?? "";
    const confirmPassword = values.confirmPassword ?? "";

    if (!name) errors.name = "El nombre es obligatorio.";
    else if (name.length < 3) errors.name = "El nombre debe tener al menos 3 caracteres.";

    if (!email) errors.email = "El correo es obligatorio.";
    else if (!isEmail(email)) errors.email = "Ingresa un correo válido.";

    if (!password) errors.password = "La contraseña es obligatoria.";
    else {
        const s = passwordStrength(password);
        if (!s.min) errors.password = "Mínimo 8 caracteres.";
        else if (!s.upper) errors.password = "Incluye al menos una mayúscula.";
        else if (!s.lower) errors.password = "Incluye al menos una minúscula.";
        else if (!s.number) errors.password = "Incluye al menos un número.";
    }

    if (!confirmPassword) errors.confirmPassword = "Confirma tu contraseña.";
    else if (confirmPassword !== password) errors.confirmPassword = "Las contraseñas no coinciden.";

    return errors;
};