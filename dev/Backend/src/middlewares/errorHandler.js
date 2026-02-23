export const errorHandler = (err, req, res, next) => {
    // Duplicado MySQL
    if (err?.code === "ER_DUP_ENTRY") {
        return res.status(409).json({ success: false, message: "Registro duplicado" });
    }

    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message || "Error interno",
        errors: err.errors,
    });
}