
import { NextFunction } from "express";
import { RegisterService } from "./auth.service"
import { AuthDoc, IAuth, IRequest, IResponse, IUser } from "./auth.types";
import { JsonResponse } from "../../utils/JsonResponse";
import { publishUserRegistered } from "../../events/publishers/UserRegistered.publisher";
import { ERole } from "./auth.enum";

export const Register = async (req:IRequest,res:IResponse,next:NextFunction)=>{
   try{
    let body = req?.body
    const {token,auth } = await RegisterService({name:body?.name,phone:body?.phone,password:body?.password,role:ERole.USER});
    JsonResponse(res,{token})
    let user_data={
      name:body?.name,
      phone:body?.phone,
      role:ERole.USER,
      _id: auth._id.toString(),
    }
    publishUserRegistered(user_data)
   }catch(e){
    next(e)
   }
}