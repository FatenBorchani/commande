const mongoose = require("mongoose");

const matiereSchema = mongoose.Schema({
    nom: { type: String, required: true },
    note: { type: Number, required: true,default:0 },
    
    
    

});



module.exports = mongoose.model("Matiere", matiereSchema);