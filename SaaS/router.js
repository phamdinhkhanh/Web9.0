const express = require('express');
const router = express.Router();
const outputFileName = "question.json";
const questionRouter = require('./questionRouter');
const fileController = require('./fileController');
const questionList = fileController.readDataFromFile(outputFileName);
const id = questionList.length;

router.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/ask.html");
})

module.exports = router;
