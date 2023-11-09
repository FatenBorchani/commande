const mongoose = require("mongoose");

const CommandeSchema = mongoose.Schema({

  client: { type: mongoose.Schema.Types.ObjectId, ref: "user",required:false },

  products: [
    {
      prod: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      quantite: { type: Number, required: true },
    },
  ],
  
  prixTotal: { type: Number,
     required: true},
});

module.exports = mongoose.model("Commande", CommandeSchema);