import { Router } from "express";

const router = Router();

//ejemplo de uso del config
router.get('/greeting', (req, res) => {
    res.send(`🚀 Bienvenido a ${config.siteName}, en el puerto: ${config.port}`);
});

export default router;