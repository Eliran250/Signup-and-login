const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../Model/userSchema");

const dotenv = require("dotenv");
dotenv.config();
const SECRETKEY = process.env.SECRETKEY;


exports.signUp = async (req,res) =>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new userModel({...req.body, password:hashedPassword});
        await user.save();
        res.status(201).json({messeage: "User created"});
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
}
exports.logIn = async (req,res) =>{
    try 
    {   
        const user = await userModel.findOne({email: req.body.email}); 
        if (!user) 
        {
            return res.status(401).json({message: "email or password invalid"})    
        }
        const hPassword = await bcrypt.compare(req.body.password, user.password);
        if (!hPassword)
        {
            return res.status(401).json({message: "email or password invalid"})    
        }
        const token = jwt.sign({id: user._id}, SECRETKEY,{expiresIn: "30d"});
        console.log('Token:', token);
        res.cookie("token", "Bearer " + token,{httpOnly: true, secure: true});
        res.status(201).json({message: "you'r in"});
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
}
