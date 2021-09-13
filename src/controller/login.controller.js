const userSchema = require('../model/user.model')
require('dotenv').config()
const jwt = require('jsonwebtoken')
async function login(req,res) {
    try{
        const user = await userSchema.findOne({
            email : req.user.email,
        }).exec();
        if(user){
            return res.status(200).json(user)
        }
        return res.status(401).json({message: 'email is invalid'})
    }
    catch(err){
        return res.status(500).json({message: 'error'})
    }
}
function getToken(req,res) {
    const userEmail = req.body.email;
    const user = { email: userEmail}

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    
    res.status(200).json({
        token : accessToken
    })

}

module.exports = {
    login,
    getToken,
}