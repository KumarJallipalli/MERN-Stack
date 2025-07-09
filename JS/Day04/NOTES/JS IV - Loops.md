# JS IV - Loops

---

## Loops

- loops are used to iterate over a piece of code
- i.e., execute a piece of code multiple times without repetition of the code
- Loops used to control the flow of program

<aside>
💡

NOTE:

---

- Whatever the input given by user in prompt, it is taken & stored as a string only
- A `program` is a set of instructions given to a computer to perform a specific task
</aside>

## For Loop

Syntax of `for` loops is

```jsx
for ( initialization; condition; updation ) {
	//piece of code
}

/*
	Initialization - used to initialize variable(s)
	condition - specifies the condition to go inside lopp or exit the loop
	updation - updates the variable, so that it won't go into infinite loop
*/

/*
	This for-loop will be executed until the condition is true.
  If condition is fasle, then flow will exit the loop.
*/

for (let i = 1; i<=5; i++) {
	console.log(i);
}
```

```jsx
// print all Odd numbers from 1 to 15
//normal code
for (let i=1; i<=15; i++) {
    if (i%2 == 1) {
        console.log(i);
    }  
}

//optimised code
for (let i=1; i<=15; i+=2) {
    console.log(i);
}
```

```jsx
// print all Even numbers from 2 to 10
//normal code
for (let i=2; i<=10; i++) {
    if (i%2 == 0) {
        console.log(i);
    }  
}

//optimised code
for (let i=2; i<=10; i+=2) {
    console.log(i);
}
```

```jsx
// Print the multiplication table of 5
for (let i=1; i<=10; i++) {
    console.log(`5 x ${i} = ${5*i}`);
}
```

<aside>
💡

NOTE:

---

- Whatever the input given by user in prompt, it is taken & stored as a string only
</aside>

## How to convert string to number in JS

1. **Using `Number()`**
2. **Using Unary Plus `+`**
3. **Using `parseInt()`**
4. **Using `parseFloat()`**

NOTE:

- `Number()` and `+` will return `NaN` if the string is not a valid number.
- `parseInt()` and `parseFloat()` can handle strings with extra characters:

```jsx
//  String to Number
let string1 = "123";
let number1 = Number(string1);
let number2 = +string1;
let number3 = parseInt(string1); 
let number4 = parseFloat(string1); // 123

let string2 = "123.45px";
let number5 = Number(string2);     // NaN
let number6 = +string2;            // NaN
let number7 = parseInt(string2);   // 123
let number8 = parseFloat(string2); // 123.45
```

```jsx
//taking input from user & then printing table
let n = prompt("Please input a number to calculate it's multiplication table")
n = parseInt(n); 
for (let i=1; i<=10; i++) {
    console.log(`${n} x ${i} = ${n*i}`);
}
```

## While Loop

Syntax for while-loop

```jsx
 *          while (condition) {
 *              code to be iterated
 *              And updation too
 *          }
/*
 *      - Here, var will be initialized before the loop itself
 *      - condition - whether to enter the loop or exit the loop
 *      - updation is written inside the while block 
 */
 
let i = 1;
while (i<=5) {
    console.log(i);
    i++;
}
```

<aside>
💡

NOTE:

---

- All the code within the curly braces `{ }`, will be called while-block [ of code ]
- Similarly, for-block too
</aside>

## When to use for-loop & while-loop..?

- for-loop is used when we actually know No. of iterations
- While-loop is used when we don’t know No. of iteration but know the condition to break loop.

```jsx
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
```

## break, continue & return

- `break` → breaks out of loop without executing the code below
- `continue` → it skips the current iteration without executing the code below
- `return` → It exits the function without executing the code below

## How to loop with arrays..?

```jsx
//defining an array
let arr = ['mango', "guava", "apple", "pineApple", "watermelon"];

//here, we used the length method to know No. of iterations
for (let i=0; i<arr.length; i++) {
    //we have used i to iterate over each index
    console.log(i, arr[i]);
}
```

## How to loop with Nested arrays..?

```jsx
// Nested array -> An array within an array is called NEsted array

// defining the Nested array
let nestedArr = [ ['Iron Man', 'Captain America', "Hulk"], ["Batman", "Super Man", "Flash", "Wonder Woman"] ];

//1st for-loop/outer-loop is used to iterate over each array
for (let i=0; i<nestedArr.length; i++) {
    //inner loop is used to iterate over each element inside the Inner Array
    //nestedArr[i].length -> gives the length of each array [ but make sure to use i only otherwise error]
    for (let j=0; j<nestedArr[i].length; j++) {
        console.log(i, j, nestedArr[i][j]);
    }
}
```

## for-of Loop

- `for-of` statement → loops through each value of an Iterable Object.

