const express=require("express")
const router=express.Router()
const commandeController=require("../controllers/commande")
router.post('/add',commandeController.addCommande)
  module.exports=router