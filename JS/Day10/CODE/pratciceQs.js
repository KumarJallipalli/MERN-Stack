/**
     Qs1. Try out the following events in Event Listener on your own :
            - mouseout
            - keypress
            - Scroll
            - load
        [Use MDN for help]

    Qs2. Create a button on the page using JavaScript. Add an event listener to the button
    that changes the button's color to green when it is clicked.

    Qs3. Create an input element on the page with a placeholder "enter your name" and an
    H2 heading on the page inside HTML.
            The purpose of this input element is to enter a user's name so it should only input
            letters from a-z, A-Z and space (all other characters should not be detected).
            Whenever the user inputs their name, their input should be dynamically visible inside
            the heading.
        [Please note that no other character apart from the allowed characters should be
        visible in the heading]
*/
// Q2
let div1 = document.createElement("div");
document.querySelector("body").appendChild(div1);

let btn2 = document.createElement("button");
btn2.innerText = "Click Me!";
div1.appendChild(btn2);

btn2.addEventListener("click", function (e) {
    this.style.color = "green";
});


// Q1
btn2.addEventListener("mouseout", function () {
    console.log("Mouse is moved out of button");
})

let inp2 = document.createElement("input");
inp2.type = "text";
inp2.placeholder = "Type here.."
div1.appendChild(document.createElement("br"))
div1.appendChild(inp2);

inp2.addEventListener("keypress", function () {
    console.log("Key is Pressed [ Depreciated Event ]");
})

window.addEventListener("scroll", function () {
    console.log("Scrolled")
})

for (let i=0; i<10; i++) {
    let heading = document.createElement("h1")
    heading.innerHTML = "Heading"
    document.querySelector("body").appendChild(heading);
}

let img = document.createElement("img");
img.src = "https://vistapointe.net/images/batman-3.jpg"
img.style.width = "700px"
document.querySelector("body").appendChild(img);

img.addEventListener("load", function () {
    console.log("Image is Loaded")
})


// Q3
let pattern = /[^a-zA-Z\s]/g;

let assgH2 = document.querySelector("#AssgH2");
let assgInp1 = document.querySelector("#Assginp1");

assgInp1.addEventListener("input", function (e) {
    // Remove invalid characters
    let cleaned = this.value.replace(pattern, "");
    assgH2.innerText = cleaned;
})