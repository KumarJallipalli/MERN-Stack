# JS V - Object Literals

---

## Object Literal

- Object Literal → Any collection (or) data-structure which is of type Object
    - Generally, an object literal is a comma-separated list of key–value pairs wrapped in curly braces `{}`.
    - Object Literals are used to store keyed collections & complex entities

## Object

- `Objects` are collection of properties & functions
- `Properties` → key - value pairs
- We create an Object in JS using Object Literals

<aside>
💡

i.e., Objects are collection of properties

Object Literals are names of the Objects.

NOTE:

- In General, `const` keyword is used to define object literals
</aside>

```jsx
let student = {
    name: "Aman",
    age: 18,
    marks: 95
};
/**
 * student - Object literal
 * name, age, marks - keys
 * "aman", 18. 95 - values
 * age: 18 -> key-value pair [property] 
 * 
 * Make sure that multiple key-value pairs are separated using ( , ) 
 */
```

Similar to arrays, Objects are also references

- i.e., it will store the address of the properties instead of properties itself

If we print objects just like arrays, It won’t follow any order → Objects are Unordered

- i.e., order is not important in Objects [but for arrays it is imp]
- Hence, there is no concept of indexing in objects
- Hence, we use keys to get the values in Objects

## How to get/access the values of an object literals

- There are 2 ways to access the values
    - `objLiteral[”key”]` [ Bracket Notation ]
    - `objLiteral.key` [ dot Notation ]

```jsx
let post = {
    userName : "KumarJallipalli",
    content: "How to get Web Deb Job",
    likes: 1000,
    reposts: 10,
    tags: ["jobs", "web development", "software developer"]
}

// This is WRONG
console.log(post[userName]);
//  This is Correct
console.log(post["userName"]);

// This is WRONG
console.log(post."userName");
// This is Correct
console.log(post.userName);
```

```jsx
// This is Correct
let userName = "content"
console.log(post[userName]);

// Here what happens, 
1. JS look for a variale userName
2. variale userName is found
3. value of userName is "content"
4. JS will search with "content" as key of Obj Literal post
5. post[userName] == post["content"]

// This is Correct
console.log(post.userName);
// Because, dot operator expects an Identifier [ Not a String ]
```

WHY..?

- When you do `post["userName"]`, you're asking:
    
    > "Give me the value of the property whose key is the string 'userName'."
    > 
- When you do `post[userName]` (without quotes), JavaScript thinks:
    
    > "Look for a variable named userName, and use its value to look up a property on post."
    > 
    - But there's **no variable** called `userName` declared anywhere in your code,
    - so it causes a `ReferenceError`,
    - or if the variable exists but has a different value, you'll get `undefined`.

<aside>
💡

NOTE:

- If we use `objLiteral[”key”]` to access any value
    - Pass the Key in String [ But NOT as Variable]
- If we use `objLiteral.key` to access any value
    - Pass the Key as variable [ But NOT as String ]
</aside>

## Conversions during accessing Obj Literal Values

```jsx
let obj = {
    1: 'a',
    2: 'b',
    null: 'c',
    true: 'd',
    undefined: 'e'
};
```

```jsx
let obj = {
    "1": 'a',
    "2": 'b',
    "null": 'c',
    "true": 'd',
    "undefined": 'e'
};
```

Here, JavaScript automatically **converts non-string keys** in object literals to **strings**

- i.e., why we don’t need to follow Identifier naming conventions while naming keys
- Hence, 1 & 2 are NOT numbers here, they are strings “1”, “2”
- similarly, null, true, undefines are not keywords, they are strings “null”, “true” & “undefined”

Similarly, `obj[ ]` → this way of getting values also converts to strings

- obj[1] → here it is not indexing, this is == obj[”1”]
- obj[true] == obj[”true”]

But this is not the case with the other method `obj.` 

- obj.1 → gives errors
- But obj.true → ‘d’

<aside>
💡

NOTE:

---

Bracket notation (`obj["key"]` or `obj[key]`) is **more flexible** and supports:

- Any string as a key
- Dynamic property access (using variables)
- Keys with special characters, spaces, or numbers
</aside>

## What **can and can't** be used in **dot notation ( vs ) bracket notation :**

- Allowed
    - Dot Notation:
        - You can use dot notation (`obj.key`) **only if the property name is a valid identifier**:
        - EXCEPTION
            - WKT, Reserved keywords are NOT used as Identifier Names
            - But, JS a**llows some reserved words** to be used as **property names** in dot notation.
    - Bracket Notation:
        - Always Works, when passed as String `obj["key"]`
        - EXEPTION:
            - If key is passed as Variable like in `obj[key]`,
            - Then, JS automatically converts Literals & reserved keywords to String
            - But, if key is a Variable, JS will search for Variable & throws error if not found

<aside>
💡

The major diff between those 2 ways of accessing the data is:

obj[ ] 

- converts keys to strings automatically
- It can take variables as keys

obj.

- cannot converts keys to strings automatically
- this can only take keys as keys
</aside>

## Add, Update & Delete

```jsx
const stud = {
    name: "pj",
    marks: 98,
    age: 19,
    city: "Hyderabad"
}
```

UPDATE (or) Add:

- `obj.key = update/Add_Value`
- stud.city = “Mumbai”
    - Here, city value will be updated as it is previously existing
- stud.country = “India”
    - This will add a new property to stud obj, as it was previously NOT existing

DELETE:

- `delete` keywords is used o delete a property from an object
- `delete obj.key;`
    - This returns Boolean

## Nested Objects

- Nested Objects → objects of objects (or) objects within Objects

```jsx
//Nested Objects
const classInfo = {
    Aman: {
        grade: 'A+',
        city: "pune"
    },
    Amit: {
        grade: 'A',
        city: "Bangalore"
    },
    Akash: {
        grade: 'O',
        city: "Mumbai"
    }
}
/**
 * classInfo -> Nested Object
 *      - We can add, update & delete the propeties & sub-properties [nested obj prop]
 */

classInfo.Aman //prints the Aman Obj
classInfo.Aman.city // "pune" -> in this way we can access the nested obj's values
classInfo.Amit.city = "Jaipur" // updates the value of sub-obj
delete classInfo.Akash.city // deletes the city property
```

## Array of Objects

```jsx
// Array of Objects
const arr = [ 
		{name: "Aman", city: "Pune"}, 
		{name: "Buntu", city: "kolkata", grade: 'A'}, 
		{name: "Indu", city: "indus"} 
];

arr[0] // gets the 1st obj
arr[1].city = "calcutta" // updates the value of obj at ind 1
arr[2] = "Updated the Obj with string"
```

## Math Object

There are so many properties & Methods associated with Math Object.

Some of mostly used are:

- `Math.floor(n)` → gives the nearest smallest int [ Be careful with -ve values ]
- `Math.ceil(n)` → gives the nearest largest int [ Be careful with -ve values ]
- `Math.random()` → gives the random number b/w 0 & 1 [excluding 1] i.e., Decimal numbers
- `Math.abs()` → Makes any number +ve

```jsx
 Generate Random Integers From 1 to 10
 -------------------------------------

        Step1 : let num = Math. random( );      // 0.46747741318127045

        Step2 : num = num * 10;                 // 4.674774131812704

        Step3 : num = Math. floor(num);         // 4

        Step4 : num = num + 1;                  // 5
        
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
```

```jsx
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
```

```jsx
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
```