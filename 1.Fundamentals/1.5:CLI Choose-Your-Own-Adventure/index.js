/* Mini-Project: CLI Choose-Your-Own-Adventure

Show a text scenario: “You find a door and a window. Which do you choose to open?”
Use if/else or switch to branch to different outcomes.
Print the result.
Focus: Basic text-based game logic in the console. */

const prompt = require("prompt-sync")();

let userInput = prompt("You find a door and a window. Which do you choose to open?")

switch(userInput){
    case "window":
        console.log("The window leads to hunt go ahead");
        break;
        case "door":
            console.log("Try again");
            break;

}