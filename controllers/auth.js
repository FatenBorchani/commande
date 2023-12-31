const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const User=require("../models/auth")
exports.signup = (req, res, next) => {
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        const user = new User({
          email: req.body.email,
          password: hash,
          lastname:req.body.lastname,
          firstname:req.body.firstname,
          role:req.body.role
        });
        user
          .save()
          .then((response) => {
            const newUser = response.toObject();
            delete newUser.password;
            res.status(201).json({
              user: newUser,
              message: "utilisateur crée",
            });
          })
          .catch((error) => res.status(400).json({ error }));
      })
      .catch((error) => res.status(400).json({ error }));
  };


exports.login=(req,res,next)=>{
 User.findOne({email:req.body.email})
 .then((user)=>{
    if(!user){
        return res
        .status(401)
        .json({message:"Login ou mot passe incorrecte"})

    }
    bcrypt
    .compare(req.body.password,user.password)
    .then((valid)=>{
     if(!valid){
        return res
        .status(401)
        .json({message:"Login ou mot passe incorrecte"})
     }
     res.status(200).json({
        token:jwt.sign({userId:user._id},"RANDOM_TOKEN_SECRET",{expiresIn:"24h",
        }),
        
    })
     })
     .catch((error)=>res.status(500).json({error}))

    })
    .catch((error)=>res.status(500).json({error}))
 }
