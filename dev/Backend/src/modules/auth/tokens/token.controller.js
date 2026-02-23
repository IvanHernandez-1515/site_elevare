import { verifyEmail } from "./token.verify.service.js";

export const verifyEmailController = async (req, res, next) => {
    try {
        await verifyEmail(req.body);

        return res.status(200).json({
            success: true,
            data: { emailVerified: true },
            message: "Correo verificado correctamente. Ya puedes iniciar sesión.",
        });
    } catch (err) {
        next(err);
    }
};