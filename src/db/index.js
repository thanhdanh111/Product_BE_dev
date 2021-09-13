const mongoose = require('mongoose');
async function connect (){
    try {
        await mongoose.connect('mongodb+srv://TranThanhDanh:danhtran123@cluster0.gkz6p.mongodb.net/anhHieu_dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true    
    });
    console.log("oke");
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    connect
}