import { CreateUser, FindUser } from "./auth.repository"
import { IAuth, IUser } from "./auth.types"


export const RegisterService = async (body:Partial<IAuth>)=>{
    let exist_user = await FindUser({phone:body?.phone});
    if(exist_user){
        throw new Error("User already exist"); //todo: custom error handling
    }
    
    return await CreateUser(body)
}