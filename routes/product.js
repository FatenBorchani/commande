const express = require('express');
const router= express.Router();
const prod=require('../controllers/product')
const auth=require("../middlewares/auth")
router.post("/add",auth.loggedMiddleware,auth.isAdmin,prod.postprod)
router.get("/id/:id",auth.loggedMiddleware,prod.getprod)
router.patch("/title/:title",auth.loggedMiddleware,auth.isAdmin,prod.patchprod)
router.delete("/delete/:id",auth.loggedMiddleware,auth.isAdmin,prod.deleteprod)

module.exports=router;
