# JS VIII - Array Methods

---

## Callback

- Higher Order Function is a function which takes another function as an argument (or) returns a function
- A callback is a function passed as an argument to another function [ so as to be executed later ]
    - This technique allows a function to call another function

<aside>
💡 When you pass a function as an argument, remember not to use parenthesis.

</aside>

## forEach( )

- The `forEach()` method execute the **callback function** **once for each element** in an array, **in order**
    - It **does not return a new array** (unlike `map()` or `filter()`).
    - It **modifies nothing by default**, [ but you can mutate the array inside the callback ]
- syntax → `arr.forEach( function(element, index) { } )`
    - It is a higher order function
- The `forEach()` method is Older Syntax [ Now, we use for in (or) for of )

```jsx
let sum = 0;
const numbers = [65, 44, , 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}
```

## map( )

- `map()` → **Transforms** Each Element
- `map()` → Returns a **new array** by executing function on **each element** of the original array.
    - Original array stays the same.
    - A new array is returned with the transformed values.

## filter( )

- `filter()` → **Selects** Matching Elements
- `filter()` → Creates a **new array** with only the elements that **pass a test** (i.e., return `true` in the callback function).
    - Returns a **new array**; the original remains unchanged.
    - Keeps only the elements that match the condition.

```jsx
const nums = [1, 2, 3, 4, 5, 6];

const result = nums
  .filter(n => n % 2 === 0)       // Keep even numbers [2, 4, 6]
  .map(n => n * 10);              // Multiply each by 10 => [20, 40, 60]

console.log(result); // [20, 40, 60]
```

<aside>
💡

NOTE:

---

All the above 3 methods

- **cannot be broken** or exited early (like a `for` loop using `break` or `return`).
- **Skips empty slots** (like `[1, , 3]` will skip the missing element at index 1).
</aside>

## every( )

- `every()` — Are **all** elements true?
- `every()` → Returns `true` **only if every element** in the array passes the test in the callback function
    - If **any** element fails the condition, it immediately returns `false`.
- `every()` is a Boolean function [ & callback is also a Boolean function ]
- This is similar to logical AND

## some( )

- `some()` — Is **at least one** element true?
- `some()` → Returns `true` **if at least one element** in the array passes the test in the callback function
    - If All the elements doesn’t match the condition, it returns `false`.
- `some()` is a Boolean function [ & callback is also a Boolean function ]
- it works as a logical OR operator

```jsx
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach(el => {
    console.log(el);
});

let square = arr1.map(el => { return el*el; });

let even = arr1.filter(el => {return el%2 == 0;});

[1, 2, 3, 4].every(el => {return el%2 == 0;});  // returns false
[2, 4, 6].every(el => {return el%2 == 0;});  // returns true

[1, 2, 3, 4].some(el => {return el%2 == 0;});  // returns true
[1, 3, 5].every(el => {return el%2 == 0;});  // returns false
```

## 📊 Comparison Table

| Feature | `every()` | `some()` |
| --- | --- | --- |
| Return type | `true` if **all** pass | `true` if **at least one** passes |
| Stops early? | ✅ Yes, on first `false` | ✅ Yes, on first `true` |
| Use case | "Are **all** items valid?" | "Is **any** item valid?" |
| Example | All numbers > 0? | Any number < 0? |

## reduce( )

- It reduces the array into a single value
- syntax → `arr.reduce( reducer fn with 2 para ( accumulator, element ) );`
    - here, accumulator will store the result of previous iteration
    - And returns the value of the last iteration
    - We can provide starting/initial value for accumulator
        - Syntax → `array.reduce( (accumulator, ele, index, array) => { }, initialValue)`
        - If you skip the `initialValue`, `reduce()` uses the **first array element as the initial accumulator**, and starts from the **second element**.

