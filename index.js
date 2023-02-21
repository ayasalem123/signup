import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from'cors';
import dotenv from'dotenv';
import router from "./routes/userRoutes.js";
const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
mongoose.set('strictQuery',false);
mongoose.connect("mongodb://127.0.0.1/userdb",{useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => console.log('Connected!')).catch((error)=>console.log(error.message));

app.use(router);
app.listen(5000);