const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name : {type: String, required: true},
        price :{type: Number, required: true, default:0},  
        description :{type: String, required:true ,default:0},
        rating : {type: Number,required: true, default:0 }, 
        countInStock: {type:Number, required:true, default:0}
    }
);
module.exports = mongoose.model('Products', productSchema); 