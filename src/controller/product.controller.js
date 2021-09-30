const productSchema = require('../model/product.model');

async function getProducts(req, res) {
	try {
		const products = await productSchema.find().exec();
		return res.status(200).json(products);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
}

async function getProductByID(req, res) {
	try {
		const product_id = req.params.product_id;
		if (!product_id) return res.status(400).json({ message: 'sai ID' });
		const product = await productSchema.find({ _id: product_id }).exec();
		return res.status(200).json(product);
	} catch (error) {
		return res.status(500).json({ message: 'sai eroi' });
	}
}

async function addProduct(req, res) {
	try {
		const product = new productSchema({
			name_product: req.body.name_product,
			price_product: req.body.price_product,
			dec_product: req.body.dec_product,
		})
		if(req.file){
			product.image_product = req.file.path
		}
		const newProduct = await product.save()
		return res.status(200).json(newProduct)
	} catch (error) {
		return res.status(400).json({ message: message.error })
	}
}

async function deleteProduct(req, res) {
	try {

		const product_id = req.params._id
		console.log(product_id);
		const product = await productSchema.deleteOne({ _id: product_id });
		console.log(product);
		if(!product){
			return res.status(404).json({ message: 'error'})
		}
		return res.status(200).json(true)
	} catch (error) {
		console.log(error);
		return res.status(400).json({ message: 'asdsa' })
	}
}
async function getProductType(req, res) {
	try {
		const type_product = req.params.type_product;
		if (!type_product) {
			return res.status(400).json({ message: message.error });
		}
		const product = await productSchema.find({ type_product: type_product }).exec();
		return res.status(200).json(product);
	} catch (error) {
		return res.status(400).json({ message: message.error });
	}
}
module.exports = {
	getProducts,
	getProductByID,
	addProduct,
	getProductType,
	deleteProduct
};
