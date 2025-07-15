/**
Practice Qs
-----------
    Add the following elements to the container using only JavaScript and the DOM methods.

            i) a <p> with red text that says "Hey I'm red!"

            ii) an <h3> with blue text that says "I'm a blue h3!"

            iii) a <div> with a black border and pink background color with the following elements inside of it:

            . another <h1> that says "I'm in a div"

            · a <p> that says "ME TOO!"
*/
let container = document.querySelector("#container");

// i) a <p> with red text that says "Hey I'm red!"
let p1 = document.createElement("p");
p1.innerText = "Hey I'm red!";
p1.classList.add("red");

container.appendChild(p1);

// ii) an <h3> with blue text that says "I'm a blue h3!"
let h3 = document.createElement("h3");
h3.innerText = "I'm blue h3!";
h3.style.color = "blue";

container.appendChild(h3);

/**
 * iii) a <div> with a black border and pink background color with the following elements inside of it:

            . another <h1> that says "I'm in a div"

            · a <p> that says "ME TOO!"
*/
let div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.borderColor = "black";
div.style.border = "solid 1px black";
div.style.paddingLeft = "10px";

container.appendChild(div);


let divH3 = document.createElement("h3");
divH3.innerText = "I'm in a div";

div.appendChild(divH3);

let divP = document.createElement("p");
divP.innerText = "ME TOO";

div.appendChild(divP);