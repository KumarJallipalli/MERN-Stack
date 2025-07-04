# JS I [ 02/07/2025 ]

---

HTML - Markup Language [ `.html` ]

CSS - Styling Language [ `.css` ]

JS - Programming Language [ `.js` ]

<aside>
💡 JS adds functionality to web pages

</aside>

## Console

- [ Browser ] Console is a area where we can write & implement our JS code
- Code written/executed in console area is temporary, i.e., it will be reset when we reload webpage [ i.e., why we use it for practice ]
- ctrl + ‘L’ → Clears the console window
- ctrl + ‘+’ → Increases font size
- Console uses/works on REPL
    - REPL → Read-Evaluate-Print-Loop
    - It is a JS Environment used to execute Single Expressions only

## Variable

- A variable is simply “the name of a Memory location”
- Generally, Variables are the named containers which stores the data.
    - Actually, The name of this container which stores the data is termed as variable.
    - And the data which is being stored inside the container is the value [ of that variable ]

### Identifiers

- Identifier → is the unique name used for naming a variable
- There are some rules in writing these Identifier names

### Rules for Variable Names (or) Identifiers

- Names can Contains letters, digits, `_`, & `$` only
- Must start with a letter, `_`, or `$` only
    - Cannot start with a number
- Are case-sensitive (`myVar` ≠ `myvar`)
- Cannot NOT use reserved words (like `for`, `if`, `class`) for Variable Names

## Data Types

- We have data in the form of text, true/false, numbers [int & decimal ] & so on..
- That means data which needs to be stored in a variable is of many forms
    - Hence, this data is been segregated into multiple types called “Data Types”
- Data Types in JS are:
    - number
    - string
    - Boolean
    - null
    - undefined
    - bigint
    - symbol

<aside>
💡

NOTE:

---

- “ typeof ” is an operator which gives the data type of any data.
- JS is Dynamically Typed Language
    - i.e., JS detects the type automatically at Runtime [ based on the value ]
    - Hence, we **don't declare the type** of a variable.
- In **statically typed** languages, type is checked at compile time [ Seen in TypeScript ]
</aside>

### Numbers

- It contains all the Positive & Negative numbers [ including Integers & Decimals (-2.96 & 2.96 ) ]
- This numbers will have a limit in the memory storage,
    - if it exceeds the limit then it will print the nearest number

### Operations

- a + b = c
    - `a` → operand || `+` → addition operator
    - Operand → anything on which the operations are being performed
    - Operator → the thing which performs the operation
- a + b → addition operation
- a - b → subtraction
- a * b → multiplication
- a / b → division [ It actually gives the ans instead of quotient in java ]
- a % b → modulo [ remainder operator → it gives the remainder ]
- a**b → exponentiation [ power operator ]

### NaN

- NaN is a value representing Not-A-Number. [ Invalid Number ]
- It is a global property.
- Ex: 0/0 || NaN + 1 || NaN * 3 || NaN * NaN

<aside>
💡

NOTE:

---

- “ type of “ NaN → number
- 9 / 0 → infinity  ||  0 / 0 → NaN
</aside>

### Operator Precedence

- It represents the general order of solving an expression
- This is BODMAS of expressions in programming language

<aside>
💡 `( )` >>  `**` [R → L]  >> `*, / , %` [ L → R ] >> `+, -` [ L → R ]

</aside>

- Evaluate the following:
    - ( 2 + 1 ) * 3
    - 3 / 1 + 2 ** 2
    - 4 + 1 * 6 / 2

<aside>
💡 keywords → **predefined reserved words in a programming language with a specific use**.

</aside>

### How to declare & initialize variables..?

- we use “ var “ keyword to declare variables as of old syntax
- But in 2015, “ let “ keyword is introduced to tackle the re-declaration problem
    - Hence we will use “ let “ keyword to declare variables in JS
- `let a;` → var declaration
- `a = 10;` → assigning value to variable
- `let a = 10;` initializing var [ doing both the steps in one go ]

## let (vs) var (vs) const

- If we declare a variable using
    - const → re-assignment & re-declaration are NOT Possible && Must be initialized
    - let → re-assignment is Possible BUT re-declaration is NOT Possible [ Use this ]
    - var → Both re-assignment & re-declaration are Possible [ Old Syntax ]

| Keyword | Scope | Re-Assignable | Re-Declarable | Hoisted |
| --- | --- | --- | --- | --- |
| `var` | Function | ✅ Yes | ✅ Yes | ✅ Yes [ Weirdly ] |
| `let` | Block | ✅ Yes | ❌ No | ❌ No |
| `const` | Block | ❌ No | ❌ No | ❌ No |

