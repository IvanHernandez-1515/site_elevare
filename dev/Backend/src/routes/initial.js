import { Router } from "express";

const router = Router();

// Ejemplo de uso del config
router.get('/', (req, res) => {
    res.send(`🚀 Bienvenido a ${globalThis.config}`);
});

export {router as initialRoute};