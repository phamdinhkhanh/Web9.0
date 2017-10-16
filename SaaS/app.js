// sai thu vien cua nodejs
const fs = require('fs');
const path = require('path');
const express = require('express');
const fileController = require('./fileController');
const outputFileName = "question.json";
const bodyParser = require('body-parser');
const viewRouter = require('./router');
const questionRouter = require('./questionRouter');
const exhbs = require('express-handlebars');



console.log(path.join(__dirname, "../public/style.css"));
let fileString = "Hello World"
let result = fileController.readDataFromFile(outputFileName)
// console.log(result);


let testObject = {
  test1:"test1",
  test2:"test2"
}

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.engine("handlebars",exhbs({defaultLayout:"main"}));
app.set("view engine","handlebars");


app.get('/',(req,res) => {
  // res.sendFile(__dirname +"/public/menu.html")
  res.render("home");
});


app.get('/menu.css',(req,res) => {
  res.sendFile(__dirname+"/views/layouts/menu.css")
})


app.get('/about', (req,res) => {
  // res.sendFile(__dirname+"/public/about.html")
  res.render("about");
})

app.get('/testhtml', (req,res) => {
  let test = 5;
  // let es6String = "abc "+test.tostring() + "dfada";
  let es6String = `abc "+ ${test} + "dfada`;
  console.log(es6String);
  res.send("<h1>Test html</h1><li>1</li><li>2</li>")
})

app.get('/style.css',(req,res) => {
  res.sendFile(__dirname+"/public/style.css")
})

app.get('/styleabout.css',(req,res) => {
  res.sendFile(__dirname+"/public/styleabout.css")
})

app.get('/about.html',(req,res) => {
  res.sendFile(__dirname+"/public/about.html")
})


app.use('/ask', viewRouter);

app.get('/question/question.css',(req,res) => {
  res.sendFile(__dirname+"/views/question.css");
})

app.get('/question/menu.css',(req,res) => {
  res.sendFile(__dirname+"/views/layouts/menu.css")
})

app.use('/question', questionRouter);

app.get('/ask.css',(req,res) => {
  res.sendFile(__dirname+"/public/ask.css")
})

app.get('/question.css',(req,res) => {
  res.sendFile(__dirname+"/views/question.css")
})


// app.get('/question',(req,res) => {
//   res.render("question");
// })

app.get('/home',(req,res) => {
  res.sendFile(__dirname+"/public/index.html");
})

// app.use('/questionPost',questionPostRouter);

app.get('/questionLast',(req,res) => {
  let questionList = fileController.readDataFromFile(outputFileName);
  let question = questionList[questionList.length-1];
  res.render("question",
    {question: question.question,
      yes:question.yes,
      no:question.no
      // layout = "test"
  });
})

app.post('/question',(req,res) => {
  let questionList = [];
  try{
    questionList = fileController.readDataFromFile(outputFileName);
  } catch(ex){
    console.log(ex);
    questionList = [];
  }
  let newQuestion = {
    question : req.body.question,
    yes:0,
    no:0,
  }
  // console.log(questionList);
  questionList.push(newQuestion);
  fileController.writeDataToFile(outputFileName,questionList);
  // app.use('/question', questionRouter);
  res.redirect('/questionLast');
  // questionRouter.get('/${id}')
  // console.log(`/question/${id}`);
  // res.redirect(`/question/${id}`);
})

//
// router.get('/ask/question');
// router.get('/ask/postabout');

app.listen(6969,(err)=>{
  if (err) {
    console.log(err);
  } else {
    console.log("website is up");
  }
})
