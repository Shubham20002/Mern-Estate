import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import userRouter from '../api/routes/user.route.js'
import authRouter from '../api/routes/auth.route.js'

configDotenv();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log("error",err)
})

const app=express();
app.use(express.urlencoded())

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
