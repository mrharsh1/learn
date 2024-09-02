const promise1 = new Promise((res, rej) => {
    // do an async task
    // DB. calls cryptography, network
    setTimeout(() => {
        console.log("async task is comaplete");
        res()

    }, 1000)
})
promise1.then(() => {
    console.log("async consumed")
})
new Promise((res, rej) => {
    setTimeout(() => {
        console.log("async task is comaplete 2");
        res()

    }, 1000)
}).then(() => {
    console.log("async consumed 2")
})

const promiseThree = new Promise((res, rej) => {
    setTimeout(() => {
        res({ username: "harshit", email: "mahsrhit1309@gmail.com" })
    }, 1000)
})
promiseThree.then((user) => {
    console.log(user);


})

const promise4 = new Promise((res, rej) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            res({ username: "harshit", email: "mahsrhit1309@gmail.com", pass: "12jadi" })
        } else {
            rej("something went wrog")
        }
    }, 1000)
})
promise4.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);

}).finally(() => {
    console.log("the promise is either resolve or rejected");

})


const promise5 = new Promise((res, rej) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            res({ username: "harshit", email: "mahsrhit1309@gmail.com", pass: "12jadi" })
        } else {
            rej("error: js went worng")
        }
    }, 1000)
})
async function consumePromiseFIve() {
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);

    }

}
consumePromiseFIve()

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);

//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);

    }).catch((error) => {
        console.log(error);

    })