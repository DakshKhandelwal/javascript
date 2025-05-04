// Event capturing and bubbling and event Propogation 

// document.querySelector("#grandParent").addEventListener("click", () => {
//     console.log("grandParent clicked");
// }, false) // use capture false

// document.querySelector("#parent").addEventListener("click", () => {
//     console.log("parent clicked");
// }, false) // use capture false

// document.querySelector("#child").addEventListener("click", () => {
//     console.log("child clicked");
// }, false) // use capture false

// document.querySelector("#grandParent").addEventListener("click", () => {
//     console.log("grandParent clicked");
// }, true) 

// document.querySelector("#parent").addEventListener("click", (e) => {
//     console.log("parent clicked");
//     e.stopPropagation();
// }, true)

// document.querySelector("#child").addEventListener("click", (e) => {
//     console.log("child clicked");
// }, true) 

// -------------------------------------------------------------
// Event Delegation: Due to event bubbling we are able to access the child events in the parent which reduce the need to add 
// events for child elements.

// document.querySelector("#category").addEventListener("click", (event) => {
//     // console.log("Categories was clicked");
//     console.log(event.target.id);
//     window.location.href = "/" + event.target.id;
// })

