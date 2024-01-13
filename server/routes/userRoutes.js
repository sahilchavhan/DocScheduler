const User=require('../models/userModels');
const bcrypt=require('bcrypt');
const express=require('express');
const router=express.Router();

router.post("/register",async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        //check if the email is already in use or not
        const existinguser=await User.findOne({email});
        if(existinguser){
            return res.status(400).json({message: "email is already registered"});
        }
        //encrypting password
        const hashedPassword=await bcrypt.hash(password, 10);

        //create a new user
        const user=new User({
            name,
            email,
            password: hashedPassword, 
            });

        //saving new user
        await user.save();
         res.status(201).json({message:"succesfully registered"});
    } catch (error) {
        console.error("Error during registration:", error);
         res.status(500).json({message:"some error occured in  intrnal server"})
    }
})

module.exports = router;