const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email: {type: String},
    password: {type: String},
    avatar: {type: String},
    verifyToken: {type: String},
    verifyEmail: {type: Boolean},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
})

module.exports = mongoose.model('User', User);