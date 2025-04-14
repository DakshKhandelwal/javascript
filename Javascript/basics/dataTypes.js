// alert(2+2)  We are using nodejs 

// console.log(2+
//     2);  //Code readabilty should be high
// console.log("Hello"); 

//Primitive Datatypes
// string, number, boolean, null, undefined, bigint, symbol 
let name = "Rahul";  //string
let age = 20;  //number
let isLoggedIn = false; //boolean
let state;  //undefined
let temperature = null;  //object
// let score = new Number(20);
// let firstName = new String("Virat");
let longNumber = 123456789n;  // 0 to 2 power 53

let uniqueNumber = Symbol("Hi");
let number2 = Symbol("Hi");
// console.log(typeof name, typeof age, typeof isLoggedIn, typeof state, typeof temperature);
// console.log(age, score);
// console.log(typeof firstName);

// console.log(uniqueNumber, number2);
// console.log(uniqueNumber == number2);

let firstName = "Rahul";
let lastName;

lastName = firstName;

lastName = "Sharma";
// console.log(firstName, lastName);

let temp = 23.5;
// console.log(typeof temp);

let score1 = Number(30);
let score2 = String("Hello World");
let score3 = Boolean(true);

// console.table([score1, score2, score3, typeof score1, typeof score2, typeof score3]);

const productName = "Watch";
let rating = 4.1;
let price = 1004;
let isDiscountAvailable = true;


//Non-primitive Datatypes

//Array, Object, Functions

//Every thing in javascript is a object.

const heroes = ["spiderman", "batman", "superman"];

const indianHeroes = ["shaktiman", "krrish", 23, false];
// console.log("heroes", indianHeroes);

// {
//     key: values
// }

const obj = {
    name: "daksh",
    age: 12,
    isLoggedIn: true
}
// console.log(obj.age);

const myFunction = function() {
    console.log("Hello World");
}


// console.log(typeof heroes);


// ------------------------------------------------------------------------------
// Stack (Primitive datatypes) And Heap (Non-primitive datatypes) 

let user1 = "Rahul";

let user2;

user2 = user1;
user2 = "Saurabh";
// console.log(user1, user2);


let obj1 = {
    name: "Virat",
    age: 35,
}

let obj2 = obj1;

obj2.name = "Sharma";
console.log(obj1, obj2);