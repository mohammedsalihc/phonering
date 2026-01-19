import { AuthModel } from "./auth.model";
import { IAuth, IUser } from "./auth.types";


export const CreateAuth = async (auth:IAuth):Promise<IAuth|any>=>{
    return await AuthModel.create(auth)
} 

export const FindUser = async(query:Partial<IAuth>)=>{
    return await AuthModel.findOne(query)
}

