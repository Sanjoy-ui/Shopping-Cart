import User from "../models/userModel.js";
import validator from "validator"
import bcrypt from "bcryptjs"
import User from "../models/userModel.js";
import { geTtoken } from "../config/token.js";

export const register = async (req , res )=>{
    try {
        const {name , email , password } = req.body ;
        const existUser =await user.findOne(email) ; 
        if (existUser) {
            return res.status("400").json({message : "user already exists !"})
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({message : "enter valid email !"})
        }
        if (password.length < 8) {
            return res.status(400).json("enter atleast 8 character password !")
        }
        let passwordEncoded = await bcrypt.hash(password , 15)

        const user = await User.create({name ,email , password:passwordEncoded})
        const token = await geTtoken(user._id)
        res.cookie("token ",token , {
            httpOnly : true,
            secure : false ,
            sameSite : "strict",
            maxAge : 7 * 24 * 60 * 60 * 1000,
        })
        return res.status(201).json(user)
    } catch (error) {
        console.log("signUp Error")
        return res.status(500).json({message :" Sign Up error "})
    }
}
// 52:42 M