'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const router = require('./endpoints/endpoints');
const cors = require('cors');





app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors('*'));
app.use(router);
app.listen(process.env.PORT ||  4000, function(){
  console.log('running @4000');
})
