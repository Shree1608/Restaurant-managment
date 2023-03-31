const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();
const uuid = require('uuid-random');

module.exports = async(req , res ,next)=>{
    try{
        const UorAid  = uuid()
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token , process.env.JWT_KEY)
        const findUser = await User.findOne({id : decoded.UorAid})
        if(token == findUser.token){
            req.userData = decoded; 
            return next();
        }else{
            res.status(401).json({
                message : 'token invalid'
            })
        }
    }catch(error){
        res.status(401).json({
            message : 'Auth Failed'
        });
    }
}