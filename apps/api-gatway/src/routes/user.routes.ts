import { Router } from "express";
import { userProxy } from "../proxy/user.proxy";

const router = Router();

router.use("/", userProxy);

export default router;
