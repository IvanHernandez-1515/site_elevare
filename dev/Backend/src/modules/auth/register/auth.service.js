import bcrypt from "bcryptjs";
import crypto from "crypto";
//utilities
import {sendMail} from "../../../utils/mailer.js";
import { HttpError } from "../../../utils/httpError.js";
import { validateRegisterInput } from "./auth.validators.js";
import { findUserByEmail, createUserWithAuthAndRole } from "./auth.repository.js";
import {registerEmailVerifyToken} from "../tokens/tokens.repository.js";

export const registerUser = async(payload) => {
    //verifica autenticidad de campos
    const { name, email, password } = validateRegisterInput(payload);

    //usa correo como unique
    const exists = await findUserByEmail(email);
    if (exists) throw new HttpError(409, "Este correo ya está registrado.");

    //hashea la contraseña
    const passwordHash = await bcrypt.hash(password, 10);
    //realizar inserción de usuario 
    const user = await createUserWithAuthAndRole({
        name,
        email,
        passwordHash,
        roleName: "client",
    });

    //token en texto plano (solo para link en correo)
    const rawToken = crypto.randomBytes(32).toString("hex");
    await registerEmailVerifyToken({
        userId: user.id,
        rawToken,
        ttlMinutes: config.emailVerifyTtlMinutes, //1hora
    });

    //Una vez guardado el token mandar correo
    const verifyLink = `${config.frontUrl}/verify-email?token=${rawToken}`;

    const subject = "Verifica tu correo - Elevare CV";
    const text =
        `Hola ${user.name},\n\n` +
        `Para verificar tu cuenta, abre este enlace:\n${verifyLink}\n\n` +
        `Si tú no creaste esta cuenta, ignora este correo.\n`;

    const html = `
        <div style="font-family: Arial, sans-serif; font-size: 15px; padding: 25px 0; background: #f3f4f6;">
            <div style="width: 600px; text-align: center; margin: 0 auto; background: #FFF;">
                <div style="margin: 20px 0; padding: 0 15px; text-align: left;">
                    <h3>Verifica tu correo</h3>
                    <p>Hola <b>${user.name}</b>,</p>
                    <p>Para verificar tu cuenta en <b>${config.siteName}</b>, haz clic aquí:</p>
                    <p><a href="${verifyLink}">Verificar correo</a></p>
                    <p>O copia y pega este enlace:</p>
                    <p style="word-break: break-all">${verifyLink}</p>
                    <p style="color:#666">Si tú no creaste esta cuenta, ignora este correo.</p>
                    <hr style="margin:0 15px;color:#f3f4f6;">
                    <div style="padding: 15px 0; text-align:center;">
                        <img src="${config.frontUrl}/src/assets/images/pages/icons/general/logo-appv1.svg" 
                            alt="Elevare CV" 
                            style="width: 150px;">
                    </div>
                </div>
            </div>
        </div>
    `;

    await sendMail({ to: user.email, subject, text, html });

    return user;
}