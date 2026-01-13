import { NextFunction } from "express";
import { ApiError } from "../utils/ApiError";
import { success } from "zod";
import { IRequest, IResponse } from "../modules/user/user.types";

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