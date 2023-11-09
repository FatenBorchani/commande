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
  classe: {
    type: String,
    required: true
  },
  listematiere:  [
    {
        type: Schema.Types.ObjectId,
        ref: "Matiere",
        required: true
    }
]
});

module.exports = mongoose.model("Etudiant", etudiantSchema);
