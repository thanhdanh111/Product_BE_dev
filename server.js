const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./src/router')
// accecpt request
app.use(cors())
//bodyParser accecpt take data from body
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(router)
app.listen(5000,(()=> console.log('oke')))