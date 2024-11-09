import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log("error",err)
})

const app=express();

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})