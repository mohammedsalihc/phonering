import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    auth: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    name: { type: String, required: true }
});

export const UserModel = mongoose.model("User", UserSchema);
