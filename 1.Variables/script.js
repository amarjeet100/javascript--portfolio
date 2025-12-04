// some practice on javascript Variables 
 //  You can think of variables as “storage containers” for data in your code.


//let age = 25;
let name = "Upendra";
let isStudent = true;
 //console.log(age);
 console.log(name);
 console.log(isStudent);

// Operators

//console.log(1 + 1); // 2
//console.log(5 -2); // 3
//console.log(5 * 3); // 15
//console.log(10/2); // 5
//console.log(9 % 2); // 1

// basic  projects using Variables

//1. age calculator
//let birthyear = 2000;
let birthyear = Number(prompt("Enter your birth year : ")); //  prompt is function it shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

let age = 2025 - birthyear;
console.log(age);

// 2. Temperature Converter (°C ↔ °F)

//formula --> F = (C × 9/5) + 32

const  celsius = Number(prompt("Enter your Number: "));

const fahrenheit = (celcuis * 9/5) + 32;
console.log(fahrenheit + "℉");






