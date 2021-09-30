const { Router } = require('express')
const { addToCart, getProductToCart} = require('../controller/cart.controller')
const { authenticate } = require('../middleware/authuticate.middlerware')

const cartRouter = Router()

cartRouter.post('/cart',authenticate,addToCart)
cartRouter.get('/cart',authenticate,getProductToCart)


module.exports = cartRouter