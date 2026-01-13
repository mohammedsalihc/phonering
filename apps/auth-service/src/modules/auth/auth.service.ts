import { ApiError } from "../../utils/ApiError";
import { GenerateToken } from "../../utils/JwtHandler";
import { ERole } from "./auth.enum";
import { CreateAuth, FindUser } from "./auth.repository"
import { IAuth, IUser } from "./auth.types"
import bcrypt from "bcrypt"

export const RegisterService = async (body:Partial<IAuth>)=>{
    let exist_user = await FindUser({phone:body?.phone});
    if(exist_user){
        throw new ApiError(400,"user already exist"); //todo: custom error handling
    }
    body.password = await bcrypt.hash(body.password as string,10)
    const auth = await CreateAuth({name:body?.name,phone:body?.phone,password:body?.password,role:ERole.USER})
    const token =  GenerateToken(auth);
    return token;
}