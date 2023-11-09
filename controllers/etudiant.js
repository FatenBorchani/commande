
const Etudiant=require("../models/etudiant")
const getetud=(req, res) => {
    
    Etudiant.findById({ _id:req.params.id })
    .populate("matiere")
      .then(etudiant=> {
        if (etudiant) {
          res.status(200).json({
            model: book,
            message: 'Etudiant  trouvé!'
          });
        } else {
          res.status(404).json({
            message: 'Etudiant non trouvé!'
          });
        }
      })
      .catch((err) => {
        res.status(400).json({
          error: err.message,
          message: 'Données invalides!'
        });
      });
  };
  const postetud=(req, res) => {
    const newEtudiant = new Etudiant(req.body);
    newEtudiant.save()
      .then(() => {
        res.status(201).json({
          model: newEtudiant,
          _id:req.body.id,
          
          message: 'Etudiant créé!',
        });
      })
      .catch(error => {
        res.status(400).json({
          error: error.message,
          message: 'Données invalides',
        });
      });
  };
  const patchetud=(req, res) => {
    Book.findByIdAndUpdate({_id:req.params.id}, req.body, { new: true })
      .then(etudiant => {
        if (!etudiant) {
          res.status(404).json({
            message: 'Etudinat non trouvé!',
          });
        } else {
          res.status(200).json({
            model: etudiant,
            message: 'Etudiant  modifié!',
          });
        }
      })
      .catch(error => {
        res.status(400).json({
          error: error.message,
          message: 'Problème de mise à jour du etudiant',
        });
      });
  };
  const deleteetud=(req, res) => {
    Book.findByIdAndRemove({_id:req.params.id})
      .then(book => {
        if (!book) {
          res.status(404).json({
            message: 'Etudiant  non trouvé!',
          });
        } else {
          res.status(200).json({
            message: 'Etudiant supprimé avec succès!',
          });
        }
      })
      .catch(error => {
        res.status(400).json({
          error: error.message,
          message: 'Problème de suppression du etudinat',
        });
      });
  };
  module.exports={
    getetud:getetud,
    postetud:postetud,
    patchetud:patchetud,
    deleteetud:deleteetud
}