import { Router } from "express";
import { registerSchema } from "./auth.schema";
import { validate } from "../../middlewares/validate.middleware";
import { Register } from "./auth.controller";

const router = Router();

router.post("/register", validate(registerSchema), Register);

export default router;
