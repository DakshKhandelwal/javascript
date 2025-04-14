//for-each is a Higher order function which takes another function as a argument
const lang = ["js", "java", "py", "cpp"];

// lang.forEach(function (val) {
//     console.log(lang);
// })

// function print(item) {
//     console.log(item);
// }

// lang.forEach(print);

// lang.forEach(function (index, arr) {
//     console.log( index, arr);
// })

//arrow functions

// const myfunction = function () {
//     console.log("my function");
// }

// const myNewFunction = () => {
//     console.log("my new function");
// }

// lang.forEach((val, index, arr) => {
//     console.log(val, index, arr);
// })


// [{}, {}, {}]

const myArray = [
    {
        name: "javascript",
        fileName: "js",
    },
    {
        name: "java",
        fileName: "java",
    },
    {
        name: "python",
        fileName: "py",
    }
]

myArray.forEach((item) => {
    console.log(item.name, item.fileName);
})