// sai thu vien cua nodejs

const express = require('express');
const questionRouter = express.Router();
const fileController = require('./fileController');
const math = require('math');
const outputFileName = "question.json";
const questionList = fileController.readDataFromFile(outputFileName);
const id = 0;
questionRouter.get('/',(req,res) => {
  //TO DO
  //get random question
  //render question with template
  // let questionList = fileController.readDataFromFile(outputFileName);
  let random = math.floor(math.random()*questionList.length);
  let question = questionList[random];
  res.render("question",
    {question: question.question,
      yes:question.yes,
      no:question.no
      // layout = "test"
  });
  // console.log(math.floor(math.random()*questionList.length));
  let id = random;
})


questionRouter.post('/questionNoResponse',(req,res) => {
    questionList[id].no = questionList[id].no+1;
    let question = questionList[id];
    res.render("question",
      {question: question.question,
        yes:question.yes,
        no:question.no
        // layout = "test"
    });
})


questionRouter.post('/questionYesResponse',(req,res) => {
  questionList[id].yes = questionList[id].yes+1;
  let question = questionList[id];
  res.render("question",
    {question: question.question,
      yes:question.yes,
      no:question.no
      // layout = "test"
  });
})



// req.body
// req.query
// req.params

//TO DO get list with ID
questionRouter.get('/:id',(req,res) => {
  console.log(req.query);
  let question = questionList[req.params.id];
  res.render("questionAnsweer",
  {question:question.question,
    yes:question.yes,
    no:question.no
  })
  // res.send(req.params.id);
})

module.exports = questionRouter;
