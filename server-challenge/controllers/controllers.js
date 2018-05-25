const convertWords = require("../algorithm.js");

exports.converter = (req, res) => {
  try {
    const number = req.body.number;
    const combis = convertWords.findWords(number);
    res.send(combis);
  } catch (e) {
    console.log(e);
  }
};
