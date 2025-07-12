# JS VI - Functions

---

## Function

`function` is a block of code designed to perform a particular task.

- A JavaScript function is defined with the `function` keyword, followed by a **name**, followed by parentheses **()**.
- A JS function is called with `function_name` followed by parenthesis `()`

```jsx
//Defining a hello function
function hello () {
    console.log("Hello..!, How are you");
}

// calling the hello function
hello();
```

```jsx
// Create a Function to roll a Dice [ which displays 1 to 6 ]
function diceroll () {
    let roll = Math.floor(Math.random()*6) + 1;
    console.log(roll);
}

diceroll();
```

## Function parameters & arguments

- `parameters` are the variables declared inside parenthesis `( )` during function definition
- `arguments` are the values passed inside parenthesis `( )` during function calling

```jsx
function sum (parameter1, parameter2) {
    console.log(parameter1+parameter2);
}

sum(4, 8); //4, 8 are the argument1 & 2 respectively
```

<aside>
💡

NOTE:

---

- In JS functions,
    1. order in which arguments are passed is V.IMP [ Since types are not defined at compile time ]
        - If one of the argument is missed, then it will take value of 2nd as `undefined` & gives the o/p without any error
        - If we give more arguments than the parameters defined, then it will only take the arguments required for the defined parameters & ignore the rest.
    2. If  we print the function name [ without parenthesis ]
        - console will print the definition of user defined functions [ In Browser ]
        - console will print the function name saying it is a function [ In Node ]
    3. `typeof` function → function
    4. Always a function returns `undefined` [ if it doesn’t explicitly returns something ]
</aside>

```jsx
// Create a function that gives us average of 3 numbers
function average (a, b, c) {
    let avg = ( a + b + c )/3
    console.log(avg);
}

average(1, 2, 3);               // 2
console.log(average);           // [Function: average]
console.log(typeof average);    // function
console.log(average(2, 3, 4));  // Undefined
```

```jsx
// Create a Function that prints multiplication table of a number
function mulTable (n) {
    for (let i=1; i<=10; i++) {
        console.log(`${n} X ${i} = ${n*i}`);
    }
}
mulTable(7);
```

## return

- in general terms, a function will take some input, works on it & then gives us the output
    - in terms of programming language,
        - inputs → arguments
        - processing → block of code
        - output → ?
    - This output is given by a keyword called `return`
- `return` → A keyword used to return some value from a Function

## return (vs) break

- `break` → it exits the block of code without executing the code below
- `return` → it exits the block of code without executing the code below & returns value

```jsx
// Create a Function that returns sum of numbers fro 1 to n
function sumOfNumbers (n) {
    let sum = 0;
    for (let i=1; i<=n; i++) {
        sum += i;
    }  
    return sum;
}
console.log(sumOfNumbers(10));
```

```jsx
// Create a function that returns concatination of all the strings in an array
let arr = ["name", 'is', 45];

function concat (arr) {
    let result = '';
    for (let i=0; i<arr.length; i++) {
        result += arr[i];
    }
    return result;
}
console.log(concat(arr));
```

## Scope

- `scope` determines accessibility/availability of variables, objects & functions from different parts of code.
- There are 3 types of scopes
    - function scope → Var defined inside the function are NOT accessible outside the function
    - Block scope → Var defined inside the block `{ }` are NOT accessible outside the block `{ }`
        - This scope is NOT applicable to variables defined using `var` keyword
    - Lexical Scope

<aside>
💡

NOTE:

---

- If there is clash between global & function scope
- Always "function" scope wins
</aside>

```jsx
// function scope
let add = 5; // global scope

function functionBlock (n1, n2) {
    let add = n1+n2; // function scope
    return add;
}

console.log(functionBlock(2, 5)); // 7 [without error]
console.log(add); // 5

// block scope
{
    var h = "H";
    let k = "k";
}
console.log(h); // H -> since block scope is NOT valid for var keywords
console.log(k); // error -> due to block scope
```

## Lexical Scope [ Static Scope ]

- **`Lexical (or static) scope`** → Scope of a Variable is Determined **at the time of writing the code [ defining ]**, **not at runtime [ calling ]**
    - JavaScript uses
        - **function-level scoping** (with `var`) and
        - **block-level scoping** (with `let` and `const` from ES6).
    - Inner functions can access variables from their outer (parent) functions, but not vice versa.

