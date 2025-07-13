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