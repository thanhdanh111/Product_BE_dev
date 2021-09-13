const { Router } = require('express')
const {Registers, verifyEmail}  = require('../controller/authticate.controller')
const {login, getToken}  = require('../controller/login.controller')
const { checkUserRegister, authenticate,verifyUser} = require('../middleware/authuticate.middlerware')
const authenticationRouter = Router()
authenticationRouter.post('/register',checkUserRegister ,Registers)
authenticationRouter.post('/login',verifyUser,getToken)
authenticationRouter.get('/login',authenticate ,login)
authenticationRouter.get('/verify-email',verifyEmail)



module.exports = authenticationRouter