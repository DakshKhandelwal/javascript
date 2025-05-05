// Local storage 
localStorage.setItem("hello", "world");
localStorage.getItem("hello");  //hello
localStorage.removeItem("hello");

localStorage.clear();


const user = {name: "Yuvaraj"};
localStorage.setItem("user", user)
localStorage.getItem("user") // unable to get value

localStorage.setItem("user-new", JSON.stringify(user)); 
localStorage.getItem("user-new")
JSON.parse(localStorage.getItem("user-new"))

//LocalStorage: It can store data more than 5MB+. Data is stored even if we close our tab or browser

//Session Storage: Stores data for a particular tab and if tab is closed data is lost.

//Same origin and Cross-origin
// If all 3 are same then same-origin 
// 1. Protocol: (http)
// 2. Host (localhost)
// 3. Port (3000)

// http://localhost:3000

//Cookies: Store very less data around 4KB.
