// Value of Avg
let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math)/3;
console.log(avg)

// What is the value of each variable in each line of code
let num = 5;
let newnum = num++;     // newnum = 5   && num = 6
newnum = ++num;         // newnum = 7   && num = 7


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