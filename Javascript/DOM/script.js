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

