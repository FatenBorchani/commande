const express=require("express")
const router=express.Router()
const commandeController=require("../controllers/commande")
const auth=require("../middlewares/auth")
router.post('/add',auth.loggedMiddleware,auth.isClient,commandeController.addCommande)
  module.exports=router