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

console.log(loginMessage(""));  //"" is a falsy value