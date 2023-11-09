const Matiere=require("../models/matiere")
const addmatiere=(req, res) => {
    const newMatiere = new Matiere(req.body);
    newMatiere.save()
      .then(() => {
        res.status(201).json({
          model: newMatiere,
          message: 'Matiere ajouté!',
        });
      })
      .catch(error => {
        res.status(400).json({
          error: error.message,
          message: 'Données invalides',
        });
      });
  };
  module.exports={
    addmatiere:addmatiere
}