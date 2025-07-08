/**
 *  Qs. For the Give String :
            let msg = "help!";
        Trim it & convert it to uppercase.

    Qs. For the String -> let name = "ApnaCollege", predict the output for following :

                name.slice(4, 9)

                name.indexOf("na")

                name.replace("Apna","Our")

    Qs. Separate the "College" part in above string & replace 'l' with 't' in it.
*/

let msg = "help!";
console.log(msg.trim().toUpperCase());

let clgName = "ApnaCollege";
console.log(clgName.slice(4, 9));
console.log(clgName.indexOf("na"));
console.log(clgName.replace("Apna","Our"));

console.log(clgName.slice(4).replace('l','t'));


/**
 * 
    Qs. For the given start state of an array, change it to final form using methods.

          start : ['january', 'july', 'march', 'august' ]

          final : ['july', 'june' , 'march', 'august' ]
*/
let months = ['january', 'july', 'march', 'august' ];
months.shift();
console.log(months);

months.pop();
months.pop();
console.log(months);

months.push('june', 'march', 'august');
console.log(months)

// or

months = ['january', 'july', 'march', 'august' ];

months.shift();
months.shift();
console.log(months);

months.unshift('july', 'june');
console.log(months)


/**
    Qs. For the given start state of an array, change it to final form using splice.

            start : ['january', 'july', 'march', 'august' ]

            final : ['july', 'june' , 'march' , 'august' ]

    Qs. Return the index of the "javascript" from the given array, if it was reversed.

            ['c', 'c++', 'html', 'javascript' , 'python' , 'java' , 'c#' , 'sql' ]
*/
let start = ['january', 'july', 'march', 'august' ];
start.splice(0, 2, 'july', 'june');
console.log(start);

let lang = ['c', 'c++', 'html', 'javascript' , 'python' , 'java' , 'c#' , 'sql' ];
console.log(lang.reverse().indexOf('javascript'));


/**
 *  Qs. Create a nested array to show the following tic-tac-toe game state.
 *                  X |   | O
 *                 ----------
 *                    | X | 
 *                 ----------
 *                  O |   | X
*/
let game = [['X', null , 'O'], [null, 'X', null], ['O', null, 'X']];
console.log(game);
game[0][1] = 'O'
console.log(game);


/**
    Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
    positive number].
            For example: for array [7, 9, 0, -2] and n=3
            Print, [7, 9, 0]

    Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
    positive number].
            For example: for array [7, 9, 0, -2] and n=3
            Print, [9, 0, -2]

    Qs3. Write a JavaScript program to check whether a string is blank or not.

    Qs4. Write a JavaScript program to test whether the character at the given (character)
    index is lower case.

    Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

    Qs6. Write a JavaScript program to check if an element exists in an array or not.
*/


let arrQ = [7, 9, 0, -2];
let n = 3

// Q1
    // let newArr = arrQ.reverse().slice(arrQ.length-n).reverse();
    // console.log(newArr);
    // console.log(arrQ);
console.log(arrQ.slice(0, n))

// Q2
console.log(arrQ.slice(-n));

// Q3
let strQ = '   io oi    ';
if (strQ.length === 0) {
    console.log("String is EMPTY");
} else {
    console.log("String is NOT-EMPTY");
}

console.log('Z'.charCodeAt(0));

// Q4
let ind = 2;

    // if (strQ.charCodeAt(ind) >= 97 && strQ.charCodeAt(ind) <= 122) {
    //     console.log("character at the given index is lower case.")
    // } else {
    //     console.log("character at the given index is NOT a lower case.")
    // }
if (strQ[ind] === strQ[ind].toLowerCase) {
    console.log("character at the given index is lower case.")
} else {
    console.log("character at the given index is NOT a lower case.")
}

// Q5
console.log(strQ.trim());

// Q6
let item = arrQ[0];
console.log(arrQ.includes(item));