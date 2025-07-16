# JS X - DOM Events [ 15/07/2025 ]

---

## Events

- **`Events`** → **something** [ some Action ] **that happens in the browser**
    - These Events are often triggered by “user interaction”
- when these events are detected/occurred, JS lets you to execute some code
- **`Event handler`** → A **function** (or code snippet) that executes **in response to that event**
    - It Handles the Event by executing some function (or) Code

When Something Happened → `Event`

This JS Code will get executed on this Event

JS Code → `Event Handler` 

## Inline Event Handler

- This is similar to CSS inline styling

```jsx
<button onclick = "console.log("button is clicked");">click me</button>
```

- here,
    - Button `click` → Event
    - `onclick="console.log('button is clicked');"` → **event handler**
        - `onclick` → Property
        - `console.log('button is clicked');` → Value
    - It tells the browser:
        
        **“When a click happens on this button, run this code.”**
        
- The value of this attribute `onclick` is always a JS code [ Full fledged JS Code ]

<aside>
💡

NOTE:

---

- It is NOT Recommended to code inline event handlers
    - As it makes code bulky & redundant.
        - Hence, difficult to understand & Debug
    - But we only use it rare occasions
</aside>

## DOM Events

- `onclick` → triggers when an element is Clicked
- `onmouseenter` → triggers when the mouse pointer Enters onto the element
- `onmouseleave` → triggers when the mouse pointer Leaves from the element

```jsx
for (btn of btns) {
    btn.onclick = sayHello;
    /**
     *  here, make sure to not put () after "sayHello"
     *  If you put (), that means you are executing the function there itself
     *  i.e., when the loop gets executed all the functions get executed irrespectibve of onclick
     *  And onclick will stire the Value returned by function [ which is undefiend ]
	   *  Hence, No action will be performed when button is clicked
     */
    btn.onmouseenter = function () {
        console.log("you have enetered a button");
    }
}

function sayHello() {
    console.log("Hello..!");
}
```

<aside>
💡

NOTE:

---

1. Always give Event handler value as function definition `function_name` [ NOT function execution `function_name()` ]
2. The main dis-Adv with Event Handlers is that,
    - We can only add 1 value/function to a single event handler
    - Hence, Event Listeners came into Picture
</aside>

## Ways to Event Handling

- We can Handle Events in 3 ways
    1. Inline Event Handler [ `<button onclick = "console.log("button is clicked");">` ]
    2. Event Handling using Element Property [ `document.querySelector("#btn").onclick = () => { console.log("Button Clicked"); }`
    3. Event Listener

## Event Listener

- `element.addEventListener(event, callback)` → Waits/listens for a specific event & executes the Callback
- The main adv is that,
    - we can set multiple `addEvenetListener()` to execute multiple functions
    - But NOT the case with Event Handling using Element Property

```jsx
function sayHello() {
    console.log("Hello..!");
}

function sayCheese () {
    console.log("Smile.. :)");
}

btns.onclick = sayHello;
btns.onclick = sayCheese;
*/**
 *  Here, only the sayCheese() is executed
 *  i.e., only 1 value can be set to 1 event, if we set another value again it will overide it
 *  Hence, we got EventListerners to set multiple values for a single event
*/*
btns.addEvenetListener("click", sayHello);
btns.addEvenetListener("click", sayCheese);
/**
 *  All of the above functions will be executed simultaneously [ i.e., in case of Event Listeners ]
*/
btns.addEvenetListener("dblclick", function () { console.log("Button Double Clicked");});
btns.addEvenetListener("mouseenter", function () { console.log("You have entered the mouse");});
```

<aside>
💡 These Event Listeners can also be applied on any elements [ NOT just buttons ]

</aside>

## JS Activity [ Random Color Gen ]

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Color Generator</title>

    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <h1>Generate a Random Color</h1>
    <button>Generate Color</button>
    <div>This is your new color</div>

    <script src="../JS/JS001.js"></script>
    <!-- <script src="../JS/JS002.js"></script> -->
</body>
</html>
```

```jsx
div {
    border: solid 1px black;
    width: 50%;
    height: 150px;
    margin: 20px auto;
    padding: 5px;
    font-size: 20px;
}

button {
    font-size: 20px;
}

* {
    text-align: center;  
}
```

```jsx
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
```

## NOTE:

- We can add `eventListener` to any element [ Not just button ]

```jsx
let p = document.querySelector("p");
p.addEventListener("click", function () {
		console. log("parah was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
		console. log("mouse inside div")
}
```

## this in Event listeners/handers

- `this` in **event listeners** (or event handlers) depends on **how the function is defined** and **how it's called**
    1. In **regular function** [ in an event listener ], `this` refers to the **DOM element** that fired the event 
    2. In Arrow **function** [ in an event listener ], `this` refers to the Parent Object of **DOM element**

```jsx
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    console.log(this);    // this refers window
});
```

```jsx
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    console.log(this);    // this refers btn
});
```

Usage of this in Event Listeners

```jsx
let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

