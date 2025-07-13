# JS VII - this

---

## this

- `this` refers to an Object that is currently being executed
- The `this` keyword refers to different objects depending on how it is used:
    - In an obj method, `this` refers to that current obj
    - In an obj property, `this` refers to that Global Obj
    - Alone, `this` refers to global obj called window [ Only in Browser ]
    - in a function, `this` refers to global obj called window
    - in a function, in strict mode, `this` is undefined
    - in an event, `this` refers to element that received the event

<aside>
💡 `this` is not a variable. It is a keyword. hence You cannot change the value of `this`.

In Node, the top-level `this` is **not** `global`. Instead, it's an empty object `{}` inside modules.

</aside>

```jsx
const student = {
    maths: 100,
    phy: 99,
    che: 98,
    avg: function() {
        let avg = (maths+phy+che)/3;
        console.log(avg);
    }
};
student.avg(); // this gives an error saying maths, phy & che is not defined
/**
 *  So, to make those avaiable inside the avg function, we use this keyword
 *  ex: (this.maths+this.phy+this.che)/3 => similar to student.maths
*/

const student = {
    maths: 100,
    phy: 99,
    che: 98,
    avg() {
        let avg = (this.maths+this.phy+this.che)/3;
        console.log(`${this.name} got the average marks ${avg}`);
    }
};
student.avg() // gives the o/p
```

```jsx
let Student = {
    prop: this,
    obj: {
        name: "London",
        prop: this,
        obj: {
            prop: this
        }
    }
}
console.log(Student.prop);
console.log(Student.obj.prop);
console.log(Student.obj.obj.prop);
console.log(this);
```

- Here,
    - All points to Global Obj, which is `window` in Browser
    - All points to Global Obj, which is `undefined` in Node

## try & catch

`try...catch` is used for **error handling**. [ Only Runtime Errors ]

- Whenever an Error occurred, We will catch that error [ & manage it ]
- Hence, instead of blocking the code execution due to error, it will log that error msg & continue the execution

`try` → Allows us to define a block of code to test for errors while it (the block of code) is being executed.

`catch` → Allows us to define a block of code to be executed, if an error occurs in try block

```jsx
//case-1
console.log("Hello");
console.log("Hello");
console.log(a);
console.log("Hello2");
console.log("Hello2");
```

The diff between case-1 & case-2 is:
 *      - case-1 will throw an error & stop the execution at the error itself
 *      - in real life cases, this means crashing a website once an error occurs
 *      - But in case-2, it will print the log message of error & continue execution

```jsx
//case-2
console.log("Hello");
console.log("Hello");
try {
    console.log(a);     // this will give us error as 'a' is NOT defined 
} catch (err) {
    console.log("Variable 'a' is NOT defined");
    console.log(err);     // this will catch that error
}
console.log("Hello2");
console.log("Hello2");
```

## Arrow functions

- It replaces the `function` keyword with an `⇒`
- It was introduced in ES6
- Arrow functions are similar to functions as an expression
    - It just makes function syntax shorter [ that’s it ]

```jsx
//normal function
function sum1 (a, b) {
    return a+b;
};

//function as an expression
let sum2 = function(a, b) {
    return a+b;
};

//arrow function
let sum3 = (a, b) => {
    return a+b;
}
```

```jsx
// Arrow Function
const hello = (name) => {
    console.log(name);
}

const namaste = name => {
    console.log(name);
}

// Arrow Function shorthand
const wish = name => console.log("Happy Birthday", name);

// Implicit return with Arrow Function
const cube = n => n*n*n;
```

<aside>
💡

NOTE:

---

- We can ignore the parenthesis `()`, if there is Only 1 Argument [ Not 0 ( or ) not more than 1 ]
- we can ignore curly braces `{}`, if there is Only 1 Statement
</aside>

## Implicit return

- if there is only one statement in the arrow function’s block of code
- And that statement is not a printing statement or calculation statement & so on..
- But only a return statement, then we can write it without return keyword also
- This is called automatic return (or) implicit return

```jsx
let cube = n => n*n*n; // an arrow function for cubing a number

// here, we removed parenthesis, curly braces & return keyword
// In this way, arrow function is used to shorter the syntax
```

## set Interval

- It is an Higher Order function
- It will have 2 parameters,
    - 1st → function &
    - 2nd → time interval [ ms ]
- It will execute the function in an infinite loop with time interval given as a 2nd argument.
    - To stop this Infinite Loop,
        - we need to use `clearInterval(id)` function
        - `id` is the Value returned by `SetInterval()` function
            - Usually Value will be `'number'` in browsers, or `'Timeout'` object in some environments like Node.js.

