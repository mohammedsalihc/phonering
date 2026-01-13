import mongoose from "mongoose";
import { object } from "zod";
import { ERole } from "./auth.enum";

const authSchema = new mongoose.Schema({
  phone: {type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:{type:String,required:true,enum:Object.values(ERole)}
});

export const AuthModel = mongoose.model("Auth", authSchema);
