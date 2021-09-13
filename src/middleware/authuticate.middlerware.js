
const userSchema = require('../model/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
async function checkUserRegister(req,res,next) {
    try{
        const user = await userSchema.findOne({
            email : req.body.email,
        }).exec();
        if(user){
            return res.status(400).json({message : 'email is invalid'})
        }
        next()
    }
    catch(err){
        return res.status(400).json({message: 'error'})
    }
}

function authenticate (req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token ==null ) return res.status(401).json({message: 'error'})
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(user);
        if(err) return res.status(401)
        req.user = user
        next()
    })
}

async function verifyUser( req, res, next){
    try{
        const user = await userSchema.findOne({
            email : req.body.email,
        }).exec();
        if(user){
            const verifyPassword = await bcrypt.compare(req.body.password,user.password)
            if(!verifyPassword){
                return res.status(401).json({message:"sai pass  word"})
            }
            next()
        }
        return res.status(401).json({message:"sai email"})

    }
    catch(err){
        return res.status(500)
    }
}


module.exports = {
    checkUserRegister,
    authenticate,
    verifyUser
}