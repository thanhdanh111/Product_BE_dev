const productIncard = require('../model/buyProduct.model');
const userSchema = require('../model/user.model');
const productSchema = require('../model/product.model');
const multer = require('multer');

async function addToCart(req, res) {
	try {
		const product_id = req.body.product_id;
		// const product = await productSchema.find({product_id}).exec();
		// console.log(product_id);
		const email_user = req.user.email;
		const user = await userSchema.findOne({ email: email_user }).exec();
		// console.log(user._id);
		const userInCart = await productIncard.findOne({ user_id: user._id }).exec();
		// console.log(userInCart);
		if (userInCart) {
			userInCart.products_in_cart[userInCart.products_in_cart.length] = product_id
            console.log('dasa',userInCart.products_in_cart);
			await userInCart.save();

			return res.status(200).json(userInCart);
		}
		const addProductToCart = new productIncard({
			user_id: user._id,
			products_in_cart: product_id,
		});
		const product = await addProductToCart.save();
		return res.status(200).json(product);
	} catch (err) {
		return res.status(400).json({ message: err.message });
	}
}
async function getProductToCart(req,res){
    try {
        const email_user = req.user.email;
        const user = await userSchema.findOne({ email: email_user }).exec();
        const userInCart = await productIncard.findOne({ user_id: user._id }).exec();
        if(!userInCart) return res.status(200).json({message:"kong co j trong cart"})
        const acc = await productIncard.find({_id: userInCart._id}).populate('User')
        return res.status(200).json(acc)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: 'asd' })
    }
}
module.exports = {
	addToCart,
    getProductToCart
};
