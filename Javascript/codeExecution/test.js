// Everything in Javascript happens inside the Execution Context.

//Javascript is a synchronous single-threaded language.

// var a = 2;

// function square(num) {
//     var ans = num * num;
//     return ans;
// }

// var square2 = square(2);
// var square5 = square(5); 

//Call stack is maintaining the order of execution of execution context.



var x = 5;

function printName() {
    var a = 5;
    console.log("Rohit");
}

printName();
console.log(x);