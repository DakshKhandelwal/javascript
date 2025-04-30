// console.log("one");
// console.log("two");
// console.log("three");

// Synchronous JS 
// Synchronous means the code runs in a particular sequence of instructions given in a program.
// Each instruction will wait for the previous instruction to be executed.

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

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData) {  
//             getNextData();
//         }
//     }, 2000)
// }

// getData(1, () => {
//     console.log("getting data 2")
//     getData(2, () => {
//         console.log("getting data 3")
//         getData(3, () => {
//             console.log("getting data 4")
//             getData(4)
//         })
//     });
// });


//Promises: 
// Promise is for "eventual" completion of task. It is an object in JS.
// It is a solution to callback hell.

// let promise = new Promise((resolve, reject) => {
//     console.log("This is a promise");
//     // resolve({success: 1});
//     reject("got some error in code")
// })

// Note: resolve and reject are callback functions provided by JS

// A JS promise object can be: 
// 1. Pending: the result is undefined
// 2. Resolved: the result is a value (fulfilled)   resolve(result) 
// 3. Rejected: the result is error object          reject(error)

// Promise has a pending, fulfilled, rejected state. 

// function getData( dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             // resolve("success");
//             reject("error")
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 6000)
//     })
// }


// Promises 
// .then() & .catch() 

// Promise.then((res) => {

// })

// Promise.catch((err) => {

// })


// const getPromise = () => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve("success");
//             // reject("network error")
//         }, 4000)
//     })
// }

// let promise = getPromise();
// console.log("Waiting for the promise")
// promise.then( (res) => {
//     console.log("promise fulfilled", res);
// })

// promise.catch((err) => {
//     console.log("promise rejected", err);
// })


function asyncFunction1() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("success1");
            // reject("error123")
        }, 5000)
    }) 
}

function asyncFunction2() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("success2");
            // reject("error123")
        }, 5000)
    }) 
}

function asyncFunction3() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("success3");
            // reject("error123")
        }, 5000)
    }) 
}

console.log("fetching data1...");
let p1 = asyncFunction1();

p1.then((res) => {
    console.log(res);
    console.log("fetching data 2");
    asyncFunction2().then((res) => {
        console.log(res);
        console.log("fetching data 3");
        asyncFunction3().then( (res) => {
            console.log(res)
        })
    })
})

// console.log("fetching data2...");
// let p2 = asyncFunction2();
// p2.then((res) => {
//     console.log(res)
// })

//Promise chain