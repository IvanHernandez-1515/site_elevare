import { Router } from "express";

const router = Router();

//modulos == recursos
import initialRoutes from "../modules/initial/initial.routes.js";
import authRoutes from "../modules/auth/register/auth.routes.js";
import verifyEmailController from "../modules/auth/tokens/token.routes.js";

//mainrutes
router.use("/v1/initial", initialRoutes);
router.use("/v1/auth", authRoutes);
router.use("/v1/verify", verifyEmailController);

export default router;