import { Router } from "express";
import { registerSchema } from "./auth.schema";
import { validateBody } from "../../middlewares/validate.middleware";
import { Register } from "./auth.controller";

const router = Router();

router.post("/register", validateBody(registerSchema), Register);

export default router;
