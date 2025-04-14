// const myArr = [0, 1, 2, 3, 4];
// const strArr = ["Hello", "World", "Array"];

// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr);
// console.log(strArr);
// console.log(myArr2);

//Array methods
// myArr.push(5); // O(1)
// myArr.push(6);
// myArr.pop();

// myArr.unshift(9);  //O(n)

// myArr.shift();  //O(n)
// console.log(myArr);

// console.log(myArr[0]);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join('-');
// console.log(typeof newArr)

//slice and splice

const newArr = [0, 1, 2, 3, 4];
const myArr = newArr.slice(1,3);
// console.log(newArr);
// console.log(myArr);

const myArr2 = newArr.splice(1,3);
// console.log(newArr);
// console.log(myArr2);

const heroes = ["spiderman", "batman", "superman"];
const indianHeroes = ["shatikman", "krrish"];

// heroes.push(indianHeroes);
// console.log(heroes[3]);
const allHeroes = [...heroes, ...indianHeroes];
// console.log(allHeroes[4]);

const newHeroes = [1,2, [3,4,5], 6, [7,8], 9, [4,5, [11, 20]]];
// const newArray = newHeroes.flat(Infinity);
// console.log(newArray);

// console.log(Array.isArray(["Ram", "Shyam"]));
// console.log(Array.from("Rahul"));
// console.log(Array.from({ name: "Saurabh"}));


let score1 = 100;
let scroe2 = 200;
let score3 = 300;

console.log(Array.of(score1, scroe2, score3));
