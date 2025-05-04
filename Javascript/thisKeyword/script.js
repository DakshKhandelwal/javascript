//this keyword: refers the current context of the obj.
// const user = {
//     username: "Mohammed",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage(); //Current context is user object.
// user.username = "paul";
// user.welcomeMessage();

// console.log(this);

// function fun() {
//     let username = "daksh";
//     console.log(this);
// }

// fun();

// Note: Context works for obj not functions 
// -------------------------------------------------------------------

// Call, Apply and bind methods in js 

// let name = {
//     fname : "Rahul",
//     lname: "Sharma",
// }

// let printFullName = function (city, state, country) {
//     console.log(`${this.fname} ${this.lname} lives in ${city}, ${state} ${country}`);
// }
// name.printFullName();

// let name2 = {
//     fname: "Virat",
//     lname: "Kohli"
// }

//call method: It will execute here itself
// printFullName.call(name2, "Jaipur", "Rajasthan", "India");

//apply method: It will execute here itself and In apply we pass function arguments as an array
// const list = ["Jaipur", "Rajasthan", "India"];
// printFullName.apply(name2, list);  


//bind method: It returns a function bind to that obj and we can use it anywhere in the code
// let printName = printFullName.bind(name2, "Mumbai", "Maharashtra", "India");
// console.log(printName);
// name2.fname = "Rohit";
// printName();

// -----------------------------------------------------------------------------

// Currying in JS 
// function add(a,b,c) {
//     return a+b+c;
// }

// console.log(add(2,4,6));

// function add(a) {
//     return function(b) {
//         return function (c) {
//             return a+b+c;
//         }
//     }
// }

// const add = (a) => (b) => (c) => a+b+c;

// console.log(add(2)(3)(4));

// function sendAutoEmail(to) {
//     return function(subject) {
//         return function (body) {
//             console.log(`Sending email to ${to} with subject ${subject} with body ${body}`);
//         }
//     }
// }

let sendAutoEmail = (to) => (subject) => (body) => console.log(`Sending email to ${to} with subject ${subject} with body ${body}`);

let step1 = sendAutoEmail("Mohammed.accio.com");

let step2 = step1("New Assignment");

step2("Hey Mohammed, here is something new in the assignments");











