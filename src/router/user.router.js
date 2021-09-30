const { Router } = require('express')
const { getUsers,getUser ,updateUser} = require('../controller/user.controller')
const { authenticate } = require('../middleware/authuticate.middlerware')
const upload = require('../middleware/upload.middleware')
const userRouter = Router()
userRouter.get('/users',authenticate,getUsers)
userRouter.get('/user/me',authenticate,getUser)
userRouter.post('/user',authenticate,upload.single('avatar'),updateUser)


module.exports = userRouter