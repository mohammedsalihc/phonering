export interface IUser{
  name?:string,
  phone?:string,
}

export interface IAuth extends IUser{
 password?:string,
 user?:string | IUser
}