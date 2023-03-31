const {roles} = sails.config.constant ;
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();

module.exports= async(req ,res,next)=>{
  try{
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token , process.env.JWT_KEY)
    const user = await User.findOne({roles : roles.Admin})
         if(token == user.token ){
            req.userData = decoded; 
            return next();
        }else{
            
                res.status(500).json({message :'auth fail'})
            }
  }catch(error){
   console.log(error);
  }
    
        
}
    
