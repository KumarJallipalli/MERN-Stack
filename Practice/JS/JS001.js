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
