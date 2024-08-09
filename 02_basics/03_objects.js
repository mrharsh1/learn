// singleton

// object literals


const mySym = Symbol("key1") 

const user = {
    name: "harshit",
    "full name": "harshit maurya",
    [mySym]: "mykey1",
    age: 21,
    email: "mharshit@gmail.com",
    location: "ayodhya",
    lastLogindays: ["monday", "tuesday"],
    isLoggedIn: false
}

console.log(user.age);
console.log(user["email"]);
console.log(user["full name"]);



console.log(user[mySym]);

user.email = "harshit12@google.com"
console.log(user["email"]);

// Object.freeze(user)
user.email = "harshit12@microsoft.com"
console.log(user["email"]);
console.log(user);


user.greeting = function() { 
    console.log("hello user");
}
user.greeting2 = function() { 
    console.log(`hello ${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());