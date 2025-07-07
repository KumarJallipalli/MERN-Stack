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