```jsx
let id = setInterval( () => {console.log("Hello")}, 2000);
console.log(id);
clearInterval(id);
/**
 *  - here, id will store the ID of setInterval function
 *  - ClearInterval function will stop the setInterval function corresponding to that ID
 */
```

- `setTimeOut` → is similar to `setInterval` but executes only 1 time [ after the specified time interval ]

## this keyword with arrow function [ hard topic ]

- In regular functions,
    - the `this` keyword represents the object which calls the function
- With arrow functions,
    - the `this` keyword *always* represents the parent object which calls the arrow function ⇒ lexical scope

```jsx
const stud = {
    name: "Apple",
    age: 6,
    grade: 'A',
    prop: this,     // Here this refers to Global Obj -> window
    getName: function() {
        console.log(this); // this -> stud
        return this.name;  // this.name -> stud.name == Apple
    },
    getGrade: () => {
        console.log(this); // this -> caller of obj => parent of obj stud == window
        return this.name; // this.name -> caller of obj stud => parent of obj stud == window.name == undefined
    },
    getInfo1: function() {
        setTimeout( () => {console.log(this)}, 2000 );
        // here, setTineout function is calling arrow fn, hence caller is caller of setTimeout => function => stud
    },
    getInfo2: function() {
        setTimeout( function() {console.log(this)}, 2000 );
        // here, setTineout function is calling normal fn, hence caller is setTimeout => window
    }
}
```

<aside>
💡

NOTE:

---

- `obj.length` → Undefined
</aside>

## Practice Qs

```jsx
/**
 *  Practice Qs:
 *      - Write an Arrow fn that returns the square of an number
 *      - write a fn that prints "Hello World" 5 times at intervals of 2s each
*/

let square = (n) => n*n;

let func1 = () => {
    for (let i=0; i<5; i++) {
        setTimeout(()=> console.log("Hello World"), 2000);
    };
};
func1(); // directly prints 5 times at the same time with time interval 2 sec

// But the above function won't work as expected, hence we write the below fn

let id2 = setInterval( () => console.log("Hello world"), 2000);
console.log(id2); // runs for 5 times
setTimeout(() => {clearInterval(id2);}, 10000);  // stops after 10 secs
```

## Assignment

```jsx
// 1. Write an arrow function that returns the square of a number 'n'.
let squareN = n => n*n;
console.log(squareN(5));

// 2. Write a function that prints "Hello World" 5 times at intervals of 2s each.
// let id = setInterval(() => {
//     console.log("Hello World");
// }, 2000);
// console.log(typeof id);
// setTimeout(() => {clearInterval(id)}, 10000);
// 	The 5th interval is canceled right at or before it would execute at 10000 ms
// /But In Broswer, It will run for 5 times

/**
    Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
    and returns the average of those numbers.

    Qs2. Write an arrow function named isEven() that takes a single number as argument
    and returns if it is even or not.

    Qs3. What is the output of the following code :
                const object1 = {
                    message: 'Hello, World! ',
                    logMessage () {
                        console.log (this.message);
                    }
                }
                setTimeout (object1.logMessage, 1000);
    
    Qs4. What is the output of the following code :
                let length = 4;

                function callback () {
                console.log (this.length);
                }

                const object2 = {
                    length: 5,
                    method (callback) {
                        callback();
                    }
                }
                object2.method(callback, 1, 2);
                console.log(this.length);
*/
```

```jsx
// Q1
let arr1 = [1, 2, 3, 4, 5, 6];
let arrayAverage = (arr) => {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log(arrayAverage(arr1));

// Q2
let isEven = (n) => {return n%2 == 0};
console.log(isEven(30));

// Q3
const object1 = {
    message: 'Hello, World! ',
    logMessage () {
        console.log (this.message);
    }
}
setTimeout (object1.logMessage, 1000);

// Q4
let length = 4;

function callback () {
console.log (this.length);
}

const object2 = {
    length: 5,
    method (callback) {
        callback();
    }
}
object2.method(callback, 1, 2);
console.log(this.length);
```

---

## How to take input in NodeJS

```jsx
//  How to take input in NodeJS
import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  rl.close();
});
```

<aside>
💡

NOTE:

---

- In `rl.question()`,
    - `rl.question()` is asynchronous.
    - You **can't reliably use the input value outside** the `rl.question()` without waiting for the callback to finish.
    - Use `async/await` or Promises to handle the input more cleanly and access it outside the callback.
    - Hence,
    
    ```jsx
    let userName;
    
    rl.question("Enter your name: ", function(name) {
      userName = name;
      console.log("Inside callback:", userName); // ✅ works
    });
    
    console.log("Outside callback:", userName); // ❌ undefined (runs before input is received)
    ```
    
</aside>