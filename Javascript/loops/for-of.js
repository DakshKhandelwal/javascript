// for of -> arrays or strings or map

//["", "", ""]
// [ {}, {}, {} ]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const myString = "Hello world!";
for(const char of myString) {
    // console.log(char);
}

//Maps -> unique values in same order as inserted
const map = new Map();
map.set("In", "India");
map.set("Fr", "France");
map.set('USA', "United States of America");
map.set("In", "India");

// console.log(map);

for(const [key, value] of map) {
    console.log(`${key}: ${value}`);
}


//Destructuring in array
// const arr2 = ["In", "India", "USA"];
// const [key, value] = arr2;
// console.log(key, value);

const myObj = {
    game1: 'CS Go',
    game2: 'GTA-6',
}


//Note: for-of is not iteratable on object in js
// for(const [key, value] of myObj) {
//     console.log(key, value);
// }