import { Router } from "express";

const router = Router();

//ejemplo de uso del config
router.get('/', (req, res) => {
    res.send(`🚀 Bienvenido a ${config.siteName}, en el puerto: ${config.port}`);
});

export {router as initialRoute};