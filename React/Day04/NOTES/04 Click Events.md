# 04. Click Events

---

## Click Events in React

- WKT, React is a JS Library → React uses JS only
- WKT, in JS Events
    - Event handler’s value Must be a function definition `function_name` [ NOT function invocation `function_name()` ]
        - JS will call the function whenever Event Happens [ So, just give the Function Definition ]
- So, Events in React also follows the same
- The ONLY difference is
    1. Camel Casing
        - Events in React uses Camel Casing → `onClick`
        - Events in JS uses nothing [ just words together ] → `onclick`
    2. Curly Braces `{}`
        - Events in React uses curly braces `{}` to define it’s Value → `<button onClick={() => alert("Hello")} >Click Me</button>`
        - Events in JS normally define it’s Value → `btn.onclick = () => {console.log("Hello")}`

<aside>
💡

NOTE:

---

- Don’t compare JSX code with HTML code
    - JSX → `<button onClick={() => alert("Hello")} >Click Me</button>`
    - HTML → `<button onclick="hello('Paris')" >Click</button>`
- Why..?
    - HTML requires function invocation as Value in Events [ & in String format ]
    - JSX [ & JS ] requires function definition as Value in Events [ & `{}` ]
</aside>

Question:

- As function definition is passed to Events as it’s Value
- Then How to pass arguments in Events..?

## How to Passing Arguments in Events

- As WKT,
    - Event handler’s value Must be a function definition `function_name` [ NOT function invocation `function_name()` ]
- So, if you wrote like this
    - `<button onClick={alert("Hello")} >Click Me</button>`
    - It takes the expression as function invocation
    - But it requires function definition → Hence unexpected behavior
- So, we use Arrow Functions
    - `<button onClick={() => alert("Hello")} >Click Me</button>`
    - Now, it has the Function Definition → `() => {}`
    - And this Arrow function is calling another function → Hence Works fine
- Ans :
    - Similarly, Use Arrow Functions to pass Arguments in Events

```jsx
function App() {

  function hello (name) {
    alert(name);
  }

  return (
    <>
      <h1>Click Events</h1>
      {/* Problem with Funtion with Arguments */}
      <button onClick={hello} >Click Me</button>
    </>
  )
}
```

```jsx
function App() {

  function hello (name) {
    alert(name);
  }

  return (
    <>
      <h1>Click Events</h1>
      {/* Using Arrow Function to pass Arguments */}
      <button onClick={() => hello("Paris") } >Click Me</button>
    </>
  )
}
```

## Question

What is the O/P ?

```jsx
function hello (name) {
  console.log(name);
}

function App() {

  function hello (name) {
    alert(name);
  }

  return (
    <>
      <h1>Click Events</h1>
      {/* Using Arrow Function to pass Argiments */}
      <button onClick={() => hello("Paris") } >Click Me</button>
    </>
  )
}

export default App
```

```jsx
function hello (name) {
  console.log(name);
}

function App() {

  return (
    <>
      <h1>Click Events</h1>
      {/* Using Arrow Function to pass Argiments */}
      <button onClick={() => hello("Paris") } >Click Me</button>
    </>
  )
}

export default App

```

## Managing React Versions

```json
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  }
```

- To upgrade/downgrade the React Version
    1. Change the Version to desired Version
    2. Delete the `node_modules` folder 
        - To ensure packages are compatible after latest install.
        - Else sometimes new dependencies conflict with old nested dependencies
    3. run `npm install`

Meaning of `^19.1.0`:

- **19** → Major version
    - Breaking changes — things that are **not backward-compatible**
- **1** → Minor version
    - New features — **backward-compatible**
- **0** → Patch version
    - Bug fixes or performance improvements — also **backward-compatible**
- **`^` (caret)** → Allow any version `>=19.1.0` and `<20.0.0`
    - Allow **backward-compatible** updates up to the next **major version**. [ Lock major version ]
- `~` (Tilde) → Allow any version `>=19.1.0` and `<19.2.0`
    - Allow **backward-compatible** updates up to the next **minor version**. [ Lock Major & Minor version ]

---

```jsx
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function hello (name) {
            alert(name);
        }

        // Accessing Button using JS
        let btn = document.querySelector("#btn");

        btn.onclick = function namaste () {
            console.log("Hello");
        };
    </script>
</head>
<body>
    <h1>Click Event</h1>
    <button onclick="hello('Paris')" >Click</button>
    <button id="btn">Hit Me</button
</body>
```

- This code fails
    - because the script runs **before** the DOM is fully loaded

```jsx
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Click Event</h1>
    <button onclick="hello('Paris')" >Click</button>
    <button id="btn">Hit Me</button>

    <script>
        function hello (name) {
            alert(name);
        }

        // Accessing Button using JS
        let btn = document.querySelector("#btn");

        btn.onclick = function namaste () {
            console.log("Hello");
        };
    </script>
</body>
```

Now this runs well