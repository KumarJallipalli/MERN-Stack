console.log(process.config);

let args = process.argv;
for (let i=0; i<args.length; i++) {
    console.log(i + ": " + args[i]);
}

// Here, this "arr" is the same thing which gets exported from math.sj file
const arr = require("./math")
console.log(arr);