import {Request,Response} from "express";
import { JwtPayload } from "jsonwebtoken";

export interface IRequest extends Request {
  user?: JwtPayload;
}

export interface IResponse extends Response{
  
}