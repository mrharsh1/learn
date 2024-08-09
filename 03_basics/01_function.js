function sayMyName(){
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("t");
    
}
// sayMyName()

function add(a, b) {

    const result= a + b;
    return result;
    
}


const res = add(5, 7)
// console.log("result:", res);


// function userLoginMessage(username){
//     if(username === undefined){
//         console.log("please enter user name");
//        return    
//     }
//     return `${username} just logged in`
    
// }
function userLoginMessage(username){
    if(!username){
        console.log("please enter user name");
       return    
    }
    return `${username} just logged in`
    
}
const name = userLoginMessage("harshit")
console.log(name);


function addCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(addCartPrice(2, 4, 5, 31, 133, 2121));

const user ={ 
    username: "harshit",
    price: 2000,

}

function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);

}

//handleObject(user)
handleObject({ 
    username: "harshit",
    price: 2000,

})
