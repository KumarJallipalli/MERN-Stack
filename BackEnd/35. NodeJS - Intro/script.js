console.log(process.config);

let args = process.argv;
for (let i=0; i<args.length; i++) {
    console.log(i + ": " + args[i]);
}
