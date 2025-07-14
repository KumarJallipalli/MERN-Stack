// Finding the maximun ele in an array using reduce( )
let arr1 = [17, 35, 8, 27, 6, 10, 13];

let maxElement = arr1.reduce((max, ele) => {
    if (ele > max) {
        return ele;
    } else {
        return max;
    }
});
console.log(maxElement);


// Check if all numbers in our array are multiples of 10 or not.
console.log(arr1.every((ele) => {return ele%10 == 0}));

// Create a function to find the min number in an array.
let minEle = arr1.reduce((min, ele) => {
    if (ele < min) {
        return ele;
    } else {
        return min;
    }
})
console.log(minEle);


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