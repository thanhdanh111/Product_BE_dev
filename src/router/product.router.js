const { Router } = require('express')
const upload = require("../middleware/upload.middleware");
const productRouter = Router();
const { getProducts, getProductByID, addProduct ,getProductType,deleteProduct} = require('../controller/product.controller');
const { authenticate } = require('../middleware/authuticate.middlerware');
productRouter.get('/products',authenticate,getProducts);
productRouter.get('/products/:type_product',authenticate,getProductType)
productRouter.get('/product/:product_id',authenticate,getProductByID);
productRouter.delete('/product/:_id',authenticate,deleteProduct);
productRouter.post('/products',authenticate,upload.single('image_product'),addProduct);

module.exports = productRouter;
