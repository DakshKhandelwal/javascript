let firstName = false;

// console.log(typeof firstName);

let valueInNumber = Number(firstName);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// "23" -> 23
// "23virat" -> NaN (Not a number)
// true -> 1; false -> 0

let isLoggedIn = "";
// isLoggedIn = 0;
let booleanIsLoogesIn = Boolean(isLoggedIn);
// console.log(booleanIsLoogesIn);

// 1 -> true; 0 -> false
// "" -> false
//"Virat" -> true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ---------------------------------------------------------------
// Operations in js 

let value = 23;
let negValue = -value;

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);

let str1 = "hello";
let str2 = "world";

let str3 = str1 + str2;
// console.log(str3);

let variable1 = "1" + 2;
// console.log("1" + 2);
// console.log(typeof variable1);

// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3 + 4) * 5 % 3);

//We can use + before to convert it to a number, but we should avoid not a good practise
// console.log(+"");

let num1, num2, num3;
num1 = num2= num3 = 2+2;

let prefixOperator = 100;
prefixOperator++;
console.log(prefixOperator);