```jsx
/**
 *  for-of Loop:
    ------------
 *  The JavaScript for-of statement loops through the values of an iterable object.
 *      Syntax:
 *              for (variable of iterable) {
 *                  code block
 *              }
 *      - variable - name of the var [ we can (or) cannot declare var, that's NOT a problem ]
 *      - iterable - An object that has iterable properties like string, array...
 * 
 *  This for-of loop will be replacing all the 3 steps of for-loop with a single 'of' keyword
 */

let fruits = ["mango", "melons", "apple", "berries"];

for (i of fruits) {
    console.log(i);
}
/**
 *      - here, i is the variable [in this case, var is not declared]
 *      - fruits is the name of the iterable
 */

for ( let char of "Apna College") {
    console.log(char)
}
/**
 *      - here, char is the var [ in this case, we have declared the var ]
 *      - instead of iterable name, we have given the iterable itself "Apna College"
 */
```

```jsx
// for-of loop in Nested arrays
let heroes = [ ['Iron Man', 'Captain America', "Hulk"], ["Batman", "Super Man", "Flash", "Wonder Woman"] ];

for (arr of heroes) {
    console.log(i) //prints the individula array

    //iterates over each array
    for (indHero of arr) {
        //prints the individual element from array
        console.log (j)
    }
}
```

## To-Do App

```jsx
/**
 *      To-Do App
 * 
 *          - list -> to show all to-do's
 *          - add -> to add a to-do
 *          - delete -> to delete a task
 *          - quit -> to exit the to-do
 */

//We will be using an array to have all the tasks
let todo = [];
let req = null;

while (true) {
    //Taking user input
    req = prompt(`Please select one of the following actions:
    1. list -> to show all to-do's
    2. add -> to add a to-do
    3. delete -> to delete a task
    4. quit -> to exit the to-do `);

    //Exiting the app
    if (req == "quit")
    break;

    if (req == "list") {
        //printing the task
        for (let i=0; i<todo.length; i++) {
            console.log(i+1, todo[i]);
        }
    }
    else if (req == "add") {
        let task = prompt("please enter the task..!")
        todo.push(task);
        console.log("Task Added");
    }
    else if (req == "delete") {
        //printing the tasks, so that user can select the task to delete
        for (let i=0; i<todo.length; i++) {
            console.log(i+1, todo[i]);
        }

        //asking the task number from user to delete the task
        let ind = prompt("Please Enter the task number");
        todo.splice(ind-1, 1);
        console.log("Task deleted");
    }
    else {
        console.log("Wrong Request")
    }
}
```

---

## Practice Q

```jsx
/**
    Qs1. Write a JS program to delete all occurrences of element 'num' in a given array.
            Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
            Result should be arr = [1, 3, 4, 5, 6, 3]

    Qs2. Write a JS program to find the no of digits in a number.
            Example : if number = 287152, count = 6

    Qs3. Write a JS program to find the sum of digits in a number.
            Example : if number = 287152, sum = 25

    Qs4. Print the factorial of a number n.
    [Factorial of a number n is the product of all positive integers less than or equal to a
    given positive integer and denoted by that integer. ]
            Example :

                    7! (factorial of 7) = 1x2x3x4x5x6x7 =5040
                    5! (factorial of 5) = 1x2x3x4x5 = 120
                    3! (factorial of 3) = 1x2x3 = 6
                    0! Is always 1

    Qs5. Find the largest number in an array with only positive numbers.
*/
// Q1
let arr1 = [1, 2, 3, 4, 5, 6, 2, 3] 
let num1 = 2

while (arr1.indexOf(num1) >= 0) {
    let ind = arr1.indexOf(num1);
    arr1.splice(ind, 1);
}

console.log(arr1);

// Q2
let num2 = 287152000;
let digits = 0;

while (num2 > 0) {
    num2 = Math.floor(num2/10);
    digits++;
}
console.log("No of Digits = ", digits)

// Q3
let num3 = 287152001;
let sum = 0;

while (num3 > 0) {
    let digit = num3 % 10;
    sum += digit;

    num3 = Math.floor(num3/10);
}
console.log("Sum of the Digits of number = ", sum);

// Q4
let ans = 1;

let n = 1;
while (n > 0) {
    ans = ans * n--;
}
console.log(`Factorial of the number = ${ans}`);

// Q5
let arr = [11, 51, 24, 75, 62, 38];
let maxNum = arr[0];

for (let i=1; i<arr.length; i++) {
    if (arr[i] > maxNum) {
        maxNum = arr[i];
    }
}
// or
for (ele of arr) {
    if (ele > maxNum) {
        maxNum = ele;
    }
}
console.log(`Largest Number in the arrays = ${maxNum}`);
```