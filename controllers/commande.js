const Commande = require("../models/commande");
const Product = require("../models/product");

const addCommande = async (req, res) => {
    try {
        const newCommande = new Commande(req.body);
        let totalPrice = 0; // Initialisez la variable du prix total à zéro

        // Pour chaque élément dans la commande, vérifiez si la quantité est disponible
        for (const item of newCommande.products) {
            const product = await Product.findById(item.prod);

            if (!product) {
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


  