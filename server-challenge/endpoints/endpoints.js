const express = require('express');
const numberToLetters = require('../controllers/controllers');
const router = express.Router();


router.post('/convert', numberToLetters.converter);


module.exports = router;
