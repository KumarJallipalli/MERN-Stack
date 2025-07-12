// What will be the output?
let greet = "hello";            // Global Scope

function changeGreet() {
    let greet = "namaste";      // Function Scope
    console. log(greet);
    function innerGreen() {
        console. log(greet);    // Lexical Scope
    }
}
console. log(greet);    // hello
changeGreet();          // namaste


//taking onr (or) more functions as an argumets
function multipleGreet (func, n) {
    for (let i=0; i<n; i++) {
        func();
    }
}
let greet2 = function() {
    console.log("Hello");
}

multipleGreet(greet2, 3); //prints Hello 3 times
/**
 *  - Here, multipleGreet -> a HOF (as it takes a function as an argument)
 *  - greet -> Not a function but a variable having function as a Value/Expression
*/


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

console.log(typeof "kmj");
console.log(typeof ["kmj"]);
console.log(typeof {a:123});