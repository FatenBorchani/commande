
const Prof=require("../models/etudiant")
const getetud=(req, res) => {
    
    Etudiant.findbyID({ _id:req.params.id })
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
const addMat = async (req, res) => {
   
    try {
        
        const etudiant = await ediant.find(_id:req.body.etudiant.id)


        // Pour chaque élément dans la commande, vérifiez si la quantité est disponible
        for (const item of etudiant.listmatiere) {
            

            if (item.nom!==nom) {
                return res.status(404).json({
                    message: 'Produit introuvable',
                
                });
            }

            if (item.quantite > product.stock) {
                return res.status(400).json({
                    message: `Quantité insuffisante pour ${product.title}`,
                });
            }

            // Ajoutez le prix du produit à la variable du prix total
            totalPrice += product.price * item.quantite;
        }

        // Affectez le prix total à la propriété "prixTotal" de la commande
        newCommande.prixTotal = totalPrice;
        newCommande.client=userId;
        // Si toutes les vérifications passent, enregistrez la commande
        await newCommande.save();

        res.status(201).json({
            model: newCommande,
            message: 'Commande ajoutée!',
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            message: 'Données invalides',
        });
    }
};

module.exports = {
    addCommande: addCommande
};