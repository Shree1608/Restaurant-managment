/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 const uuid = require('uuid-random');
 const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');
 const dotenv = require("dotenv").config();

module.exports = {
  userSignup : async(req,res)=>{
    const {name ,email,password,mobileNo,address} = req.body;
    const { roles } = sails.config.constant
    const id = uuid()
    const findUser = await User.findOne({email:email,mobileNo:mobileNo});
    if(findUser){
        res.status(403).json({message:'user already exists'})
    }
    else{
        const hash = await bcrypt.hash(password ,10)
        if(mobileNo.match(/^([+]\d{2})?\d{10}$/)){
            const CreateUser = await User.create({
                id:id,
                name :name ,
                email :email,
                password : hash,
                mobileNo :mobileNo,
                address:address,
                roles : roles.User
            }).fetch()
                res.status(200).json({
                    message : 'user created',
                    User : CreateUser
                })
        }else{
            res.status(500).json({message:'phone number invalid'})
        }
    }
  },
  login: async(req,res)=>{
    const {email , password} = req.body
    const findUser = await User.findOne({email})
    if(!findUser){
        res.status(404).json({message : 'email not found'})
    }else{
        const matchPasw = await bcrypt.compare(password , findUser.password)
        if(!matchPasw){
            res.status(500).json({message : 'invalid password'})
        }else{
            const token = jwt.sign({UorAid : findUser.id,email :findUser.email},process.env.JWT_KEY,{expiresIn :'24h'});
            const updateUorA = await User.updateOne({id:findUser.id},{token:token})
            res.status(200).json({
                message : 'Authentication Successful',
                token : token
            })

        }
    }
  },

  logout: async(req,res)=>{
    try{
        const finduserId = req.userData.UorAid;
        const finduser = await User.findOne({id : finduserId})
        const updateuser = await User.updateOne({id:finduserId},{token: " "})
        res.status(200).json({message :'successfully logout'})
        }catch(error){
            res.status(500).json({error:error})
        }
  }

};

