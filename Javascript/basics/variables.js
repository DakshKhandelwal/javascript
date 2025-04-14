// console.log("Hello World!");

let firstName = "Daksh";
// let console = "Rahul"
let score = 23;

score = 46
// console.log(firstName);
// console.log(score);

// Variable Rule 

/*
1. Variable names are case sensitive 'a', 'A' are different.
2. Only letter, digits, underscore and $ symbol is allowed (space is also not allowed)
3. Only a letter and underscore or $ should be first character.
4. Reserved keywords cannot be used to give variable names.
*/

// Dynamically type language

// let, var, const

// var name ="Sharma";
// // console.log(lastname);

// var name = "Virat";
// // console.log(lastname);

// // es6
// // let and const 
// let name = "Virat";
// // console.log(name);

// name = "kohli";
// console.log(name);

//Note: Use only let and const do not use var.

// var: Variables can be redeclared and updated. A global scope variable.
// let: Variable cannot be re-declared but can be updated. A block scope variable
// const: Variable cannot be re-declared or updated. A block scope variable

// getDataFromBackend //Camel case


const accountid = 12345;
let accountEmail = "rahul@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
const firstuser = "Ram";
// accountCity = "Delhi";
let accountState;  //if not inititlaized it will come as undefined

console.table([firstuser, accountid, accountEmail, accountPassword, accountCity, accountState])