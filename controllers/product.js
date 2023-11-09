const Product=require("../models/product")
const getprod=(req, res) => {
    
    Product.findById({ _id:req.params.id })
    .populate("category")
      .then(prod => {
        if (prod) {
          res.status(200).json({
            model: book,
            message: 'Produit trouvé!'
          });
        } else {
          res.status(404).json({
            message: 'Produit non trouvé!'
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
  const postprod=(req, res) => {
    const newProd = new Product(req.body);
    newProd.save()
      .then(() => {
        res.status(201).json({
          model: newProd,
          _id:req.body.id,
          
          message: 'Produit  créé!',
        });
      })
      .catch(error => {
        res.status(400).json({
          error: error.message,
          message: 'Données invalides',
        });
      });
  };
  const patchprod=(req, res) => {
    Book.findByIdAndUpdate({_id:req.params.id}, req.body, { new: true })
      .then(book => {
        if (!book) {
          res.status(404).json({
            message: 'Produit non trouvé!',
          });
        } else {
          res.status(200).json({
            model: book,
            message: 'Produit modifié!',
          });
        }
      })
      .catch(error => {
        res.status(400).json({
          error: error.message,
          message: 'Problème de mise à jour du produit',
        });
      });
  };
  const deleteprod=(req, res) => {
    Book.findByIdAndRemove({_id:req.params.id})
      .then(book => {
        if (!book) {
          res.status(404).json({
            message: 'Produit non trouvé!',
          });
        } else {
          res.status(200).json({
            message: 'Produit supprimé avec succès!',
          });
        }
      })
      .catch(error => {
        res.status(400).json({
          error: error.message,
          message: 'Problème de suppression du produit',
        });
      });
  };
  module.exports={
    getprod:getprod,
    postprod:postprod,
    patchprod:patchprod,
    deleteprod:deleteprod
}