const { Router}  = require('express')
const authenticationRouter =require('../router/authuticate.router')
const database = require('../db');
const userRouter = require('./user.router');
const productRouter = require('./product.router');
const cartRouter = require('./cart.router');
const router = Router();
database.connect();
router.use([
    authenticationRouter,
    userRouter,
    productRouter,
    cartRouter,
])

module.exports = router;