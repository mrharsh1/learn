const user = {
    username: "harshit",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
console.log(this);

        
    }
}

// this keyword humare current context ko btata h
// user.welcomemessage()
// user.username = "harsh"
// user.welcomemessage()
// console.log(this);

// function one() {
//     let username = "harsit" 
//     console.log(this);  // {}
    
// }
// one()

// const code = function() {
//     let username = "harsit" 
//     console.log(this.username);  // undefine
// }

const code = () => {
    let username = "harsit" 
    console.log(this.username);  // undefine
}

// code()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
 const addTwo = (num1, num2) => ( { username:"harshit" })



console.log(addTwo(4, 6));
