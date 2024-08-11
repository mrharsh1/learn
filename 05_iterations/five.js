const coding = ["js","ruby", "html", "css", "c++", "python"]

// coding.forEach( (val) => {
//     console.log(val);
    
// })

// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
    
})

const myCoding = [{
    languageName: "javascript",
    filename: "js"
},
{
    languageName: "python",
    filename: "py"
},
{
    languageName: "java",
    filename: "java"
}
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})