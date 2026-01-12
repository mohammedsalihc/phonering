"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const token = req.headers['Authorization'] || req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const docoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    req.user = docoded;
    next();
};
