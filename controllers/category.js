const Cat=require("../models/category")
const addcategory=(req, res) => {
    const newCategory = new Cat(req.body);
    newCategory.save()
      .then(() => {
        res.status(201).json({
          model: newCategory,
          message: 'Categorie ajouté!',
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
    addcategory:addcategory
}