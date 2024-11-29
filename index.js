import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/userRouter.js';
import mongoose from 'mongoose';

const app = express();

const mongoUrl = "mongodb+srv://navodmr1999:Password123@cluster0.anfbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl,{})

const connection = mongoose.connection;

connection.once("open",()=>{
  console.log("Database connected");
})


app.use(bodyParser.json())

app.use("/api/users",userRouter)

app.listen(3000,()=>{console.log("server is runing in 3000")})
