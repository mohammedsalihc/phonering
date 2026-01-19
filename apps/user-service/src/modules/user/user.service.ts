import { createUser } from "./user.repository"

export const userRegistration = async (data:any)=>{
    return  await createUser(data)
}