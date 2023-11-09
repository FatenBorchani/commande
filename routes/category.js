const express=require("express")
const router=express.Router()
const categoryController=require("../controllers/category")
const auth=require("../middlewares/auth")
  router.post('/add', auth.loggedMiddleware,auth.isAdmin,categoryController.addcategory)
  module.exports=router