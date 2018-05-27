'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const router = require('./endpoints/endpoints');
const cors = require('cors');




const port = process.env.PORT ||  8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors('*'));
app.use(router);
app.listen(port, function(){
  console.log('running' + port);
})

// module.exports = server
