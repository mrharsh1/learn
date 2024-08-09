// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object

tinderUser.id = "123"
tinderUser.name = "Ram"
tinderUser.age = 21
tinderUser.isLoggedIn = false

const regUser = {
    email: "any@gmail.com",
    fullname : {
        userfullname: {
            firstname: "harshit",
            lastname: "maurya",
        }
    }
}

// onsole.log(regUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}


// const obj3 = {   obj1 , obj2 }

// const obj3 = Object.assign({}, obj1 , obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users =[
    {
        id: 1,
        email: "User@gmail.com",
    },
    {
        id: 2,
        email: "User2@gmail.com"
    },
    {
        id: 3,
        email: "User3@gmail.com"
    },
    {
        id: 4,
        email: "User4@gmail.com"
    },
    {
        id: 5,
        email: "User5@gmail.com"
    },

]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    courseName: "js in hindi",
    price: 999,
    teacher: "harshit"
}

course.teacher

const {teacher: name} = course
console.log(name);




// {
//     "name": "harshit",
//     "courseName": "js in hindi",
//     "price": "999",
// }

