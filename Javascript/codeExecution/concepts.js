// Hoisting in js
// Trying to access the variables and functions before initialization


// console.log(x);
// getName();

// var x = 5;

// function getName() {
//     console.log("Hello world");
// }

//let and const variable-> we are not able to acces them before initialization
// Are let and const variable hoisted or not?


// let a = 10;
// var x =  200;
// console.log(a);
// console.log(x);
// const c = 300;
// console.log(c);


// let and const -> hoisted in temporal dead zone
// Temporal dead zone: Time b/w varible which are getting hoisted and just before initialization for that variable.

//let, var, const variables



// -----------------------------------------

// var x = 1;
// a();
// b();

// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }



// ------------------------------------------------
// Assignment question

const symbols = [
    ['M',1000],
    ['CM', 900], 
    ['D', 500], 
    ['CD', 400],
    ['C', 100], 
    ['XC', 90],
    ['L', 50], 
    ['XL', 40],
    ['X', 10], 
    ['IX', 9],
    ['V', 5], 
    ['IV', 4],
    ['I', 1]
]

const num = 798;
// 798 = 700 + 90 + 8 = 500 + 100 + 100 + 90 + 5 + 1 + 1 + 1 
                    // =DCCXCVIII
let result = "";

symbols.forEach((item) => {
    const [key, value] = item;

    while(num >= value) {
        result += key;
        num -= value;
    }
})

console.log(result);

// key = D, value = 90
while(98 >= 90) {

}
// result = DCCXC, num = `8

// ---------------------------------------------------------------

// var a = 50;
// {
//     // a = 100;
//     console.log(a);
// }
// console.log(a);


// -------------------------------------------------------
// Scope 

function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
}

a();
console.log(b);

//Scope is where we can access a variabe or a function in our code