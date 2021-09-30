const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productIncart = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    products_in_cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
})  

module.exports = mongoose.model('productIncard', productIncart);