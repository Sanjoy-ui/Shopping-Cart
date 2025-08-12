import express from "express"
import dotenv from "dotenv"
import connectdb from "./config/db.js";

dotenv.config()

const app = express()
const port = process.env.PORT || 8000 ;

app.get("/" , (req , res)=>{
    
})

app.listen(port , ()=>{
    console.log("server is running in " , port);
    connectdb();
})