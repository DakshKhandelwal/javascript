// Events in JS
// The change of state of an object is known as an event. 

// Events are fired to notify code of "interesting changes" that may affect the code execution 

// Examples
// Mouse events (click, double click etc... )
// Keyboard events (keypress, keyup, keydown) 
// Form events (submit etc...)


// Events Handling in JS 
// node.event = () => {
//  //handle the event
// }

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (event) => {
//     console.log("Event 2")
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// }

// btn1.onclick = function (event) {
//     console.log("abcd", event);
// }


// let div = document.querySelector("div");

// div.onmouseover = (e) => {
//     console.log("you are inside a div");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }

// div.onclick = (e) => {
//     console.log("clicked inside div", e);
// }


// Note: IF we have same event in inline html and in js only js file event will be triggered not html.
// If we write multiple same event handler function it will overwrite the previous function

// ----------------------------------------------------------
// Event Object (inside event handler function)

// It is a special object that has details about the event. 
//  All event handler's have access to the Event object's properties and methods. 

// node.event = (e) => {
//     //handle event
// } 

// e.target , e,type, e.clientX, e.clientY

// --------------------------------------------------------------

// Event listeners : It will listen for the event continuously and if event occurs it will excecute this callback function
// node.addEventListener(event, callback)  // Callback a functino which is passed as a argument to another function

// node.removeEventListener (event, callback) 

// the callback reference should be the same to remove it.

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("button was clicked");
// })

// btn1.addEventListener("click", () => {
//     console.log("button was clicked -second event");
// })

// const handler3 = () => {
//     console.log("button was clicked - third event");
// }

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - fourth event");
// })

// btn1.removeEventListener("click", handler3);

// ----------------------------------------------------------------
// Light and dark mode 

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body")
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
       body.classList.add("dark");
       body.classList.remove("light");
    }
    else {
       currMode = "light";
       body.classList.add("light");
       body.classList.remove("dark");
    }
    console.log(currMode);
})