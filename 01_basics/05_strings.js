const name = "harshit";
const repoCount = 10;

console.log(name + repoCount + "value"); // this is the wrong way use backticks

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


// declre strings

const gameName = new String('harshit-maurya-ccom')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));
console.log(gameName.trimStart());

const newString = gameName.substring(0, 4)
console.log(newString);

const newString2 = gameName.slice(-11, 3)
console.log(newString2);

const newString3 = "    Harshit    "
console.log(newString3);
console.log(newString3.trim());



const url = "https://harshit-05.netlify.app/harshit%20maurya"
console.log(url.replace('%20', '-'));
console.log(url.includes('harshit'));



console.log(gameName.split('-'));
