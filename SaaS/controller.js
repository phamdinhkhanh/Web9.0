const fs = require('fs');
const express = require('express');

let app = express();

app.get('/', (req,res) => {
  res.sendFile(__dirname+"/public/index.html")
})


app.get('/style.css', (req,res) => {
  res.sendFile(__dirname+"/public/style.css")
})

console.log(__dirname+"/public/index.html");


app.listen(port = 6969, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("Welcome to website")
  }
})
// const readFromFile = (filename) => {
// //phai co dinh dang "utf-8" thi moi doc duoc
//   let data = fs.readFileSync(filename,"utf-8");
//   //tra ve dang json
//   return JSON.parse(data);
//   //tra ve dang text
//   //return data;
// }
//
//
//
//
// const writeFromFile = (data,filename) => {
// try {
//     //JSON.stringify chuyen tu string sang dang json
//     let dataString = JSON.stringify(data)
//     fs.writeFileSync(filename,dataString,"utf-8")
//     return true;
//   }
//   catch (ex){
//     console.log(ex);
//     return false;
//   }
// }
//
// objectTest = {
//   a:"toi la khanh",
//   b:"hahaha"
// }
//
// writeFromFile(objectTest,"test.txt")
// console.log(readFromFile("test.txt"))