btn.addEventListener("click", function () {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});

addEventListener("click", function () {
    console.dir(this.innerText);
    this. style.backgroundColor = "blue";
});

h1.addEventListener("click", function () {
    console.dir(this.innerText);
    this.style.backgroundColor ="blue";
});

h3.addEventListener("click", function () {
    console.dir(this.innerText);
    this.style.backgroundColor ="blue";
});
```

```jsx
let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);

p.addEventListener("click", changeColor);

h1.addEventListener("click", changeColor);

h3.addEventListener("click", changeColor);
```

Left Side code → More repetition → Code redundancy

Right Side Code → Good Code [ as it removes code redundancy ]

In this way `this` is used on multiple elements for event listening/handling

## Default `event` argument

- WKT, `element.addEvenetListener(event, callback)` method has callback function
    - `element.addEvenetListener(event, fn (event) {...} )`
    - This callback function will have a default argument called `event`
- This `event` is an Object,
    - which can so many types, out of those 2 most IMP are:
        - `pointerEvent` → Handles mouse, pen, touch events
        - `mouseEvent` → Handles only mouse events
        - `keyboardEvents` → whenever any key is pressed from keyboard

## Keyboard Events

- Keyboard Events are triggered when users interacts with a Keyboard
- some of the Keyboard Events are
    - `keydown` → fired when is pressed down
        - **Fires repeatedly** if the key is held down.
    - `keyup` → fired when key is released
- WKT, Events are always accompanied by callback function
    - This callback function will have a default argument called `event` which is of `keyboardEvent` [ an Object ]
    - we will have multiple properties [ for this event object ]
        - code → code of the key pressed [ ex: KeyA, ShiftLeft, ShiftRight, semicolon ]
        - key → actual character of the key pressed [ a, b, shift, shift, ; ]

<aside>
💡

NOTE:

---

- If you press `shift + /` == ?
- then o/p will be
    - key = shift & ?
    - code = shiftRight & slash
</aside>

```jsx
//moving chracter in a video game
let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    // here, evenet is the default argument for the callback in event listerner method
    if(event.code == "ArrowUp" || event.code == "KeyW") {
        console.log("Character moves Forward");
    }
    else if (event.code == "ArrowDown" || event.code == "KeyS") {
        console.log("Character moves Backwards");
    }
    else if (event.code == "ArrowLeft" || event.code == "KeyA") {
        console.log("Character moves Left");
    }
    else if (event.code == "ArrowRight" || event.code == "KeyD") {
        console.log("Character moves Right");
    }
})
```

## Form Events

- WKT, when we submit a form, it will be redirected to the URL mentioned in the `action` attribute
- If we log any message in the callback function, they won’t be appeared in the console as the log messages will be printed on HTML address while the page shown is redirected page.
    - Hence, we use `alert` in those situations [ May be alert was introduced for this..! ]
- But we can prevent that using one of the property of the default argument `event`
    - `event.preventDefault()` → method used to **stop the default behavior**
    - In this case, prevents the Submission & Redirection [ when a form is submitted ]

```jsx
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    console.log("form submitted")
    //this above message is not displayed as the page is reidrected to new URL
    //hence we use alert
    alert("Form submitted")
    event.preventDefault();
})
```

## Extracting Form Data

- We can access the form’s data using
    1. `querySelector()`
    2. `form.elements` → is a collection of all the sub-elements of form [ as form is an Object in JS ]
    - For `input` elements, we don’t have `innerText` property
        - instead we have `value` property which stores the user’s input

```jsx
// How to Extract the data..?
let form1 = document.querySelector("form");

