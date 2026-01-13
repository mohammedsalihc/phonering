import { JwtPayload } from "jsonwebtoken";
import {Request,Response} from "express";
export interface IUser{
  name?:string,
  phone?:string,
}

export interface IAuth extends IUser{
 password?:string,
 user?:string | IUser
}

export interface IRequest extends Request {
  user?: JwtPayload;
}

export interface IResponse extends Response{
  
}