

// if (userEmail ) {
//     console.log("got user email");
    
// }else {
//     console.log("don't have user email");
    
// }

// falsy value : -

// false, 0, -0, BigInt 0n, "", null, undefined, nan

// truthy value

// "0", 'false', " ", [], {}, function(){} empty function 
const userEmail = "h@harsh.ai"
if (userEmail.length === 0 ) {
    console.log("array is empty");
    
}
 const myObj = {}
 if (Object.keys(myObj).length === 0) {
    console.log("obj is empty");
 }



 // nullish coalesing operator (??): null undefined

 let val1;
//  val1 = 5 ?? 10
//  val1 = null ?? 10
//  val1 = undefined ?? 16
val1 = null ?? 10 ?? 15

console.log(val1);

// terniary operator 

// condtion ? true : false 


const iceCream = 30

iceCream >= 20 ? console.log("less than 20") :  console.log("more then 20");
;
