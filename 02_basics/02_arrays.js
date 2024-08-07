const marvels = ["thor" , "ironman", "spiderman"]
const dc = ["superman" , "flash", "batman"]

// marvels.push(dc)

console.log(marvels);
// console.log(marvels[3][1]);

// const allheros = marvels.concat(dc)
// console.log(allheros);


// spread oprator

const allNewHeros = [...marvels, ...dc]
console.log(allNewHeros);


const new_array =[1, 2, 3, [4, 5, 6], 7, 8, [1, 2,3], 8,[5, 6, [6, 8,9, [4, 9] ]]]

const new_array_2 = new_array.flat(Infinity)
console.log(new_array_2);


console.log(Array.isArray("harshit"));
console.log(Array.from("Harshit"));
console.log(Array.from({name: "harshit"})); // intersting


const score1 = 1000
const score2 = 1000

const score3 = 1000

const score4 = 1000

console.log(Array.of(score1, score2, score3, score4));


