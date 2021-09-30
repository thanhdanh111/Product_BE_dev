const userSchema = require('../model/user.model')
async function getUsers(req, res,) {
    try {
        
        const conutUser = await userSchema.countDocuments()
        const users = await userSchema.find().exec()
        const totolCount  = conutUser
        const data = {
            Totolcount : totolCount,
            users : users,
        }
        return res.status(200).json(data)
    } catch (error) {
        console.log(error);
        return res.status(404).json({message: error.message})
    }
}

async function getUser(req, res){
    try {
        const emailUser = req.user.email
        if(!emailUser) return res.status(404).json({message: error.message})
        const user = await userSchema.findOne({email: emailUser}).exec()
        return res.status(200).json(user)
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}


async function updateUser (req,res) {
    try {
        console.log(req.body.email);
        const emailUser = req.user.email
        const user = await userSchema.findOne({email: emailUser}).exec()
        if(req.file){
            const avtar = `http://localhost:5000/${req.file.path}`
            user.avatar = avtar
        }
        await user.save()
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: 'ress'})
    }
}

module.exports = {
    getUsers,
    getUser,
    updateUser
}