/* Mini-Project: Type Conversion CLI

Prompt user to enter a value (string) via CLI.
Convert it to number (Number(value)), boolean (Boolean(value)), and show each result in console.log().
Print the data type of the original vs. each conversion.
Focus: Understanding how conversions work without browser prompt/alert.*/


const prompt = require("prompt-sync")()

let userInput = prompt("Enter Something")

console.log(Number(userInput));
console.log(Boolean(userInput));
console.log(String(userInput));