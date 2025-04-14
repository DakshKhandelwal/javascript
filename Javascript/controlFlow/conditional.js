//if
let temperature = 40;
// if(temperature < 50) {
//     console.log("Temp is below 50");
// }
// else if(temperature === 50) {
//     console.log("Temp is 50");
// }
// else {
//     console.log("Temp is more than 50");
// }

// const score = 100;
// if(score > 50) {
//     let power = "fly";
//     console.log(`Uer power is ${power}`);
// }

const userLoggedIn = true;
const creditCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// if( userLoggedIn && creditCard && 2 == 3) {
//     console.log("Allow to bug a course");
// }

// if(loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }

const month = "jan";

// switch (month) {
//     case "jan" : 
//         console.log("January");
//         break;

//     case "feb" : 
//         console.log("February");
//         break;
    
//     default:
//         console.log("No match found");
// }

const userEmail = [];

// if(userEmail) {
//     console.log("User email is present");
// }
// else {
//     console.log("Email not found");
// }

//falsy values

// false, 0, -0, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0) {
    console.log("User email is present");
}

const emptyObj = {};

// const obj = {
//     name: "Virat",
//     age: 20,
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// if(Object.keys(emptyObj).length === 0 ) {
//     console.log("Obj is empty");
// }


//Terniary Operator

// condition ? true: false

const price = 100;
price <= 80 ? console.log("less than 80") : console.log("greater than 80");