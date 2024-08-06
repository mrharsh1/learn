const score = 100;
console.log(score);

const balance = new Number(400);
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const number = 2186.3222;

console.log(number.toPrecision(5));

const number2 = 100000000;

console.log(number2.toLocaleString('en-IN')); 



// +++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++


console.log(Math.abs(-4)); // absolute value
console.log(Math.round(5.938));
console.log(Math.ceil(5.938)); // uperr value
console.log(Math.floor(5.938)); // round off down value 
console.log(Math.min(4, 5, 2, 9, 10));
console.log(Math.max(4, 5, 2, 9, 10));

console.log(Math.random());
console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*10) + 1);
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min) ;
