// for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element === 5) {
        // console.log("5 is best numebr");
        
    }
    // console.log(element);
}
// for loop
for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop ${j} and inner loop ${i}`);

        // console.log(`${i} * ${j} =  ${i * j}`);
        
    } 
}
const myArr = ["flash", "spiderman", "ironman"]
// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

//  break and countinue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        // break;    // yahi se code loop ke bhar ho jayega     
        // continue; yaha se bs 5 ko ignore krega aur uske baad countinue krega
        
    }
    console.log(`value of 1 is ${i}`);
    
}
