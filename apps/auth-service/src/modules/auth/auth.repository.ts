import { AuthModel } from "./auth.model";
import { IAuth, IUser } from "./auth.types";


export const CreateUser = async (user:IAuth)=>{
    return await AuthModel.create(user)
} 

export const FindUser = async(query:Partial<IAuth>)=>{
    return await AuthModel.findOne(query)
}