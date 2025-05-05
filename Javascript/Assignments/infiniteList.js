// const list = document.querySelector("#infi-list");
// const count = 10;

// function addListItem(count) {
//     for(let i=0; i<count; i++) {
//         const listItem = document.createElement("li");
//         listItem.innerText = `Item ${i+1}`;
//         list.appendChild(listItem);
//     }
// }

// addListItem(count);

// console.dir(list);

// list.addEventListener("scroll", () => {
//     console.log(list.clientHeight);
//     console.log(list.scrollHeight);
//     console.log(list.scrollTop);
//     if(list.scrollTop + list.clientHeight > list.scrollHeight -1) {
//         addListItem(2);
//     }
// })


//HW: Read about Debouncing, Delaying and Throttling.

//delete obj key
const obj = {
    user: "Yuvaraj",
    age: 20,
    isLoggedIn: true
}

console.log(obj);
delete obj.age;
console.log(obj);