```jsx
// Lexical Scope
function outerFn () {
    let x = 10;
    let y = 20;

    function innerFn () {
        console.log(x);
        console.log(y);
    }
    innerFn();
}

outerFn(); // prints both the values of x & y
```

```jsx
// Lexical scope with hoisting
function outerFn1 () {
    function innerFn1 () {
        console.log(x); //lexical scope
        console.log(y); //lexical scope
    }

    let x = 10;
    let y = 20;
    innerFn1();
}
outerFn1(); 
// printsvalues of x & y -> Due to Hoisting
```

```jsx
// Lexical Scope with Closure
function outer() {
  let a = 100;
  return function inner() {
    console.log(a);
  };
}

let innerFunc = outer(); 
// outer() runs, returns inner()

innerFunc(); 
// Logs 100, because Closure keeps `a` alive
```

## Importance

- Lexical scope is the foundation for **closures**,
    - A **`closure`** is a function
        - that **Remembers** the variables & functions from the **lexical scope [** in which it was defined ]
        - even after the outer function has finished executing
- It helps avoid naming conflicts and makes code more predictable and maintainable

```jsx
function outer() {
  let a = 100;

  function mid() {
    let b = 200;

    return function inner() {
      console.log(a + b); // Accessing both `a` and `b`
    };
  }

  return mid();
}

let innerFunc = outer();
a = 1000;    // Reassigning 'a' globally has no effect
b = 2000;
innerFunc(); // Logs 300 [ due to closure ]
```

- Here,
    - Each function **remembers the scope it was created in**, layering access from `inner` → `mid` → `outer`
- Finally,
    - **Lexical scope** means `inner()` keeps the environment where it was **created**, not where it's **called**.
    - So even though global `a` and `b` are `1000` and `2000`, `inner()` uses the **local** `a` and `b` from when it was **defined** — that's lexical scope.

## Function Expressions

- Function as expressions are called Function Expressions
    - It is an alternative of a **function declaration**.
    - Function Expression → a way of defining a function and assigning it to a variable.
- Function Expressions CANNOT be hoisted (must be defined before use)
- It can be both Anonymous function & Named functions

```jsx
let hello = function() {
    console.log("Hello");
};

hello(); // Hello
/**
 *  - Here, hello -> A variable & behaves like a normal varaible [ But Not a function ]
 *  - function is a nameless function & it is assigned to a variale called hello
 *  - This type of assigning a nameless fn to a variable is termed as Function Expression.
*/
hello = 10;
console.log(hello); //10
```

## Function expression with named functions

```jsx
const greet = function sayHello(name) {
  return "Hello, " + name + "!";
};

console.log(greet("Alice"));     // Output: Hello, Alice!
console.log(sayHello("Alice"));  // Output: ReferenceError: sayHello is not defined
```

- To call the Function Expression,
    - We must use variable name. In this case `greet("Alice")`
    - You **cannot** call `sayHello()` from outside.
- function names is only accessible **inside the function itself** (used for recursion or debugging).

## Higher Order Functions

A function that does either

- takes one (or) multiple functions as arguments
- returns a function

Simply, A function which takes another function as argument ( or ) returns another function

```jsx
//taking onr (or) more functions as an argumets
function multipleGreet (func, n) {
    for (let i=0; i<n; i++) {
        func();
    }
}
let greet = function() {
    console.log("Hello");
}

multipleGreet(greet, 3); //prints Hello 3 times
/**
 *  - Here, multipleGreet -> a HOF (as it takes a function as an argument)
 *  - greet -> Not a function but a variable having function as a Value/Expression
*/
```

```jsx
// returns a function
function oddEvenTest (request) {
    if (request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    }
    else if (request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    }
    else {
        console.log("Wrong request");
    }
}

let request = "even"; 
let even = oddEvenTest(request);
even(3);    //  retuens a false
even(10);   // retuens a true

request = "odd";
let odd = oddEvenTest(request);
odd(3);     // returns a true
odd(10);    // returns a false
```

## Methods

- Functions that are associated with an Object are called Methods
- Methods → Actions that can be performed on an object

