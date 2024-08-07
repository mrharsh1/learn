const myArr = [0,1, 2 ,3 ,4 ,5 ,6 , "Harhsit", "school"];


console.log(myArr[4]);

const myHeros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1, 2 ,4 ,5)

// Array meethods

myArr.push(8,7)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(8));
console.log(myArr.indexOf(0));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr); // chnages type of using join


// slice splice
 console.log("a", myArr);
 

 const myn1 = myArr.slice(1, 4)

 console.log(myn1);
 console.log("b", myArr);
 
 const myn2 = myArr.splice(1, 4)

 console.log(myn2);
 console.log("c", myArr);