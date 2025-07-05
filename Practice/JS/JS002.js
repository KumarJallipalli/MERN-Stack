// Q1: Create a Traffic light System that shows what to do based on Color
let color = "red";

if (color == "red") {
  console.log("STOP");
} else if (color == "yellow") {
  console.log("Slow Down");
} else if ((color = "green")) {
  console.log("Go Ahead");
} else {
  console.log("Traffic Lights are Broken");
}

// same code in Switch Statements
switch (color) {
  case "red":
    console.log("STOP");
    break;
  case "yellow":
    console.log("Slow Down");
    break;
  case "green":
    console.log("Go Ahead");
    break;
  default:
    console.log("Traffic Lights are Broken");
}

//  Q2: Create a System to Cal Popcorn Prices baseed on the size customer asked for
let size = "XL";

if (size == "XL") {
  console.log("Price of your Popcorn is : 250/-");
} else if (size == "L") {
  console.log("Price of your Popcorn is : 200/-");
} else if (size == "M") {
  console.log("Price of your Popcorn is : 100/-");
} else if (size == "S") {
  console.log("Price of your Popcorn is : 50/-");
} else {
  console.log("This Size is NOT Available..!");
}

/**
 * Q3: A "good string" is a string that starts with the letter 'a' & has a length > 3.
 *     Write a Program to find if a string is good or not.
 */
let str = "null";

if (str.length > 3 && str[0] === "a") {
  console.log("String is a GOOD String");
} else {
  console.log("String is a BAD String");
}

// Q4: Predict the output of following code :
let num = 12;

if (num % 3 === 0 && (num + 1 == 15 || num - 1 == 11)) {
  console.log("safe");
} else {
  console.log("unsafe");
}
// O/P: SAFE


// Q5: Use Switch Statements to print the day of the week
let day = 1;

switch (key) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THRUSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
    default:
        console.log("Wrong Number, please enter between 1 & 7 [ included ]")
        break;
}


// Practice Qs Set

/**
 *  Qs1. Create a number variable num with some value.
         Now, print "good" if the number is divisible by 10 and print "bad" if it is not.

    Qs2. Take the user's name & age as input using prompts.
        Then return back the following statement to the user as an alert (by substituting
        their name & age) :
        name is age years old.
        [Use template Literals to print this sentence]

    Qs3. Write a switch statement to print the months in a quarter.
        Months in Quarter 1 : January, February, March
        Months in Quarter 2 : April, May, June
        Months in Quarter 3 : July, August, September
        Months in Quarter 4: October, November, December
        [Use the number as the case value in switch]

    Qs4. A string is a golden string if it starts with the character 'A' or 'a' and has a total
        length greater than 5.
        For a given string print if it is golden or not.

    Qs5: Write a Program to FInd the Largest of the 3 numbers

    Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
        Eg : 32 and 47852 have the same last digit i.e. 2
 */

// Q1 Ans:
let number = 120;
if (number%10 === 0) {
    console.log("good");
} else {
    console.log("bad");
}

// Q2 Ans:
let uName = window.prompt("Pease enter your Name: ");
let uAge = window.prompt("Pease enter your Age: ");

window.alert(`${uName}) is ${uAge} years old`)


// Q3 Ans:
let quarter = 1;

switch (quarter) {
    case 1:
        console.log("Months in Quarter 1 : January, February, March")
        break;
    case 2:
        console.log("Months in Quarter 2 : April, May, June")
        break;
    case 3:
        console.log("Months in Quarter 1 : July, August, September")
        break;
    case 4:
        console.log("Months in Quarter 1 : October, November, December")
        break;
    default:
        console.log("Please Enter Valid Quarter Number between 1 & 4")
        break;
}


//  Q4 Ans:
let str2 = '';

if ( (str2[0] === 'A' || str2[0] === 'a') && str2.length>5 ) {
    console.log("String is a Golden Strig");
} else {
    console.log("String is NOT a Golden Strig");
}


//  Q5 Ans:
let num1 = 1, num2 = 2, num3 = 3;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(`Greates of 3 numbers is: ${num1}`);
    } else {
        console.log(`Greates of 3 numbers is: ${num3}`);
    }
} else {
    if (num2 > num3) {
        console.log(`Greates of 3 numbers is: ${num2}`);
    } else {
        console.log(`Greates of 3 numbers is: ${num3}`);
    }
}


//  Q6 Ans:
let number1 = 32;
let number2 = 47852;

let ld1 = number1 % 10;
let ld2 = number2 % 10;

if (ld1 === ld2) {
    console.log("Both numbers have same Last Digit");
} else {
    console.log("Both numbers Don't have same Last Digit");
}