const mongoose = require("mongoose");

const etudiantSchema = mongoose.Schema({
  lastname: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  classe: [{
    type: String,
    required: true
  }
],
  matiere:  [
    {
    type: String,
    required: true
    }
]
});

module.exports = mongoose.model("Etudiant", etudiantSchema);