```jsx

let arr2 = [1, 2, 3, 4, 5];

let sumOfElements = arr2.reduce( (sum, el) => {
		console.log(sum);    // 1, 3, 6, 10
    return sum+el;
});
console.log(sumOfElements);     // returns 15
/**
 *  DRY RUN: [ uses the **first array element as the initial accumulator**, and starts from the **second element ]**
 *      1. sum = 1,     el = 2      sum+el = 3       will be stored in sum => sum = 3
 *      2. sum = 3,     el = 3      sum+el = 6       will be stored in sum => sum = 6
 *      3. sum = 6,     el = 4      sum+el = 10      will be stored in sum => sum = 10
 *      4. sum = 10,    el = 5      sum+el = 15      will be stored in sum => sum = 15
*/
```

```jsx
// Finding the maximun ele in an array using reduce( )
let arr3 = [1, 5, 8, 27, 6, 10, 13];

let max = arr3.reduce( (max, el) => {
    if(max < el)
        return el;
    else 
        return max;     // this is V.IMP step
} );
console.log(max);
/**
 *  - If you miss the V.IMP step mentioned in the code
 *  - WKT, reduce fn will always store the result of previous iteration in the accumulator [max]
 *  - if we miss that V.IMP step, then in the scenario where max > el -> it will return undefined & store in max
 *  - Hence, we will be getting undefined as O/P
*/
```

<aside>
💡

NOTE:

---

- In case of `map()`, If we do not use return → An array with undefined as elements `[ undefined, undefined,..]` is returned
- In case of `filter()`, If we do not use return → An Empty array `[]` is returned
- In case of `every()`, If we do not use return → `false` is returned
- In case of `some()`, If we do not use return → `false` is returned
- In case of `reduce()`, If we do not use return → `undefined` is returned
</aside>

## Default parameters

- `Default parameters` → Assigning default values to the parameters during function definition itself
    - These default parameter values will only taken when there are no arguments passed during function calling
- In this way, we can get desired outcome even if we miss the arguments

```jsx
function sum (a , b = 5) {
    return a+b;
}
comsole.log(sum(2, 7));     // O/P = 9
comsole.log(sum(2));     // O/P = 7

function sum (a = 1, b) {
    return a+b;
}

sun(2)      // NaN

//But, this is wrong & throws exception
sum(,2);    // Error : saying token " , " not expected

// this is the reason, always prefer to assign values to default parameters which are at last
```

## spread

- `spread` → split/spread an Iterable into multiple individual Elements
    - **Purpose**: Spread **an array or object** into individual elements.
- syntax → `...iterable_name`

```jsx
// WKT, Math.min() will take any number of values as arguments & returns the min of those
Math.min(5, 2, 1, 4, 9, -10, 78, 5, 54);    // O/P = -10

// If we want to find out the min of array elements, then
Math.min(arr[0], arr[1], arr[2], arr[3]);   

// what if we have 100's of elements in an array, then we need to use loop right. Instead we can use spread [ Shorter & simpler ]
Math.min(...arr); 

// similarly, spread is used in multiple ways like
console.log(...arr)  // to print individual elements, instead of forEach or for loop

console.log(arr1);      // [ 1, 2, 3, 4, 5 ]
console.log(...arr1);   // 1 2 3 4 5
console.log(..."arr1");   // q r r 1
```

```jsx
// Spread can also be used on strings or objects & any other iterables
console.log(..."Apna College");

let newString = [..."ApnaCollege"];

// To crate/copy a new array from existing
let newArr = [...arr, ...arr1];   // adds 2 existing arrays into one new array

let newArr1 = arr1;
let newArr2 = [...arr1];

console.log(newArr1 === arr1);      // true
console.log(newArr2 === arr1);      // false
```

## Spread in Object literals

```jsx
let obj1 = {
    email: "apnacollege@gmail.com",
    course: "Delta Batch"
}

// spread this obj literal to make a copy
let objCopy = {...obj1, fee: 7000};

let newObj1 = obj1;
let newObj2 = {...obj1};

console.log(newObj1 === obj1);      // true
console.log(newObj2 === obj1);      // false

// spread an array to object
let obj2 = {...arr};        
/**
 *  - here arr indices will be stored as keys & Elements as values 
 *  - similarly with strings also
*/
```

