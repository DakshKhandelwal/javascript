const myObj = {
    name: "Daksh",
    "full name": "Rahul Kumar",
    age: 18,
    location: "Jaipur",
    isLoggedIn: false,
    loginDays: ["Monday", "Friday"]
}

// console.log(myObj);
// console.log(myObj["full name"]);
// console.log(myObj.loginDays[1]);
// Object.freeze(myObj);

myObj.location = "Delhi";

// console.log(myObj.location);

myObj.email = "abcd@gmail.com";
// console.log(myObj);

myObj.greeting = function () {
    console.log("Hello user");
}
// console.log(myObj.greeting())

const user = {};
user.id = "123abc";
user.name = "Mohammed";
user.isLoggedIn = true;
// console.log(user);

const user2 = {
    email: "abcd@gmail.com",
    fullName: {
        userName: {
            firstName: "Ram",
            lastName: "Sharma"
        }
    }
}

// console.log(user2.fullName.userName.lastName);

const obj1 = {1: "first", 2: "second"};
const obj2 = {3: "third", 4: "fourth"};

const obj3 = {...obj1, ...obj2};
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    }
]

console.log(users[0].email)