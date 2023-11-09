const mongoose = require("mongoose");
const Roles = ['admin', 'user'];

const emailValidator = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};



const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: emailValidator,
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (password) => password.length <= 8,
      message: 'Le mot de passe doit comporter au moins 8 caractères.',
    },
  },
  lastname:{
    type:String,
    require:true},
  firstname:{type:String,
    require:true},
  role:{type:String,
    require:true,
    enum:Roles}
    
});

module.exports = mongoose.model("User", userSchema);
