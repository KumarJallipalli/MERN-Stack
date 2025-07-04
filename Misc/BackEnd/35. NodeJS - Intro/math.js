// module.exports in NOde.js

/**
 * - `module` is a global object in each Node.js file
    - This `module` has a property called `exports` which is an Empty Obj by default
    - `exports` is a property of module Obj which holds the exported values and functions from that module.
    - Declaring a `module.exports` in a file specifies the values to be exported from that file.
    - these exported values can be imported in another mdoule/file with the `require` global method.
        - `require()` → A built-in function to include/import external modules
        - When `require()` fn is excuted/invoked/called with the file path as the only argument, then it will undergo following steps\
            1. Resolving and Loading → Finds the file/module & loads the file/module
            2. Wrapping → makes the file, private or local scope
            3. Execution → executes the file
            4. Returning Exports → returns from module.exports
            5. Caching → caches the results after executing the file, so as to return the same for subsequent module requests
        - 3rd step is the reason, that the imported file will also gets execued when we use `require()`
*/

const sum = (a, b) => {return a+b};
const mul = (a, b) => a*b;
const pi = 3.14
const g = 9.8;

/**
 * By default, exports is a property of module Obj which holds an Empty Obj. But we have overwritten it's value with value=55
 *  - i.e., export property which is an Epty Obj by default is being overwritten with "55"
 *  - Now, exports is property which contains a number [Not an Object]
*/
module.exports = 55;
console.log(module.exports);

/**
 *  - Now we have overwriiten the exports value with a string => exports is now a string
*/
module.exports = "Hello World"
console.log(module.exports);

/**
 *  - Now we have overwriiten the exports with an Array => exports is now an Array
*/
module.exports = [1, 2, 3, 4]
console.log(module.exports);

/**
 *  - So, We have exports, which is a property of "module" Obj which holds an array & exported it
 *  - Now this exported value/array can be imported in another file [in this case script.js] using a require() fn
*/


/**
 * Different ways to export
*/

// 1. using "module.exports" to define the exporting values (or) functions in a single go
module.exports = {
    sum : sum,
    mul: mul,
    pi: pi,
    g: g
}

// 2. using module.exports while defining the values (or) functions itself
module.exports.div = (a,b) => a/b; 
module.exports.e = 3.12; 

// - But follow any one of the convention in the same file, else it will override or concatinate export values

/**
 *  NOTE:
 *      - This way of using "module.exports.div" during the definition itself only works when the exports is an Obj (or) array
 *      - We can use "exports.prop_name" to define any value (or) function instead of "module.exports"
 *      - But if we just use "exports" to define any value (or) function instead of "exports.name" 
 *              -> It will treat "exports" as a variable, but not as a property of "module"    
*/