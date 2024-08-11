// const coding = ["js","ruby", "html", "css", "c++", "python"]
// const value = coding.forEach((item) => {
//     console.log(item);
//     return item
    
// })
// console.log(value);

const myNum = [1, 2 ,3 ,4 , 5, 6, 7, 8, 9, 10]
// const newNum = myNum.filter((num) => {
//     return num > 4
// })
// console.log(newNum);

const newNum = []

myNum.forEach((num) => {
    if(num > 4) {
        newNum.push(num)
    }
})
// console.log(newNum);


var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254,
        genre: 'english',
        publish: 2010
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264,
        genre: 'history',
        publish: 1990
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245,
        genre: 'hindi',
        publish: 1999
    }];

    const userBooks = library.filter( (bk) => bk.genre === "history")

    const userBooks2 = library.filter((bk) => bk.publish <= 2000 &&  bk.genre === "history")
    console.log(userBooks2);
    