//JavaScript stores each “character” as 16-bit units, but some characters (like emojis, symbols) need 2 units.

console.log("😎".length);// 2
 
// way to create string
 const name = "Amarjeet"; // string literal
 const email = 'google123@gmail.com'; // single quots

 const city = `Delhi`;
 console.log(`${city} is captial of India`); // backticks (template literals)

let webLanguage = "Javascript";
webLanguage[0] = "P"; // it doesn't work because of Strings are Immutable. you can create only new strings

// Strings properties

console.log("Javascript".length);

// Strings methods
console.log("javascript".indexOf("script")); // .indexOf()
console.log("Steve Jobs".lastIndexOf("Jobs")); // .lastIndexOf()
console.log("Full Stack Development".includes("Development"));// .includes()
console.log("Google".startsWith("Go")); // .startsWith()
console.log("API.json".endsWith(".json")); // .endsWith()

// .slice() methods
 let str = "I love Javascript like my Mom";
 console.log(str.slice(0,29));
 console.log(str.slice(23,29));
 console.log(str.slice(-22));
// Modifying string
console.log("nepolean".toUpperCase()); // .toUpperCase()
console.log("NEOPLEAN".toLowerCase()); // .toLowerCase()
console.log("Amarjeet  ".trim()); // .trim()
console.log("Js is hard".replace("hard", "easy")); // .replace()
console.log("aa bb cc".replaceAll("aa" ,"zz")); // .replaceAll()
console.log("computer , pen, pencil, paper".split(","));
console.log(["js" ,"is" ,"incredible"].join(" "));
 
 // sort methods
 const arr = [12,24,6,7,8];
 console.log(arr.sort()); // ❌ wrong numeric sorting







// const button = document.querySelector("#button");
// const greeting = document.querySelector("#greeting");

// function greet () {
//     const name = prompt("enter your name:");
//      greeting .textContent  = `Hii ${name} how are you!`;
// }

// addEventListener("click",greet);

