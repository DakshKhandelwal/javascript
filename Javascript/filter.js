const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredArray = myNums.filter((num, index, myNums) => {
    return num > 4
});

// console.log(filteredArray);
// console.log(myNums);

const newNums = [];
myNums.forEach((num) => {
    if(num > 4) {
        newNums.push(num);
    }
})

// console.log(newNums);

const books = [
    { title: "First Book", year: 1998, genre: "Fiction"},
    { title: "Second Book", year: 2005, genre: "History"},
    { title: "Third Book", year: 1999, genre: "Science"},
    { title: "Fourth Book", year: 2005, genre: "Fiction"},
    { title: "Fiveth Book", year: 1987, genre: "History"},
    { title: "Sixth Book", year: 1947, genre: "History"},
]

let userBooks = books.filter((item) => item.genre === "History").filter((item) => item.year < 2000);

// const newUserBooks = userBooks.filter((book) => {
//     const result = book.year<2000 && book.genre === "History";
//     return result;
// })

// console.log(userBooks);

const myNumber = [1, 2, 3, 4, 5, 6, 7 ,8, 9];

// const newNum2= [];
// for(let item =0; item< myNumber.length; item++) {
//     newNum2.push(myNumber[item]*10);
// }

const newNum = myNumber.map((num) => num * 10)
                       .map((num) => num+1)
                       .filter((num) => num >= 40);

// console.log(newNum);

const nums = [1, 2, 3];
const myTotal = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0)

console.log(myTotal);
// acc->10, curr->1
// acc-> 10+1, curr-> 2
//acc-> 10+1+2, curr->3
//acc-> 10+1+2+3 =16

// const cart = [
//     {
//         item: "mobile",
//         price: 12000
//     },
//     {
//         item: "watch",
//         price: 2000
//     },
//     {
//         item: "camera",
//         price: 8000
//     },
//     {
//         item: "plant",
//         price: 6000
//     },
// ]

// const totalPrice = cart.reduce((acc, curr) =>  acc + curr.price, 0);
// console.log(totalPrice);