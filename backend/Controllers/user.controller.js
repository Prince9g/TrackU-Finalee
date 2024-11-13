import { User } from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyOtp } from "./otp.controller.js";

export const register = async (req, res) => {
  try {
    const { username, mobile, otp, password } = req.body;
    if (!username || !mobile || !password || !otp) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // Verify OTP before proceeding
    const isOtpValid = await verifyOtp(mobile, otp);
    if (!isOtpValid) {
      return res.status(401).json({
        message: "Invalid or expired OTP",
        success: false,
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists!",
        success: false,
      });
    }

    // Hash the password and create the user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      mobile,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account created successfully!",
      success: true,
      user: { username: newUser.username, mobile: newUser.mobile },
    });
  } catch (err) {
    console.error("Error during registration:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res)=>{
    try{
        const {mobile, password} = req.body;
        if (!mobile || !password) {
            return res.status(401).json({
              message: "Something is missing, please Check!!",
              success: false,
            });
        }
        let user = await User.findOne({mobile});
        if(!user){
            return res.status(401).json({
                message: "Incorrect Mobile Number or Password!!",
                success: false,
              });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(401).json({
                message: "Incorrect Mobile Number or Password!!",
                success: false,
              });
        }
        const token = await jwt.sign({userId:user._id}, process.env.SECRET_KEY, {expiresIn:'1d'});
        return res.cookie('token', token, {httpOnly:true, sameSite:'strict', maxAge: 1*24*60*60*1000}).json({
            message:`Welcome back ${user.username}`,
            success:true,
            user
        })
    } catch(err){
        console.log(err);
    }
};
export const logout = async (_, res) => {
    try{
        return res.cookie('token','',{maxAge:0}).json({
            message:"Logged Out Successfully!!",
            success:true
        })
    } catch(err){
        console.log(err);
    }
};