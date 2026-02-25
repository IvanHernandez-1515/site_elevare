import { handleGoogleAuth } from "./google.service.js";

export const googleAuth = async (req, res, next) => {
    try {
        const { credential } = req.body;

        const result = await handleGoogleAuth(credential);

        return res.status(200).json({
            success: true,
            message: "Autenticación con Google exitosa.",
            data: result,
        });
    } catch (err) {
        next(err);
    }
};