```jsx
let calculator = {
    num: 52,
    add: function(a, b) {
        return a+b;
    },
    sub: function(a, b) {
        return a-b;
    },
    mul: function(a, b) {
        return a*b;
    }
}

calculator.add(2, 8)    // 10
calculator.mul(10, 4)   //40
```

```jsx
/**
 *  There is shorthand notation for writing functions inside an object
*/
//  shorthand
let calculatorShort = {
    num: 52,
    add(a, b) {
        return a+b;
    },
    sub(a, b) {
        return a-b;
    },
    mul(a, b) {
        return a*b;
    }
}
calculatorShort.add(2, 8)
```

```jsx
/**
    Qs1. Write a JavaScript function that returns array elements larger than a number.

    Qs2. Write a JavaScript function to extract unique characters from a string.
    Example: str = "abcdabcdefgggh" ans = "abcdefgh"

    Qs3. Write a JavaScript function that accepts a list of country names as input and
    returns the longest country name as output.
    Example : country = ["Australia", "Germany", "United States of America"] output :
    "United States of America"

    Qs4. Write a JavaScript function to count the number of vowels in a String
    argument.

    Qs5. Write a JavaScript function to generate a random number within a range
    (start, end).
*/
// Q1
let arr1 = [1, 2, 3, 4, 5];
function elementsLargerThanNumber (arr, n) {
  let ans = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i] > n) {
      ans.push(arr[i]);
    }
  }
  console.log(ans);
}
elementsLargerThanNumber(arr1, 3);

// Q3
let country = ["Australia", "Germany", "United States of America"];
function longestCountryName (arr) {
  let ind = 0;
  for (let i=1; i<arr.length; i++) {
    if (arr[i].length > arr[ind].length) {
      ind = i;
    }
  }
  return arr[ind];
}
console.log(longestCountryName(country));

// Q4
let str = "United States of America";
function countVowels (str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  str = str.toLowerCase();
  for (let i=0; i<str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels(str));

// Q5
function genRandomNumber (start, end) {
    return Math.floor(Math.random()*(end-start)) + start;
}
console.log(genRandomNumber(5, 100));

// Q2
let str2 = "abcdabcdefgggh";
function uniqueChar (str) {
    let ans = '';
    for (let i=0; i<str.length; i++) {
        if (!ans.includes(str[i])) {
            ans += str[i];
        }
    }
    return ans;
}
console.log(uniqueChar(str2));
```

---

## how lexical scope interacts with closures and hoisting

## ✅ 1. **Lexical Scope** (a.k.a. static scope)

- Determined **at the time of writing code**, **not at runtime**.
- A function’s scope is based on **where it was defined**, not where it is called.
- Functions have access to variables declared in their **outer (enclosing) scopes**.

> Think: "Where in the source code was this function written?"
> 

## ✅ 2. **Closures**

A **closure** is a function that:

- **Remembers** the variables from the **lexical scope** in which it was defined.
- Even **after** the outer function has finished executing.

## ✅ 3. **Hoisting**

Hoisting is JavaScript’s behavior of **moving variable and function declarations to the top** of their containing scope during compilation.

### Hoisting applies to:

- `var` declarations → hoisted but **initialized as `undefined`**
- `let` and `const` → hoisted **but in the temporal dead zone (TDZ)** until they are declared
- Function **declarations** (not expressions) → hoisted with full body

```jsx
function makeGreeting(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}`);
  };
}

const greet = makeGreeting('Hello');
greet('Alice'); // "Hello, Alice"
```

- The inner function uses `greeting` from the **lexical scope** of `makeGreeting`
- It "closes over" the variable, creating a **closure**

```jsx
function outer() {
  console.log(x); // undefined (due to hoisting)
  var x = 5;    // let gives error here due to TDZ

  return function inner() {
    console.log(x); // 5
  };
}

const innerFunc = outer();
innerFunc();
```

## 🔚 Summary Table

| Concept | What It Does | Example Key Behavior |
| --- | --- | --- |
| **Lexical Scope** | Scope based on where functions are **written**, not called | Inner functions access outer variables |
| **Closures** | Functions **remember** their lexical scope | Access variables even after outer function ends |
| **Hoisting** | Moves declarations to top during compile | `var` → `undefined`; `let`/`const` → TDZ |