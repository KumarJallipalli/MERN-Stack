//  How to take input in NodeJS
// Step-1: Import the readline module.
import readline from 'node:readline';

// Step-2: Create an interface for input/output.
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// This sets up an interface to read from standard input (process.stdin) 
// and write to standard output (process.stdout).

// Step-3: Prompt for input and handle the response:
// rl.question('Enter your name: ', (name) => {
//     // The 'name' variable now holds the user's input
//     console.log(`Hello, ${name}!`);

//     // Close the readline interface when done
//     rl.close();
// });



// console.log(this);
// console.log(globalThis);
// console.log(global);
// console.log(global === globalThis);

// let name = globalThis.prompt("Give me a Name: ")
// console.log(name)


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

hello("London");
namaste("London");
wish("London");
console.log(cube(5));


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
console.log(globalThis);