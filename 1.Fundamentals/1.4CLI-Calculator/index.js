/* Mini-Project: CLI Calculator

Ask user for two numbers and an operator (+, -, *, /).
Perform the operation, log the result.
Handle invalid operators by printing an error message.
Focus: Arithmetic in Node, basic control flow.*/

const prompt = require("prompt-sync")();

let num1 = prompt("Enter num1");
let opertor = prompt("Enter a operand : + , - * ,/");
let num2 = prompt("Enter num2");

let result =0;

if(opertor === "+"){
    result = num1+num2;
} else if(opertor === "-"){
    result = num1 - num2;
}
else if(opertor === "*"){
    result = num1 * num2;
}
else{
    result = num1/num2;
}

console.log(result);