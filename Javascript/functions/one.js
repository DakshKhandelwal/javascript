function printMe() {
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("o");
}

// printMe();

function addTwoNums(num1, num2) {
    const result = num1 + num2;
    return result;
    console.log("Inside function", result);
}

const myResult = addTwoNums(3,5);
// console.log(myResult);

function loginMessage(username = "shyam") {
    if(!username) {
        console.log("Please enter user name");
        return;
    }
    return `${username} logged in`;
}

// console.log(loginMessage(""));  //"" is a falsy value

///Rest operator ... it spreads the arguments and return it in an array
function calculateCartPrice(val1, val2, ...num) {
    console.log(val1, val2, num);
    return num;
}

// console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
    username: "Yuvraj",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

const myArray = [100, 200, 300, 400];
function secondValueFromArray(array) {
    return array[1];
}

// console.log(secondValueFromArray([100, 200, 300, 400]));

const name = "Rahul";
// console.log(myName(name, "Virat", "Rohit"));

function myName(val1, ...username) {
    console.log("Val1", val1);
    return username
}

// console.log(myName(name, "Virat", "Rohit"));

// console.log(myFunction("Rohit"));

const myFunction = function (username) {
    return username
}


// console.log(myFunction("Rohit"));


const newFunction = () => {
    let username = "rohit";
    console.log(username);
    return username;
}

// newFunction();

// const addTwo =  (num1, num2) => {
//     return num1+ num2;
// }

// console.log(addTwo(2, 4));

const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(3,4));

// ----------------------------------------------------------------------------
// Assignment Questions
const str = "   Hello world!";

function firstChar (str) {
    if(str === "") {
        return ""
    }

    return str.trim().split(" ")[0];
}

// console.log(firstChar(str));


function solve(str, num) {  
    if(str.length === 0) {
        return [];
    }
    let result = [];

    for(let i = 0; i<str.length; i = i + num) {
        let subStr = str.slice(i, i + num);
        result.push(subStr);
    }
    return result;
}


// "12345678" num -> 2
// i-> 0
// slice(0, 2) -> '12' result = ['12']
// i -> 0 + 2 = 2
// slice(2, 4) -> '34' result = ['12', '34']
// i-> 2 + 2 = 4
// slice(4, 6) -> '56' result = ['12', '34', '56']

function solve(str) {
    let charCount = {};

    for(let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // console.log(charCount);

    for(let char of str) {
        if(charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

// console.log(solve("aabbcde"));
// "aabbcde"

// 'a' -> 1
// 'a' -> 2
// 'b' -> 1
// 'b' -> 2
// 'c' -> 1
// 'd' -> 1
// 'e' -> 1


// -------------------------------------------------------------------------

//Immediately Invoked Function Expressions (IIFE)

(function myFunction () {
    console.log("Call it immediately");
})()

