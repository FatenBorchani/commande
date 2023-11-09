const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    marque: {
        type: String,
        required: true 
    },
    des: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
  
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true
        }
    ]

})

module.exports = mongoose.model('Product', productSchema);