form1.addEventListener("submit", function(event) {
    event.preventDefault();

    // Accessing the input elements using query selctor
    let user = document.querySelector("#userName");
    let pass = document.querySelector("#password");

    /**
     *  - There is another way of accessing the input elements
     *  - As the input, button & so on.. all of the elemnts are inside the form element,
     *  - form element is having an internal object called "elements"
     *  - This "elements" object  is a collection of all the subelements of a form
     *  - Through this elements object, we can access all the sub elements inside a form
     */
    let user1 = form.elements[0];   // == this.elements[0]
    let pass1 = form.elements[1];   // == this.elements[1]

    /**
     *  - These input elements won't have InnerText property
     *  - instead, they have propery called "value" -> which stores the user input data
     */
    console.log(user.value);
    console.log(pass.value);
})
```

## More Events

`change` and `input` events are both used to handle form field changes

- `change`
    - This event will be fired only when there is change of state.
        - Fired **only when the element loses focus** (i.e., blur), **and** its value has changed.
    - i.e., This event won’t be fired for every single character that the user enters
        - , But fired when user clicks the mouse on anywhere of the page [ even on the submit button ]
        - hence, this stores all the characters user entered after the mouse event
    - It will only work on input, textarea & select elements
    - change → Tracks the whole change together
- `input` [ V.IMP ]
    - This event will be Fired **immediately** when the value of an input changes.
    - Fires **on every keystroke** that the user enters, this event will be fired & stores the each character.
    - this only works for character values but not other values like ctrl, arrow buttons
    - It will only work on input, textarea & select elements
    - input → Tracks for each & every User input

```jsx
let user2 = document.querySelector("#user2");

user2.addEventListener("input", function(event) {
    console.log("input event fired");
    console.log("final value =", this.value);
})

user2.addEventListener("change", function(event) {
    console.log("change event fired");
    console.log("final value =", this.value);
})
```

## Text Editor Activity

```html
    <!-- Text Edior  -->
    <h2>TEXT EDITOR</h2>
    <p id="TE"></p>
    <input type="text" placeholder="Type Here.." id="text">
```

```jsx
// Text Editor
let text = document.querySelector("#text");
let p = document.querySelector("#TE");

text.addEventListener("input", function(event) {
    p.innerText = this.value;
})
```

## Misc.

- The `load` event is triggered **when a resource and all its dependent resources (like images, stylesheets, etc.) have finished loading**.
- The `scroll` event is fired **when the user scrolls** an element or the entire page.

```jsx
// Scroll Event
for (let i=0; i<10; i++) {
    let heading = document.createElement("h1")
    heading.innerHTML = "Heading"
    document.querySelector("body").appendChild(heading);
}

window.addEventListener("scroll", function () {
    console.log("Scrolled")
})

// Load Event
let img = document.createElement("img");
img.src = "https://vistapointe.net/images/batman-3.jpg"
img.style.width = "700px"
document.querySelector("body").appendChild(img);

img.addEventListener("load", function () {
    console.log("Image is Loaded")
})
```

---

## What is Happening here [ Very Confusing ]

```jsx
class MyComponent {
  constructor() {
    this.name = "MyComponent";
    document.getElementById("myBtn")
    .addEventListener("click", this.handleClick);
  }

  handleClick() {
    console.log(this.name); 
    // ❌ undefined — 'this' is now the button
  }
}

```

You’re passing the **method** `handleClick` as a **callback**, but **you are not binding it** to the class instance. So when the event fires:

- `handleClick` is called as a **regular function**, not as a method of `MyComponent`.
- In a regular function, `this` inside the method will refer to the **element that triggered the event** — the button (`#myBtn`).
- Since the button doesn’t have a `name` property, `this.name` is `undefined`.

So, we need to **bind `this`** to the class instance, so that `this` inside `handleClick` still refers to the class.

1. **bind `this`** to the class instance using `.bind`
2. Use an Arrow Function as Wrapper

```jsx
class MyComponent {
  constructor() {
    this.name = "MyComponent";
    document.getElementById("myBtn")
    .addEventListener("click", () => {
      this.handleClick();
    });
  }

  handleClick() {
    console.log(this.name); // ✅ "MyComponent"
  }
}
```

```jsx
class MyComponent {
  constructor() {
    this.name = "MyComponent";
    document.getElementById("myBtn")
    .addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    console.log(this.name); // ✅ "MyComponent"
  }
}
```

- Here, The arrow function is being passed to `addEventListener` instead of passing `this.handleClick` directly.

### 🔐 So How Is Binding Happening?

- Inside Constructor, 'this' refers to the class instance
- In short:
    - `this.handleClick()` is inside the Arrow function,
    - Now `this` points to lexical parent object where it points to callee
    - Now the callee becomes Constructor [ parent of button ]
    - `this` inside the handle click will now point to callee which is constructor
        - Previously, `this` inside the handle click points to callee which is Button
        - Since the function is invoked by button