import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import jsonwebtoken from'jsonwebtoken'
import User from '../models/user.js';
export const register=async(req,res)=>{
   //var jwt=jsonwebtoken();
    try{
        const {email,age,password}=req.body;
        
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(402).json({errors:errors.mapped()})
        }
        else 
        {
            
            const found=await User.find({email:email});
           if(found.length!=0)
            {
                return res.send("already exists");
            }
            const saltRounds = 10;
            const hashedpassword=await bcrypt.hash(password,saltRounds);
            const newuser=await User.create(
                    {
                    email,
                    age,
                    password:hashedpassword
                });
            res.status(202).json(newuser);
            
        }
    }catch(error){
     console.log(error.message);
    }
}

export const sign=async(req,res)=>{
   
    try{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(402).json({errors:errors.mapped()})
        }
        else{
            const {email,password}=req.body;
            const found=await User.find({email:email});
            if(found.length==0)
                {
                    return res.send("sign up first");
                }
                
               const ismatched= await bcrypt.compare(password,found.password);
               if(ismatched){
                //const token=await jwt.sign({id:found._id},process.env.SECRET,{expiresIn:"38d"})
                return res.send(found)
               }
               else{
                return res.send("invalid password")
               }

        }
       
    }catch(error){
     console.log(error.message);
    }
}