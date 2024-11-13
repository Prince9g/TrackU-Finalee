import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String, required:true, unique:true},
    mobile:{type:String, required:true, unique:true, match:/^[0-9]{10}$/},
    password:{type:String, required:true},
    
}, {timestamps:true});
export const User = mongoose.model("User", userSchema);