import { UserModel } from "./user.model"

export const createUser = async  (data:any)=>{
    return await UserModel.create(data)
}