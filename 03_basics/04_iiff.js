// Immediatly Invoked function expression {IIFE}
(function chai() {
    // named IIFE
    console.log(`Db connected`); 
    
})();
// global scope ke poloution se problem hoti hai kai baar toh us golbal scope ke variables hai uske pollutopn ko hatne ke liye IIFE ka use krte hai 
// jo funtion immidetilly excute ho jaye

((name) =>{

    console.log(`Db connected 2 ${name}`); 
})("harshit")


// ======================= Javascript Exection context =====================
// maine jo bhi  js file bnaya hai vo usko  js run kaise krti hai...ye isko 2 phase me run krti hai

// 1. global execution context 2. functional EC 3. eval ec

