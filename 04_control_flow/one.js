// if
// const isUserLoggedIN = true
 // >, <, <=, >=, ==, !=, ===. !==
 const temp = 41

// if(temp < 50 ) {
//     console.log("LESS Then 50");
// } else {
//     console.log("greater then 50");
// }

// const score = 200 
// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power} ${score}`);
    
// }
// console.log(`user power: ${power} ${score}`);  //not run bcz fly is out of scope

const isUserLoggedIN = true
const debitCrad = true
const loggedInFromGoogle = false
const loggedInFromemail = true

if ( isUserLoggedIN && debitCrad) {
    console.log("allow to buy course  ");

    
}

if (loggedInFromGoogle || loggedInFromemail ) {
    console.log("user Logged in");  
}