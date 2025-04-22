// console.log("Hello World!");
// console.log("DOM introduction");

//Window Object
// Window object represents an open window in a browser. It is a browser object (not JavaScript obj) and it is automatically
// created by our browser.

// It is a global object and it has lots of properties and methods.
// window.console.log("Window object");
// window.alert("Hello!");

//What is DOM?
// Document Object Model 
// console.log(window.document);  //element and tags
// console.dir(document);  // obj and its methods

// console.log(document.body.childNodes);
// console.dir(document.body.childNodes);
// console.dir(document.head);
// console.dir(document.body.children);
// document.body.style.backgroundColor = "green";

//We use this DOM to do dynamic changes or manipulation to our web page

// console.dir(document.body);

//DOM Manipulation
// 1. Selection by id (if not present give null)
let button = document.getElementById("myBtn");
let para = document.getElementById("myPara-p1");
// console.dir(para);
// console.log(para);

// 2. Selection by class (it gives html collection as o/p if not present the html collection is empty)
let headings = document.getElementsByClassName("myClass-heading");
// console.log(headings);
// console.dir(headings);

// 3. Selection with tag (it gives html collection as o/p if not present the html collection is empty)
let pTags = document.getElementsByTagName("p123");
// console.log(pTags);
// console.dir(pTags);

// Query Selectors
// 1. document.querySelector("#myBtn")
let myButton = document.querySelector("p");  //1st element
let myButton2 = document.querySelector(".myClass");
// console.log(myButton);
// console.log(myButton2);
// console.dir(myButton);

// 2. document.querySelectorAll("")

let myButton3 = document.querySelectorAll(".myClass");  //all matching elements in a node list
// console.log(myButton3);
// console.dir(myButton3);

// Properties
// 1. tagName: It returns tag for that element node
// 2. InnerText: Returns the text content of the element and all its children
// 3. InnerHTML: Returns the plain text or HTML content in the element 
// 4. textContent: Returns textual content even for the hidden elements 

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

// let h2 = document.querySelector("h2");
// console.log(h2.innerText);

// h2.innerText = `${h2.innerText} - Daksh`;  //concatenation of string

// let divs = document.querySelectorAll(".box");

// // divs[0].innerHTML = "Random text in div 1";
// // divs[1].innerHTML = "Random text in div 2";
// // divs[2].innerHTML = "Random text in div 3";

// let index = 1;

// for(let div of divs) {
//     // console.log(div.innerText);
//     div.innerText = `Random text in div ${index}`;
//     index++; 
// }


// -----------------------------------------------------
// DOM Manipualtion
// Attributes
// 1. getAttributes(attr) // use this to get value of the atribute
// 2. setAttribute(attr, value) // used to set the attribute with that value

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);

// let p = document.querySelector("p");
// console.log(p.getAttribute("class"));

// let para1 = document.querySelector("p");
// console.log(para1.setAttribute("class", "newClassRandom"));


//Style to access all the inline css of pur node

// // node.style 
// let div = document.querySelector("div");

// div.style.backgroundColor = "red";

// div.style.fontSize = '24px';
// // div.style.display = "none";
// div.innerText = "Hello world"


// DOM Manipulation
// Insert Elements : Done in 2 parts
// 1. Create a new element (document.createElement("div");)
// 2. Append that element in out DOM tree 

// Methods to insert the element 
// 1. element.append(el) //add at the end of the node (inside)
// 2. element.prepend(el) //adds the the start of our node (inside) 
// 3. element.before(el) // adds before the node (outside)
// 4. element.after(el) //adds after the node (outside)

// let newButton = document.createElement("button");
// newButton.innerText = "click me";
// console.log(newButton);

// let div = document.querySelector("div");
// div.append(newButton);

// div.remove();

//Methods to delete elements from the DOM
//element.remove() // removes the node


// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i> Hi I am a new element </i>";

// document.querySelector("body").prepend(newHeading);

// let para2 = document.querySelector("p");
// para2.remove();

// newHeading.remove();
// -----------------------------------------------------------------------
// HW Find and read about these methods
// appendChild()
// removeChild()
// -----------------------------------------------------------------------------

// Question: Create a new button. Give it a text "click me", backgroundcolor of red and text color as white . 
// Insert the button as first element inside the body tag.

let myButton5 = document.createElement("button");
myButton5.innerText = "click me";
myButton5.style.backgroundColor = "red";
myButton5.style.color = "white";

console.log(myButton5);

document.querySelector("body").prepend(myButton5);