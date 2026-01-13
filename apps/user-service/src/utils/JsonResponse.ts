import { IResponse } from "../modules/user/user.types";


export const JsonResponse = (response:IResponse,result?:any)=> {
   if(result){
     return response.status(200).json({success:true,data:result});
   }
   return response.status(200).json({status:"success"})
}