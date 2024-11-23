import express from 'express';

const app = express();

const mongourl = "mongodb+srv://navodmr1999:Password123@cluster0.anfbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.listen(3000,()=>{console.log("server is runing in 3000")})