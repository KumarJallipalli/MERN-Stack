# 05. State

---

## Issue

This code doesn’t work. WHY..?

- React will Update the Values on the UI only when it’s Component Re-Renders
    - i.e., If the Component doesn’t Re-Renders → Values on the UI Won’t get updated
- Then, do we need to forcefully Re-Render the Component..?
    - No,
    - React will Re-Render the Component whenever required & it’s very Efficient
- Then, Why the value is NOT updated in our scenario
    - Issue is with the React
    - React only understands the State, But NOT the Variable [ State in React == Variable in JS ]
    - Hence, even though Variable Value changes, React doesn’t understand it & won’t update the UI
- So, we need to use state in React [ instead of Variable ]

```jsx
function App() {

    // Fruit Variable
    let fruit = "Apple";

    // Function to update the Variable
    function handleFruit (name) {
        fruit = name;
        console.log(name);
    }

    return (
		    <h1>Variable in Raect</h1>
        <h2>{fruit}</h2>
        {/* Click Event to update the UI */}
        <button onClick={() => handleFruit("banana")}>Change Fruit</button>
    )
}
```

<aside>
💡

NOTE:

---

- React will Update the Values on the UI only when it’s Component Re-Renders
    - i.e., If the Component doesn’t Re-Renders → Values on the UI Won’t get updated
</aside>

## What is a **Variable** in React?

A **regular variable** in React is like any JavaScript variable:

- But when changed, It does **not trigger re-rendering**
- Hence, It is often used for **temporary, non-UI** data [ internal logic where UI is NOT involved ]

## What is **State** in React?

**state** is a built-in object that is used to **store data** [ which data → data that eventually changes & updates the UI  ]

- State is **reactive**:
    - when the value of State changes → React Re-Renders it’s Component & updates the UI [ Automatically ]
- It is **component-specific**:
    - State is Component Scoped [ like how function is Block Scoped ]
    - each component manages its own state.

<aside>
💡

NOTE:

---

- If **changing the data should affect the UI** → use **State**.
- Else use regular **variable** [ for internal logic or temp data ]
</aside>

## React Hooks

**`Hooks`** are special functions in React 

- React Hook lets you **use React features** in **function components** (without writing a class).
    - React Features → State, Life Cycle, Side Effects etc..
- Why Hooks?
    - Before Hooks, if you wanted to use state or lifecycle methods, you had to use **class components**.
    - Hooks allow **function components** to do the same things, making code easier to read, test, and reuse.
- Rules of Hooks
    1. **Only call Hooks at the top level** – don’t call them inside loops, conditions, or nested functions.
    2. **Only call Hooks from React functions** – either functional components or custom Hooks.
- Custom Hooks → You can build your own Hooks to reuse logic across components.
- NOTE → Any keyword starting with `use` is a React Hook

## How to use State

- In React, State is Managed using `useState` Hook in **function components**
    - `useState` is a **React Hook** that lets you add **state** to functional components.
    - Before React Hooks,
        - state management was only possible in class components.
        - With `useState`, you can now have state in function components as well

Syntax → `const [state, setState] = useState(initialValue);` [ RHS `useState` is a Keyword ]

- **`state`**: the current state value.
- **`setState`**: a function to you update the state.
- **`initialValue`**: the Initial Value of the state

When you call `setState`, React will:

1. Update the state value.
2. Re-render the component to reflect the new state.

```jsx
function App() {

    // Fruit Variable
    let fruit = "Apple";

    // Function to update the Variable
    function handleFruit (name) {
        fruit = name;
        console.log(name);
    }

    return (
	    <>
		    <h1>Variable in Raect</h1>
        <h2>{ fruit }</h2>
        {/* Click Event to update the UI */}
        <button onClick={() => handleFruit("banana")}>Change Fruit</button>
      </>
    )
}
```

- UI is NOT updated here, As we have used a JS Variable

```jsx
import { useState } from "react"

function App() {
    // Creating a State
    let [fruit, setFruit] = useState('Apple');

    // Handling/Managing the State
    function handleFruit (name) {
        setFruit (name);
    }

    return (
        <>
            <h1>State in React</h1>
            <h2>{ fruit }</h2>
            {/* Click Event to update the UI */}
            <button onClick={ () => {handleFruit("Banana")} }>Click</button>
        </>
    )
}
```

- UI is UPDATED here, As we have used a React State

## Multiple States

```jsx
import { useState } from "react";

function Counter () {
    const [ counter, setCounter] = useState(0);
    const [ rCounter, setRCounter] = useState(10);

    const [mCounter, setMCounter] = useState(0);

    return (
        <>
            <h2>Counter : { counter }</h2>
            <h2>RCounter : { rCounter }</h2>

            <button onClick={() => {setCounter(counter+1)}} >Counter</button> &nbsp;
            <button onClick={() => {setRCounter(rCounter-1)}} >rCounter</button>

            <br />
            <h2>Mixed Counter : {mCounter}</h2>
            <button onClick={() => {setMCounter(mCounter+1)}} >Increase</button> &nbsp;
            <button onClick={() => {setMCounter(mCounter-1)}} >Decrease</button>
        </>
    )
}

export default Counter;
```

---

## What will be the Output here?

```html
<body>
    <h1>JS Events</h1>
    <button onclick="hello()">Click Me</button>

    <script>
        let btn = document.querySelector("button");
        console.log(btn);
        
        function hello () {
            console.log("Namsate");
        }

        btn.onclick = () => console.log("Hello")

        let name = "Paris"; // hello
        name = "London"     // js hello
    </script>
</body>
```