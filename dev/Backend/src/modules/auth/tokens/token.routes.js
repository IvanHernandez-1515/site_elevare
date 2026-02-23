import { Router } from "express";

const router = Router();

import { verifyEmailController } from "./token.controller.js";

router.post("/token", verifyEmailController);

export default router;