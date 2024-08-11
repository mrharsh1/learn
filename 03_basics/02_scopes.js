// var c = 300
let a = 300 // global scope
if(true) {
    let a = 10 
    const b = 20
    // console.log("inner: ", a);
    
} // block scope

// console.log("outer:", a);
// console.log(b);
// console.log(c);

function one(){
    const username = "harshit"
    function two() {
        const webiste = "https//harshit"
        // console.log(username);
    }
    // console.log(webiste);
    two()
    
} 
one()


if(true) {
    const username = "harshit"
    if(username === "harshit"){
        const web = "youtube"
        // console.log(username + web);
        
    }
        // console.log(web);
}
// console.log(username);
// +++++++++++++++++++++ intersting ++++++++++++++++++

function addOne(value) {
    return value + 1
}

addOne(10)

const addTwo = function(num) {
    return num + 2
}
addTwo(20)