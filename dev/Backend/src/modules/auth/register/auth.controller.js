import { registerUser } from "./auth.service.js";

export const register = async(req, res, next) => {
    try {
        const result = await registerUser(req.body);

        return res.status(201).json({
            success: true,
            message: "Revisa tu correo para verificar tu cuenta.",
            data: {
                // user: result, //objeto de usuario
                emailVerificationRequired: true,
            }
        });
    } catch (err) {
        next(err);
    }
}