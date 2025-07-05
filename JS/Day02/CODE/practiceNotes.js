// Multi Line String using Template Literal 
let temp = `Hi,
This is Multiline String,
        I don't know what is the spacing followed in here `;

console.log("Hello There...!");
console.log(temp);


console.log(null == undefined);
console.log(typeof null);
console.log(typeof undefined);


console.log([] == false)
console.log([] == ![])


console.log('' == false)
console.log(' ' == false)
console.log('' == " ")


console.log( 0 == " ")
console.log( 0 == '0')
console.log(null + 1)


console.log([] + [])
console.log(typeof ([] + []))
console.log([] + {})


console.log(typeof String(false))
console.log(toString(false))


/**
 * ## Why this is happening..?
        - 0 == ‘’ → true
        - 0 == ’ ‘ → true
        - 0 == ‘0’ → true
*/
