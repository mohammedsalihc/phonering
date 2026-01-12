// import { Request,Response,NextFunction } from "express";
// import jwt from 'jsonwebtoken'
// import {IRequest} from "@auth/auth.types"
// const authMiddleware = (req: IRequest, res: IResponse, next: NextFunction) => {
//     const token = req.headers['authorization']||req.headers['Authorization'];
//     if(!token){
//         return res.status(401).json({message:"Unauthorized"});
//     }
//     const docoded = jwt.verify(token as string,process.env.JWT_SECRET as string);
//     req.user = docoded;
// }