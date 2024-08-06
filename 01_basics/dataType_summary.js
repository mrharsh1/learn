// Primitive type


// 7 Types : String, Number, Boolean, Null, undefined, Symbol, BigInt

// Refrence type (non primitive)


// 3 types : Array, Objects, Functions 

const heros = ["shaktiman", "naagraj", "doga"]

let myobj = {
    name: "Harshit",
    age: 22,
}

const myFunction = function() {
    console.log("myobj");
    
}
// **************************

// stack(primitive), heap(non-primitive)
// when memory use stack memory ...toh mujhe uski copy milti hai jo bo var delcere hua hai  
// when memory usse heap memory..... toh wha se ref milta hai original value ka jha se hum jo change krenge vo original value me change hoha



let mySchoolName = "MLML INTER COLLEGE";

let anotherName = mySchoolName;
anotherName = "ks saket pg college";


console.log(mySchoolName );

console.log(anotherName);


let user1 = {
    name: "USer1",
    email: "user@gmail.com",
    UPI: "user@ybl"
}
let user2 = user1;

user2.email = "user@microsoft.com"
console.log(user1.email);
console.log(user2.email);

