import jwt from "jsonwebtoken"

export const  geTtoken = async (userID)=>{
    try {
        const token = await jwt.sign({userID } , process.env.JWT_SECRET , {expiresIn : "7d"})
        return token
    } catch (error) {
        console.log("token not generated")
    }
}