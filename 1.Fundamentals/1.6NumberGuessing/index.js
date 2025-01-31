/* 1.6 Loops: while, for
Mini-Project: Number Guessing Game (CLI)

Generate a random number from 1 to 10.
Loop, asking for user guesses.
If the guess is too high/low, print hints.
Stop when correct, print # of attempts.
Focus: Mastering loops and conditionals in a terminal-based game. */

const LCG =(function() {
    let seed = Date.now();

    function next(){
        const a = 1664525;      // Multiplier
        const c = 1013904223;   // Increment
        const m = 2 ** 32;  
        seed = (a*seed+c) % m;
        return seed/ m;
    }

    return {
        random:next,
        randomInt: function(min,max){
            return Math.floor(next()*(max - min + 1)) + min;
        }
    }
})();

let randomNumber = LCG.randomInt(1,10);

let userInput = undefined;

let attemps = 0;
while(true){
   userInput =  prompt("Guess a number in 1 to 10");
   attemps++;

   if(isNaN(userInput)){
    console.log("Invalid input! Please enter a number");
    continue;
   }

   if(userInput > randomNumber){
    console.log("Too high! Try again");
   }else if (userInput < randomNumber) {
    console.log("Too low! Try again.");
} else {
    console.log(`Good work! You guessed it in ${attempts} attempts.`);
    break; // Exit loop when correct
}
}
