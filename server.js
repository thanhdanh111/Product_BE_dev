const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./src/router')
// accecpt request
app.use(cors())
//bodyParser accecpt take data from body
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))
app.use('/uploads', express.static('uploads'))
// Pass the below configs to your server to increase your request size.

app.use(express.json({ extended: false, limit: '50mb' }))

app.use(router)
app.listen(5000,(()=> console.log('oke')))