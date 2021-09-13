const { Router}  = require('express')
const authenticationRouter =require('../router/authuticate.router')
const dataabse = require('../db')
const router = Router();
dataabse.connect();
router.use([
    authenticationRouter,
])

module.exports = router;