<aside>
💡

`arguments`:

- `arguments` is a special **array-like object** available inside **regular functions** (not arrow functions)
- `arguments` holds all the arguments passed to the function, regardless of the function's parameter list.
- It looks like an array (has indexes and length) but is **not** a true array
    - You can access arguments like `arguments[0]`, `arguments[1]`, etc.
    - Use `arguments.length` to know how many arguments were passed
    - Not a real array → no array methods like `map`, `forEach`, etc.
- `arguments` does **not** exist in arrow functions

```jsx
function showArguments() {
  console.log(arguments);
}

showArguments(1, 'hello', true);    // Output: [Arguments] { '0': 1, '1': 'hello', '2': true }
showArguments(1, 2, 3);             // Output: [Arguments] { '0': 1, '1': 2, '2': 3 }
```

- It is Old & Cannot use Array Methods → Hence `...rest` is introduced & used
</aside>

## rest

- It is pure opposite of `spread`
- `rest` → Allows a function to take an indefinite number of arguments & bundle them into an array (or) Object
    - **Purpose**: Collect **multiple elements** into a single array or object.
        - rest as array is seen in function arguments/parameters
        - rest as Obj is seen in Obj de-structuring
- syntax → `...args` [same as spread]
- In Function Parameters, `...rest` is an Actual Array
    - Hence, we can use All Array methods like `map`, `forEach`, etc.
    - Works in **both regular and arrow functions**
    - Captures only **remaining** `args` (after named ones)

```jsx

        - Math.min() (or) Math.max() uses "arguments" internally to take indefinite values & perform
        - this "arguments" will be avaiable for all the functions & bundles them into a collection
        - As "arguments" is a collection, hence we cannot perform all the array methods
				- Hence, this "rest" is introduced

function min (msg, ...args) {
		console.log(msg);
		console.log(args.length);    // Captures only **remaining** args (after named ones)
    return args.reduce( (min, el) => {
        if (min > el)
            return el;
        else 
            return min;
    } );
}

console.log(min("Hello", 8, 5, 10, 2, 7, 6)); 
/**
 *  - Here, all the arguments are bundled to form an array
 *  - now "args" -> is the name of the array
 *  - We can perform all the methods of an array on this args
*/
```

### 📌 Summary:

| Syntax | Role | Example |
| --- | --- | --- |
| `...` | **Rest** | `function(...args) {}` → Collect items |
| `...` | **Spread** | `func(...array)` → Spread items |

## De-structuring

- `De-structuring` → **unpack values** from arrays ( or ) **extract properties** from objects into **distinct variables**
    - Storing values of an array/object into multiple variables
    - here we use square braces [ ] for arrays
    - we use curly braces { } for objects

Array De-Structuring

```jsx
let arr5 = ["Ajay", "Bijay", "Vijay", "Nijay", "Kijay", "Tijay", "Dijay"];

// let winner = arr5[0];
// let runner = arr5[1];
// let seconRunner = arr5[2];

// But instead of writing above code we can use like this
let [winner, runner, seconRunner, others] = arr5;        // "Ajay", "Bijay", "Vijay", "Nijay",
let [winner, runner, seconRunner, ...others] = arr5;   // "Ajay", "Bijay", "Vijay", "Nijay", "Kijay", "Tijay", "Dijay"

/**
 *  - 1st 3 variables will have the values of 1st 3 elements
 *  - the last variable "others" [ in 2nd log ] -> is an array formed using rest.
 *  - others -> will have all the remaining elements as a new array
*/
```

Object De-Structuring

