const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/TEST",
{ useNewUrlParser : true,useUnifiedTopology : true })
.then(()=> 
 console.log("Connexion a  MongoDB reussie!"))
.catch((e)=>
 console.log("Connexion à MongoDB echouée!",e))
 module.exports=mongoose
