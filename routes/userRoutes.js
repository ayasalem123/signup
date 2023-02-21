import express from 'express';
import { register,sign } from '../controllers/userController.js';
import {dataValidation}from '../middlwears/dataValidation.js'
const router=express.Router();
router.post("/register",dataValidation,register);
router.post("/sign",dataValidation,sign);
export default router;