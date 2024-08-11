const myNum = [1, 2 ,3]
// const mytotal = myNum.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)
const mytotal = myNum.reduce( (acc, currval) => acc + currval ,0)
console.log(mytotal);


const shopCart = [
    {
        itemname: "js",
        price: 2999
    },
    {
        itemname: "Mobile Dev",
        price: 5999
    },
    {
        itemname: "data science",
        price: 12999
    },
    {
        itemname: "python",
        price: 3999
    }
]

const add = shopCart.reduce( (acc, item) => acc + item.price, 0)
console.log(add);
