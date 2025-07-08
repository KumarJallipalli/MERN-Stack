let strTrim = "  Trimming is FUN   ";
console.log(strTrim.trim());
console.log(strTrim);

let strName = "Freedom FIghter";
console.log(strName.toLowerCase());
console.log(strName.toUpperCase());
console.log(strName);

console.log(strName.indexOf("dom"));
console.log(strName.indexOf('e'));

console.log(strTrim.trim().toUpperCase());
console.log(strName);

console.log(strName.replace("FIghter", "Warrior"));
console.log(strName);

console.log(strName.slice(3));
console.log(strName.slice(3, 8));
console.log(strName.slice(-2));
console.log(strName.slice(15));

let str = "Hello GFG";
str[0] = "G";
console.log(str);


// Arrays
let nums = [1, 2, 3, 4, 5];
console.log(nums[0], nums[1], nums[4], nums[5], nums[-1]);

let info = ["GameBoy", 25, 99.9999, true, null, undefined]
console.log(info);
console.log(info, info[info.length-1]);
console.log(info[0].length);
console.log(info[0][0]);

// Arrays are Mutable
let names = [ "Tillu", "Killu", "Billu"];
names[0] = "Gillu";
console.log(names);

names[10] = "Willu";
console.log(names);
console.log(names[7]);

// Array Methods
console.log(names.push("Nillu"));


let array1 = [ 'red', 'yellow', 'green'];
let array2 = ['blue', 'orange', 'white'];
let colors = array1.concat(array2);

console.log(colors);
console.log(array1);
console.log(array2);

console.log(colors.splice(4));
console.log(colors);

console.log(colors.splice(0, 2));
console.log(colors);

console.log(colors.splice(0, 1, 'black', 'grey'));
console.log(colors);

console.log(colors.splice(1, 0, 'indigo'));
console.log(colors);

console.log(colors.splice(1, 1, 'violet'));
console.log(colors);


let array3 = ['blue', 'yellow', 'indigo', 'battleRed', 'green'];
console.log(array3.sort());
console.log(array3);

let array4 = [77, 15, 2, 25, 8, 87, 5, 68, 73, 13, 21];
console.log(array4.sort());
console.log(array4);

const arrr = [1, 2, 3, 4];
console.log(arrr.push(6));
console.log(arrr);
console.log(arrr.splice(0, 1, 10));
console.log(arrr);
console.log(arrr.concat(array1));
console.log(arrr);
console.log(arrr.reverse());