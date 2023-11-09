const jwt = require("jsonwebtoken")
const User=require("../models/auth")
module.exports.loggedMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET")
    const userId = decodedToken.userId
    User.findOne({_id:userId})
    .then((user)=>{
      if(!user){
        res.status(401).json({
          message: "user doesn't exist"
        });

      }
      else{
      req.auth = {
        userId: userId,
        role:user.role
      }
      next()
    }})
    .catch((e) => {
      res.status(500).json({ error: e.message })
      });
    
      
    
  } catch (error) {
    res.status(401).json({ error:error.message })
  }
}
module.exports.isAdmin=(req,res,next)=>{
  try {
    if(req.auth.role==="admin"){
      next()
      
    } 
    else{
      res.status(403).json({error:"no access to this route"})
    }
    }
   catch (e) {
    res.status(401).json({error:e.message})
  }
}
  module.exports.isClient=(req,res,next)=>{
    try {
      if(req.auth.role==="user"){
        next()
        
      } 
      else{
        res.status(403).json({error:"no access to this route"})
      }
      }
     catch (e) {
      res.status(401).json({error:e.message})
    }
  
}
