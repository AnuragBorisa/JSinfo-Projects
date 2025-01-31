/* You’ll replace these with CLI equivalents. For example:

prompt-sync or readline for user input
console.log for output
Instead of confirm(), you might parse “y/n” input.
Mini-Project: Name & Confirmation (CLI)

Ask user for name in CLI.
Ask user “Are you sure? (y/n)”.
Print a response based on user answer.
Focus: Basic text-based interactivity in the terminal.*/

const prompt = require("prompt-sync")();
let userName = prompt("Whats your Name")
let userInput = prompt("Are You Sure? (y/n)");

if(userInput === "y"){
     console.log(userName);
}
else{
    console.log("OK no issue");
}