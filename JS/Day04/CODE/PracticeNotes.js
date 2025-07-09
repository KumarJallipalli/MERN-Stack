// Print All ODD numbers from 1 to 15
for (let i=1; i<=15; i++) {
    if (i%2 != 0) {
        console.log(i);
    }
}

for (let i=1; i<=15; i=i+2) {
    console.log(i);
}


// Print All EVEN numbers from 2 to 10
for (let i=2; i<=10; i+=2) {
    console.log(i);
}

for (let i=2; i<=10; i++) {
    if (i%2 == 0) {
        console.log(i);
    }
}


// Print Multiplication Table of 5
for (let i=1; i<=20; i++) {
    console.log(`5 X ${i} = ${5*i}`);
}


//  String to Number
let string1 = "123";
let number1 = Number(string1);
let number2 = +string1;
let number3 = parseInt(string1); 
let number4 = parseFloat(string1); 
console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);

let string2 = "123.45px";
let number5 = Number(string2);
let number6 = +string2;
let number7 = parseInt(string2); 
let number8 = parseFloat(string2); 
console.log(number5);
console.log(number6);
console.log(number7);
console.log(number8);


/**
 * GAME - Fav movie game guess
 *      - Users enter the guess movie name
 *      - If it matches the fav movie, wins else fails
 *      - if he wants to exit the game, he will an opt.
*/
let favMovie = "Forrest Gump";
let guess = prompt("Guess my Favourite Movie..! \or \nEnter 'quit' to exit the game");

while ( (guess.toLowerCase() != favMovie.toLowerCase()) && (guess != 'quit') ) {
    console.log("Wrong Guess..!")
    guess = prompt("Wrong Guess..! \n Please Try Again..");
}

if (guess == favMovie) {
    console.log("Congratulations..! \nYou have guessed the correct movie");
} else {
    console.log("You have exited the Game");
}