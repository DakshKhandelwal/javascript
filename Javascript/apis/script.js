const URL1 = "https://meowfacts.herokuapp.com/?count=5";
const btn = document.querySelector("#btn");

// const getFacts = async () => {
//     console.log("Getting facts");
//     let response = await fetch(URL1); //get
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     console.log(data.data);
//     console.log(data.data[0]);
//     let fact = document.querySelector("#fact");
//     fact.innerText = data.data[0];
// }

// getFacts();
// btn.addEventListener("click", getFacts);

// fetch API 
// The fetch API provides an interface for fetching(sending/receiving) resources(data). 
// It use Request and response objects. 
// The fetch() method is used to fetch a resource (data) 

// let promise = fetch(url, [options]) // By default it is called as a GET request.

// Some Terms 
// AJAX: Asynchronous JS and XML 
// JSON: Javascript Object Notation 
// json() method: It returns a promise that parse the response body text as JSON. (Input is JSON, output is JS object)


function getFacts() {
    fetch(URL1)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let fact = document.querySelector("#fact");
        fact.innerText = data.data[0];
    })
}

// getFacts();
btn.addEventListener("click", getFacts);


// Request and Response 
// HTTP verbs : Hyper Text Transfer Protocol 
// Response status codes 
// Headers: It contains datail about reponses such as content type, HTTP status code etc. 