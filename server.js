const express= require ('express');
const prodRouter=require('./routes/product');
const catRouter= require('./routes/category');
const userRoute=require('./routes/auth');
const commandeRoute=require('./routes/commande')
require("./config/connect");
const app = express();
app.use(express.json());
app.use('/cat',catRouter)
app.use('/prod',prodRouter);
app.use('/auth',userRoute)
app.use('/commande',commandeRoute)


app.listen(5005,()=>{
    console.log('server work')
})
module.exports=app