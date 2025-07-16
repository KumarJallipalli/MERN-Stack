let btn = document.querySelector("button");
btn.addEventListener("click", randomColorGenerator);

function randomColorGenerator () {
    // Accessing h1 & it's inner text
    let h1 = document.querySelector("h1");
    h1.innerText = colorString();

    // Accessing div & it's bacground color
    let container = document.querySelector("div");
    container.style.backgroundColor = colorString();
}

function colorString () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}


// Practice
let inp1 = document.querySelector("#inp1");
inp1.addEventListener("keydown", (ev) => {
    console.log(ev.key);
    console.log(ev.code);
    console.dir(ev);
})
