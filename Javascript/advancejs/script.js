// console.log("one");
// console.log("two");
// console.log("three");

// Synchronous JS 
// Synchronous means the code runs in a particular sequence of instructions given in a program.
// Each intruction will wait for the previous instructino to be executed.

// Asynchronous JS 
// Due to synchronous programming, sometimes important instructions get blocked due to previous instruction,
// which cause delay in UI. 
// Asynchronous code execution allow to execute next instruction immediately and 
// does not block the flow. 

// function hello() {
//     console.log("Hello World!");
// }

// setTimeout(hello, 4000);  //timeout

// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("Hello");
// }, 4000)

// console.log("three");
// console.log("four");

// Callback 
// It is a function passed as an argument to another function.

// function sum(a,b) {
//     console.log(a+b);
// }

// function calculator(a,b, sumCallback) {
//     sumCallback(a,b);
// }

// calculator(1,2, sum);

// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello, 3000);

// Callback hell 
// Callback hell: Nested callbacks stacked below one another giving it a pyramid structure. 


//nesting: one inside another
// let age = 20;
// if(age >= 18) {
//     if(age>=60) {
//         console.log("senior");
//     }
//     else {
//         console.log("Adult");
//     }
// }
// else {
//     console.log("underage");
// }

// //nested for loop
// for(let i=0; i<5; i++) {
//     for(let j=0; j<5; j++) {
//         console.log(j);
//     }
// }

// function getData(dataId) {
//     //2 seconds
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000)
// }

// getData(1);  //2 seconds
// getData(2);  //2.00001 seconds
// getData(3);  //2.00002 seconds


//Callback hell: It becomes difficult to read and manage.

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData) {  
            getNextData();
        }
    }, 2000)
}

getData(1, () => {
    console.log("getting data 2")
    getData(2, () => {
        console.log("getting data 3")
        getData(3, () => {
            console.log("getting data 4")
            getData(4)
        })
    });
});


//Promises: 