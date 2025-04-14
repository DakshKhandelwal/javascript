//for-in loop -> to iterate over js objects
const myObj = {
    in: "India",
    usa: "United States",
    fr: "France"
}

// console.log(myObj['in']);

// for (const key in myObj) {
//    console.log(key , myObj[key]);
// }

const lang = ["js", "java", "python", "c++"];
// console.log(typeof lang);

// for(const key in lang) {
//     console.log(key, lang[key]);
// }

//Note: We can't iterate over maps using for-in loop
const map = new Map();
map.set("In", "India");
map.set("Fr", "France");
map.set('USA', "United States of America");
map.set("In", "India");

for (const key in map) {
    console.log(key);
}
console.log(typeof map);