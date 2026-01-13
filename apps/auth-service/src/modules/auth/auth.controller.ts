
import { RegisterService } from "./auth.service"
import { IRequest, IResponse } from "./auth.types";

export const Register = async (req:IRequest,res:IResponse)=>{
   try{
     const token = await  RegisterService(req?.body);
     res.status(201).json(token)
   }catch(err){
    console.log()
     res.status(500).json({message:"err.mess"})
   }
}