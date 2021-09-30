const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name_product: {type: String},
    image_product: {type: String},
    price_product: {type: String},
    dec_product: {type: String},
    type_product:{type: String},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
})

module.exports = mongoose.model('Product', Product);