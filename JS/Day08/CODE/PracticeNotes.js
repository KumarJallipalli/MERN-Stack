
let arr1 = [1, 2, 3, 4, 5];

let sumOfElements = arr1.reduce( (sum, el) => {
		console.log(sum);    // 1, 3, 6, 10
    return sum+el;
});
// console.log(sumOfElements); 


let res = arr1.reduce((res, ele) => {res*ele})
console.log(res);

console.log(arr1);      // [ 1, 2, 3, 4, 5 ]
console.log(...arr1);   // 1 2 3 4 5
console.log(..."arr1");   // q r r 1

let newArr1 = arr1;
let newArr2 = [...arr1];

console.log(newArr1 === arr1);      // true
console.log(newArr2 === arr1);      // false

let obj1 = {
    1: 1,
    2: 2,
    3: 3
};
let newObj1 = obj1;
let newObj2 = {...obj1};

console.log(newObj1 === obj1);      // true
console.log(newObj2 === obj1);      // false


function showArguments() {
  console.log(arguments);
}

showArguments(1, 'hello', true);    // Output: [Arguments] { '0': 1, '1': 'hello', '2': true }
showArguments(1, 2, 3);             // Output: [Arguments] { '0': 1, '1': 2, '2': 3 }

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
 *      - You cannot access address itself anymore unless you also destructure it.
*/


// Nested + Renaming + Default
const config = {};

const { theme: {color: themeColor = 'light'} = {}, theme: template = {color: "dark"} } = config;
// theme = {} --> default for `theme` if it’s undefined [ NOT to throw error ]

console.log(themeColor);    // light
console.log(template);      // { color: 'dark' }
