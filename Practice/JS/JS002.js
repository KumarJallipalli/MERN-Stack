<<<<<<< HEAD
// Generate Random Numbers between 1 & 100
let randomNumber2 = Math.floor(Math.random()*100) + 1;
console.log(randomNumber2);

// Generate Random Numbers between 1 & 5
let randomNumber3 = Math.floor(Math.random()*5) + 1;
console.log(randomNumber3);

// Generate Random Numbers between 21 & 25
let randomNumber4 = Math.floor(Math.random()*5) + 21;
console.log(randomNumber4);


/**
 *  Guessing Game:
 *  - User enters a max number, then system will generate a random number between 1 to max number
 *  - Now user tries to guess this random number
*/
let maxNumber = parseInt(prompt("Please enter a Maximum Number: "));
let randomNumber = Math.floor(Math.random()*maxNum) + 1;

let guessNumber = parseInt(prompt("Your Guess Number: "))

while (true) {
    if (guessNumber == "quit") {
        console.log("You have quit the Game..!");
        break;
    }

    if (guessNumber == randomNumber) {
        console.log("Congratulations, You have guessed the Number Correct & Number was ", randomNumber);
        break;
    }
    else if (guessNumber < randomNumber) {
        guessNumber = prompt("Guessed number is Smaller, guess again.");
    }
    else {
        guessNumber = prompt("Guessed number is Larger, guess again.");
    }
}


/**
    Qs1. Create a program that generates a random number representing a dice roll.
        [The number should be between 1 and 6].

    Qs2. Create an object representing a car that stores the following properties for the
        car: name, model, color.
        Print the car's name.

    Qs3. Create an object Person with their name, age and city.
        Edit their city's original value to change it to "New York".
        Add a new property country and set it to the United States.
*/
// Q1
let diceRoll = Math.floor(Math.random()*6) + 1;
console.log(diceRoll);

// Q2
let car = {
    name: "BMW",
    model: "G9",
    color: "Black"
}
console.log(car.name);

// Q3
let person = {
    name: "Dora",
    age: 18,
    city: "Dora City"
}
person.city = "New York";
person.country = "USA";
console.log(person);
