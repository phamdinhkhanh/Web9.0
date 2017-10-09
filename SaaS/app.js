// sai thu vien cua nodejs
const fs = require('fs');
const path = require('path');
const express = require('express');
const fileController = require('./fileController');
const outputFileName = "test.json";


console.log(path.join(__dirname, "../public/style.css"));
let fileString = "Hello World"
let result = fileController.readDataFromFile(outputFileName)
console.log(result);


let testObject = {
  test1:"test1",
  test2:"test2"
}


fileController.writeDataToFile(outputFileName,testObject)
//
// let result2 = fs.writeFileSync("test.json",
// JSON.stringify(testObject),
// {endcoding:"utf-8"})
//
// // Javascript Object Notation
//
// let readFile = fs.readFileSync("test.json","utf-8");
// console.log(readFile)
//
// let convertObject = JSON.parse(readFile);
// console.log(convertObject);
//
// let readFileAsync = fs.readFile("test.json","utf-8",(err,data) => {
//   console.log(data);
// });
// console.log("result", readFileAsync);

let app = express();
app.get('/',(req,res) => {
  res.sendFile(__dirname +"/public/index.html")
});

app.get('/about', (req,res) => {
  res.send("I'm Khanh")
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

app.listen(6969,(err)=>{
  if (err) {
    console.log(err);
  } else {
    console.log("website is up");
  }
})

console.log("Hello World Im khanh 238479q37");
