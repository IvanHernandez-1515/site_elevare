import { isEmail, passwordStrength } from "../../../../shared/lib/validators";
//isEmail valida formato de correo
//passwordStrength evalua reglas de fuerza de contrasena

export const validateRegister = (values) => {
    const errors = {}//objeto donde se guardan errores por campo

    const name = (values.name ?? "").trim()//normaliza nombre
    const email = (values.email ?? "").trim()//normaliza email
    const password = values.password ?? ""//normaliza password
    const confirmPassword = values.confirmPassword ?? ""//normaliza confirmPassword

    if (!name) errors.name = "El nombre es obligatorio."
    else if (name.length < 3) errors.name = "El nombre debe tener al menos 3 caracteres."
    //valida presencia y longitud del nombre

    if (!email) errors.email = "El correo es obligatorio."
    else if (!isEmail(email)) errors.email = "Ingresa un correo valido."
    //valida presencia y formato del correo

    if (!password) errors.password = "La contrasena es obligatoria."
    else {
        const s = passwordStrength(password)//obtiene flags de fuerza
        if (!s.min) errors.password = "Minimo 8 caracteres."
        else if (!s.upper) errors.password = "Incluye al menos una mayuscula."
        else if (!s.lower) errors.password = "Incluye al menos una minuscula."
        else if (!s.number) errors.password = "Incluye al menos un numero."
        else if (!s.special) errors.password = "Incluye al menos un caracter especial (! @ # $ % ^ & *)"
    }
    //valida reglas de contrasena en orden

    if (!confirmPassword) errors.confirmPassword = "Confirma tu contrasena."
    else if (confirmPassword !== password) errors.confirmPassword = "Las contrasenas no coinciden."
    //valida que confirmPassword exista y coincida con password

    return errors//regresa errores vacio si todo esta bien
}