import { NextFunction } from "express";
import { IRequest, IResponse } from "../modules/auth/auth.types";
import { ApiError } from "../utils/ApiError";
import { success } from "zod";

export const ErrorHandler = (err:any,req:IRequest,res:IResponse,next:NextFunction)=>{
    console.log("error came to middleware",err)
    if(err instanceof ApiError){
        return res.status(err.statusCode).json({
            success:false,
            message:err.message
        })
    }
    return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}