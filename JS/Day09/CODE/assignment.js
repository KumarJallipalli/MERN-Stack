/**
    Qsl. Create a new input and button element on the page using JavaScript only. Set the
    text of button to "Click me'.

    Qs2. Add following attributes to the element :
        - Change placeholder value of input to "username"
        - Change the id of button to "btn',

    Qs3. Access the btn using the querySelector and button id. Change the button background
    color to blue and text color to white.

    Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
    Change its color to purple.

    Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
    where Delta is bold.
*/
let container2 = document.createElement("div");
document.querySelector("body").appendChild(container2);
container2.style.border = "2px solid black";
container2.style.marginTop = "10px";
container2.style.padding = "10px";

// Q1
let input1 = document.createElement("input");
input1.type = "text"

let button1 = document.createElement("button");
button1.innerText = "CLick me";

container2.appendChild(input1);
container2.appendChild(button1);


// Q2
input1.placeholder = "Username";
input1.id = "inp1"
button1.id = "btn";


// Q3
let btn = document.querySelector("#btn");
btn.style.color = "white";
btn.style.backgroundColor = "blue";


// Q4
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.style.color = "purple";
h1.style.textDecoration = "solid 2px underline"

document.querySelector("body").prepend(h1);


// Q5
let p2 = document.createElement("p");
p2.innerHTML = "DOM <b>Maipulation</b> Assignment Solution"

container2.appendChild(p2);
