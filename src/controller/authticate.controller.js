const userSchema = require("../model/user.model");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require('dotenv').config()
async function Registers(req, res) {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const hashedToken = await bcrypt.hash(process.env.SENDGRID_API_KEY, salt);
    const user = {
      email: req.body.email,
      password: hashedPassword,
      verifyToken: hashedToken,
      verifyEmail: false,
    };
    const newUser = userSchema(user);
    
    let transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: 'tranthanhdanh0311@gmail.com', // generated ethereal user
        pass: 'danhtran123',
      },  
    });
     await transporter.sendMail({
      from: '"Tran Thanh Danh" <tranthanhdanh0311@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: `Hello Hoang`, // Subject line
      text: `Anh la Danh Day`,
      html: `<a href="http://localhost:5000/verify-email?verifyToken=${user.verifyToken}">Verify Email </a>`, // html body
    });
    await newUser.save();
    return res.status(201).json(true);
  } catch(err) {
    return res.status(500).json({message:"eoor"})
  } 
}

async function verifyEmail(req, res) {
  try{
    const user = await userSchema.findOne({verifyToken: req.query.verifyToken});
    if(!user){
      return res.status(401).json({message:'invalid token'})
    }
    user.verifyEmail = true
    await user.save()
    return res.redirect('http://localhost:3000/login')
  }catch{
    return res.status(401).json({message:'error'})
  }
}

module.exports = {
  Registers,
  verifyEmail
};
