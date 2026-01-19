import { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";
import { ERole } from "./auth.enum";
import { ObjectId } from "mongoose";

export interface IUser {
  name?: string,
  phone?: string,
  role?: ERole,
  auth?:string
}

export interface IAuth extends IUser {
  _id?:string,
  password?: string,
  role?: ERole
  user?: string | IUser
}

export interface IRequest extends Request {
  user?: JwtPayload;
}

export interface IResponse extends Response {

}