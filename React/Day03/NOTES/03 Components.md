# 03. Components [ 18/07/2025 ]

---

## Components

- `Component` → A **reusable Block of code** that defines [ **part of ] the user interface (UI)**
- **Component is the building block** of a React application [ Used to build UI ]
    - Everything is a Component in React

🚀 Why Components Matter

- **Reusability** – Write once, use multiple times
- **Modularity** – Break complex UI into manageable parts
- **Maintainability** – makes debugging [ & Updating ] easier
- **Declarative Logic** – Define **how** the UI should look like && React updates it efficiently.
- **Readability**: Clear structure and separation of concerns

Rules:

1. **Component Names Must Start with Capital Letters**
    - JSX treats lowercase tags as HTML elements.
2. Components Must Return a JSX Element 
3. Components Should Be Pure Functions
    - **`pure function`**: given the same input (props), it should always return the same output.
4. Avoid Direct DOM Manipulation
    1. Let React handle the DOM, React updates DOM efficiently
5. Use Hooks Only in Function Components (and only at the top level)
6. Props and state are immutable
    - Props are read-only [ Immutable ].
    - If you need to update data, use state.

```jsx
// Deafult React Component
function App() {
  // alert(namsate());
  return (
    <>
      <h1>React Component</h1>
      <Hello/>
      <p>{ namsate() + " ReactJS" }</p>
    </>
  )
}

//  Custom First react Component
function Hello () {
  return (
    <h2>Hello World</h2>
  )
}

//  Normal JS Function
function namsate () {
  return "Namsate"
}

export default App
```

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

```jsx
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## What is the difference between a Component & a Function

| Function | Component (React) |
| --- | --- |
| `Function` is a Re-Usable Block of Code that takes input, performs action & optionally return a result | `Component` is a Re-Usable Block of Code that defines part of UI |
| First Letter is small [ Camel Casing ] | First Letter is Always Capital [ Pascal Casing ] |
| Returns any data type | Returns JSX (or React elements) |
| Called as a JS function [ `functionName ()` ] | Called as a JSX Element [ `< ComponentName />` |

## Export & Import

- `export` and `import` are used to share code between files in JS
    - `export` make Parts of a file Accessible in other files
    - `Import` used to Access those parts in the Current File

**Why Use Them?**

- Break large codebases into smaller, manageable files. → Modularity
- Reuse code instead of duplicating logic. → Reusability

Named ( vs ) Default Exports in JavaScript

- A **`default export`** is used to exports **a single value**
    - No curly braces `{}` during import.
    - You can rename it during import.
    - Only one default export per file
- A **`named export`** is used to export **multiple values**, each with a name
    - Must use curly braces `{}` during import.
    - Must use the **exact exported name** during the import

```jsx
// This is an user Defined Component
function UDC () {
    return (
        <h2>User Defined Component</h2>
    )
}

// Only ONE default export per File
export default UDC;

export function hello () {
    return "Hello World";
}

export const name = "London";
```

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

```jsx
// Default exports can be renamed during Import
import CustomComponent from './UserDefinedComponent';

// Named exports must use thier exported name in imports
import { hello, name } from './UserDefinedComponent';

function App() {

  return (
    <>
      <h1>Export & Import in React </h1>
      <CustomComponent/>
      <>{ hello() + " " +name }</>
    </>
  )
}

// default Exports
export default App
```

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## Module Systems

| Module System | CommonJS | ES Modules |
| --- | --- | --- |
| Used In | Node.js | Browser & modern JS (React, Vite) |
| Export Syntax | `module.exports` | `export` / `export default` |
| Import Syntax | `require()` | `import` |
| File Extension | `.js` |  `.mjs` ( or ) `"type": "module"` in `package.json` |

## JSX

- **JSX (JavaScript XML)** is a syntax extension for JS
- JSX lets us **write HTML-like code inside JavaScript [ Code ]**
- JSX supports any JavaScript expression using curly braces
- Extra:
    - JSX gets compiled into `React.createElement()` calls behind the scenes [ using Babel ]
    - To use JSX, you typically need a **build tool** like **Babel** to transpile it into regular JavaScript.
    - JSX is not required in React, but it's highly recommended.

```jsx
// Without JSX 
<head>
    <title>Document</title>
        <script>
            function myFunction ( ) {
                document.getElementById("demo").innerHTML = "Hello World";
            }
        </script>
</head>
<body>
    <button onclick="myFunction() ">Click me</button>
    <p id="demo"></p>
</body>
</html>
```

This is same code comparison between HTML + JS && React JSX

```jsx
import React, { useState } from 'react';

function HelloWorld() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Hello World');
  };

  return (
    <div>
      <button onClick={ handleClick }>Click me</button>
      <p>{message}</p>
    </div>
  );
}
```

## JSX Rules

- JSX must return one parent element ONLY.
    - Hence, Use a `div`, `<></>`, or `<React.Fragment>`.
- JSX must be inside a component or returned from one → JSX can’t live alone
- Use `camelCase` for HTML attributes
- JavaScript expressions go inside `{}` [ But NOT statements ]

## JSX Exercise

```jsx
// Refactor this CODE in JSX
<h1>Anil Sidhu Todos</h1>
<img
		src="./Batman-Pic"
		alt="Anil Sidhu"
		class="photo" />

<ul>
		<li>Invent new traffic lights</li>
		<li>Rehearse a movie scene</li>
		<li>Improve the spectrum technology</li>
</ul>
<button onclick="callFun()">Click Me</button>

<script>
		function callFun ( ){
				alert("function called");
		}
</script>
```

```jsx
function App() {
  return (
    <>
      <h1>JSX Exercise</h1>
      <img
        src="./Batman-Pic"
        alt="Batman"
        className="photo"/>

      <ul>
					<li>Invent new traffic lights</li>
					<li>Rehearse a movie scene</li>
					<li>Improve the spectrum technology</li>
      </ul>

      <button onClick={()=>{alert("Function Called")}}>CLick Me</button>
    </>
  );
}
```

## JSX with `{}`

- User variable with JSX
- Condition inside JSX
- Use function with JSX
- Operations inside JSX
- Object and Array with JSX
- Html tags property with JSX
- Interview Question

Let’s try some of the above scenarios

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import JSX from './JSX.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <JSX/>
  </StrictMode>,
)
```

```jsx
function JSX () {
    let name = "Paris";
    let x = 20, y = 10;
    function operations (a, b, op) {
        if (op == "+") {
            return a+b;
        } else if (op == "-") {
            return a-b;
        } else {
            return "Wrong Operator";
        }
    }

    let arr = [10, 20, 30];
    let obj = {city: "London", country: "UK"};
    let url = "https://vistapointe.net/images/batman-3.jpg"

    return (
        <>
            <h1>JSX with {"{}"}</h1>
            <h1>{"My name is " + name}</h1>
            <h1>{x*y}</h1>
            <h2>{name ? name : "User Not Defined"}</h2>
            <h2>{operations(50, 20, "+")}</h2>
            <h2>{"Array's 2nd element : " + arr[1]}</h2>
            <h2>{"Object's 1st Property : " + obj.city }</h2>
            <img src={url} alt="Batman" width={300} />
        </>
    )
}

export default JSX;
```