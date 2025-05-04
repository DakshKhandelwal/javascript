let arr = ["Ram", "Shyam", "Murli", 1, 2 ,3];

// let obj = {
//     name: "Mohammed",
//     state: "Tamil Nadu",
//     getIntro: function () {
//         console.log(`${this.name} from ${this.state}`);
//     }
// }

// function fun() {
//     console.log("Fun with JS");
// }


// Prototype Inheritance (Not same as in other language)
// let object = {
//     name: "Virat",
//     city: "Delhi",
//     getIntro: function () {
//         console.log(`${this.name} from ${this.city}`);
//     }
// }

// let object2 = {
//     name : "Rohit"
// }

// //Never use this (due to performance issue)
// object2.__proto__ = object;

Function.prototype.myNewJS = function () {
    console.log("My global function for all functions");
}

function fun() {
//access to myNewJS()
}

function fun2() {

}
