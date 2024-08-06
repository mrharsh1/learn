let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());
console.log(myDate.toTimeString());
console.log(myDate.toString());

console.log(typeof myDate); // object



let myNewDate = new Date(2023, 0, 23, 5, 3)
console.log(myNewDate.toLocaleString());



let timestamp = Date.now();
console.log(Math.floor(timestamp/1000));

console.log(myNewDate.getTime());




let newdate = new Date();
console.log(newdate.getDate());
console.log(newdate.getFullYear());



 const date3 = newdate.toLocaleString('default', {
    weekday: "long",
    month: "2-digit"
});

console.log(`here is the new ${date3}`);