### Assignment Operators

- `a = 10;` → here “ = “ is assignment operator, It assigns RHS Value to LHS Variable
- `a += 1;` is same as `a = a + 1`
- `a -= 1;` is same as `a = a - 1`
- `a *= 3;` is same as `a = a * 3`
- `a /= 5;` is same as `a = a / 5`

<aside>
💡 Binary Operators → Operators which requires 2 Operands to perform an Operation
Ex: all the above operators

Unary Operator → Operators which requires only 1 Operand to perform an Operation
Ex: increment/decrement operators [ a++, a— & !]

</aside>

### Post & Pre Increment

- `++a` → 1st evaluates the expression & then assigns the value
- `a++` → 1st assigns the value & then evaluates the expression later
    - Ex: `let a = 5;`
    - `let sum = (2 + 3 * 5 ) + ++a;` → ans = 23 [ since a = 6 due to ++a ]
    - `let sum = (2 + 3 * 5 ) + a++;` → ans = 22 [ since a = 5 only due to a++ && a = 6 after execution of this statement only]

### Practice Q

What is the value of each variable in each line of code

```jsx
let num = 5;
let newnum = num++;
newnum = ++num;
```

### Naming Conventions

Naming Convention → Way/Convention of writing Identifiers [ Variable Names ]

There are 3 ways of writing the identifiers.

- camelCasing → except 1st word all remaining word’s 1st letter is capital
- PascalCasing → 1st letter from all the word’s are capitalized
- snake_casing → all the words are separated using “underscore”

<aside>
💡 JS uses CamelCasing [ even Java & C++ ]
python uses snake_casing

</aside>

### Boolean

- Boolean represents a truth value → true (or) false [ remember these are small cased ]
- Ex: `let isAdult = true;`

## NOTE:

- **JavaScript is a dynamically typed language**,
    - which means that data types of variables are determined by the value they hold at runtime
    - Hence, We can simply change the type of the variable by just changing the value of the variable
- But many of the programming languages doesn’t support this.
    - Like,
    - **Java is statically-typed**, so it expects its variables to be declared before they can be assigned values.
        - And the type is checked at compile time [ by Compiler ]
        - Hence, data type is to be explicitly mentioned during the variable declaration
    

## What is TypeScript..?

- WKT, JS is dynamically-typed language
- TypeScript is JS with Statically-typed

### Practice Qs

Find the errors in the following code

```jsx
let 1age = 19;
let 2age = 25;

let marks = 75;
let isPass = True;

let ispass = 'true';
```

## Strings

- `Strings`  are sequence of characters
- We can use either single or double quotes to represent sequence of characters in JS
    - But in general as a practice, single characters is represented in single quotes & sequence of characters in double quotes

<aside>
💡 If we want to display something in double quotes, we can define the string using single quotes & vice versa

</aside>

### String Indices

- Index == position [ in programming languages ]
- JS is 0 based indexing language
- `length`  is a string property which gives us the length of the string
- we can also write `"SivaKumar".length` or `"SIvaKumar"[2]` , These will give the output as normal
- NEGATIVE indexing also works in JS

<aside>
💡 if `stringName[n]` , here if n > length of the string then we will get “undefined” but NOT Error

</aside>

## Concatenation

- concatenation == adding/joining strings together
- `+`  is used to concatenate strings in JS
- Ex: “Tony Stark” + “ “ + “is an Avenger” = “Tony Stark is an Avenger”

<aside>
💡 If we concatenate a string with a number, It will become a string as well
Ex: `"Tony"` + `1` == `"Tony1"`

</aside>

## Null & Undefined

`Undefined` → Any variable which has NOT been assigned any value, that var type is “Undefined”

`null` → Any variable which has the value assigned as “null”

- `null` value represents the intentional absence of value, so that we can assign the actual value later.
- `null` is a keyword used to explicitly assign value to a var, so that it becomes of type “null”

```jsx
let a;
a;           //undefined
type of a;   //undefined

let b = null;
b;           //null
type of b;   //object
```

## Practice Q’s

```jsx
/**
 *  Qs. Declare your name as a string and print its length in JS.

    Qs. Declare your first name as a string and print its first character.

    Qs. Declare your first name as a string and print its last character.

    Qs. What is output of following code :

    - "apnacollege"+123

    Qs. What are lengths of an empty string & a string with a single space?
*/
let name = "Siva Jallipalli";
console.log(name.length);

let firstName = "Siva";
console.log(firstName[0]);
console.log(firstName[firstName.length - 1]);
console.log(firstName[-1]);

console.log("apnacollege" + 123);

console.log(''.length)
console.log(' '.length);
```