```jsx
let obj3 = {
    name: "karan",
    class: 10,
    age: 16,
    subjects: ["hindi", "Telugu", "English", "Maths", "Social", "Science"],
    username: "karan@gmail.com",
    password: "karan@123"
};

let username = obj3.username;
let password= obj3.password;
// Instead of defining as above, we can define like this as well

// 1. Using the key names -> searches for the key in the obj & returns the mapped value
let {username, password} = obj3;        // now, username & password are new variables with values

// 2. renaming the key names to our desired names -> we can use our desired names instead of keys
let {username: user, password: pwd} = obj3;  // now, user & pwd are created with values

// giving the default values -> if there is no key present in obj, then we can create a new var by assigning the value
let {city = "pune", age: vayasu = 14} = obj3;   // V.IMP
/**
 *  - here, city = pune [ since there is no key as city in obj]
 *  - vayasu = 16, since there already exists a key with age [but we renamed it to vayasu] it will take obj value
*/
```

<aside>
💡

NOTE:

---

- Be careful with default assigned values during de-structuring in objects
- Be careful with undefined nested objects — it will throw an error if not handled
    - Hence, use `{}` as default value for undefined nested key [ as safety ]
    - ex: `const { theme: {color: themeColor = 'light'} = {} } = config;`
</aside>

Additional Examples

```jsx
// Destructuring Nested Objects
const person = {
  name: 'Eve',
  address: {
    city: 'London',
    zip: 12345
  }
};

const { address: { city, zip } } = person;
console.log(city);      // London
console.log(zip);       // London
/**
 * console.log(address);   // Error [ NOT defined ]
 *      - Here, we used address to point out to nested object
 *      - But in actual, address is Not defined as a Variable
 *      - Hence Error
 * NOTE:
 *   You cannot access address itself anymore unless you also destructure it
*/

// Nested + Renaming + Default
const config = {
  theme: {
    color: 'dark'
  }
};

const { theme: {color: themeColor = 'light'} = {} } = config;
// theme = {} --> default for `theme` if it’s undefined [ NOT to throw error ]

console.log(themeColor); // dark
```

```jsx
// Nested + Renaming + Default
const config = {};

const { theme: {color: themeColor = 'light'} = {}, theme: template } = config;
// theme = {} --> default for `theme` if it’s undefined [ NOT to throw error ]

console.log(themeColor);    // light
console.log(template);      // undefined

// Nested + Renaming + Default
const config = {};

const { 
		theme: {color: themeColor = 'light'} = {}, 
		theme: template = {color: "dark"} 
} = config;
// theme = {} --> default for `theme` if it’s undefined [ NOT to throw error ]

console.log(themeColor);    // light
console.log(template);      // { color: 'dark' }
```

## Assignment

```jsx
/**
    Qs1. Square and sum the array elements using the arrow function and then find the
    average of the array.

    Qs2. Create a new array using the map function whose each element is equal to the
    original element plus 5.

    Qs3. Create a new array whose elements are in uppercase of words present in the
    original array.

    Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
    variable number of arguments. The function should return a new array with the original
    array values and all of the additional arguments doubled.

    Qs5. Write a function called mergeObjects that accepts two objects and returns a new
    object which contains all the keys and values of the first object and second object.
*/

arr1 = [17, 35, 8, 27, 6, 10, 13];

// Q1
let resQ1 = arr1.map((ele) => {return ele*ele}).reduce((sum, ele) => {return sum+ele});
console.log("Q1", resQ1);
console.log("Q1 Avg:", resQ1/arr1.length);

// Q2
let resQ2 = arr1.map(ele => ele+5);
console.log("Q2", resQ2);

// Q3
let strArr = ["Hello", "Namaste", "Hii..."];
let resQ3 = strArr.map(ele => ele.toUpperCase());
console.log("Q3", resQ3);

// Q4
function doubleAndReturnArgs (arr, ...args) {
    let doubledArgs = args.map(ele => {return ele*2});
    return [...arr, ...doubledArgs];
}
console.log("Q4", doubleAndReturnArgs(arr1, 10, 20, 30, 40, 50));

// Q5
let obj1 = {
    city: "London",
    country: "UK"
};
let obj2 = {
    place: "New York",
    origin: "USA"
};

function mergeObjects (obj1, obj2) {
    return {...obj1, ...obj2};
};
console.log("Q5", mergeObjects(obj1, obj2));
```