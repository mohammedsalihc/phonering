
import { NextFunction } from "express";
import { RegisterService } from "./auth.service"
import { IRequest, IResponse } from "./auth.types";
import { JsonResponse } from "../../utils/JsonResponse";

export const Register = async (req:IRequest,res:IResponse,next:NextFunction)=>{
   try{
    const token = await RegisterService(req?.body);
    JsonResponse(res,{token})
   }catch(e){
    next(e)
   }
}