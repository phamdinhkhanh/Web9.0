// var a = 5;
// var b = 6;
// console.log(a+b);
// console.log("Hello World");
//
// if(a===b){
//   console.log("so sanh tong");
// } else {
//   console.log("khong bang");
// }
//
// for(var i = 0; i < 10; i++){
//   console.log(i);
// }
//
//
// function HelloWorld(Name,Hello) {
//   return Name + Hello;
// }
//
// var Plus = (a,b) => {
//   return a+b;
// }
//
// function Minus(a,b) {
//   return a - b;
// }
//
// var exampleObject = {
//     objectFunction:Plus
// }
//
// var objectMinusFunction = Minus;
//
// console.log('a+b = ', exampleObject.objectFunction(8,2));
//
// exampleObject.objectFunction(6,7);
//
// console.log(HelloWorld("Khanh"," Hello World"));
//
// function WriteDate() {
//   console.log(Date.now());
// }
//
// function SetTime(callback){
//   setTimeout(function(){
//     callback();
//   },1000);
//   console.log("Set time out done!");
// }
//
// SetTime(WriteDate);
//
// // ES5: var
// // ES6: let
// // let giup cho cac ham trong vong for co the lay duoc gia tri ben ngoai no
//
// // function countDown(count){
// //   for(let i = 6; i>=0; i--){
// //     setTimeout(function(){console.log(i)},(count-i)*1000);
// //   }
// // }
//
//
// function print2() {
//   var b = 6;
//   function print() {
//     var a = 5;
//     console.log(a,b);
//   }
//   print();
// }
//
// print2();
//
//
// console.log("count down");
// // countDown(6);


let arr = [];
let object = {
  name:"A",
  age:1
}
arr.push(object);
console.log(arr);
let i = 0;
let oldage = arr[i].age;
console.log("oldage "+oldage);
arr[i].age = oldage+1;
console.log(arr);
