// Create a Function to roll a Dice [ which displays 1 to 6 ]
function diceroll () {
    let roll = Math.floor(Math.random()*6) + 1;
    console.log(roll);
}

diceroll();

// Create a function that gives us average of 3 numbers
function average (a, b, c) {
    let avg = ( a + b + c )/3
    console.log(avg);
}

average(1, 2, 3);               // 2
console.log(average);           // [Function: average]
console.log(typeof average);    // function
console.log(average(2, 3, 4));  // Undefined


// Create a Function that prints multiplication table of a number
function mulTable (n) {
    for (let i=1; i<=10; i++) {
        console.log(`${n} X ${i} = ${n*i}`);
    }
}
mulTable(7);

// Create a Function that returns sum of numbers fro 1 to n
function sumOfNumbers (n) {
    let sum = 0;

    for (let i=1; i<=n; i++) {
        sum += i;
    }

    return sum;
}
console.log(sumOfNumbers(10));


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


//  Lexical Scope
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
a = 1000;
b = 2000;
innerFunc(); // Logs 300


// Closure with hoisting
function outer1() {
  console.log(x); // undefined (due to hoisting)
  var x = 5;

  return function inner1() {
    console.log(x); // 5
  };
}

const innerFunc1 = outer1();
innerFunc1();


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