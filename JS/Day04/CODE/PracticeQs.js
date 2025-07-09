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