import { Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import type { IRequest } from "@auth/auth.types";

const authMiddleware = (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.get("authorization") || req.get("Authorization")

    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET as string) as JwtPayload;

    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authMiddleware;
