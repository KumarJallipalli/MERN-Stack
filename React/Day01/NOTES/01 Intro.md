# 01. Intro [ 17/07/2025 ]

---

## What is React

- React is a JS Library
- React is used to build User Interfaces [ i.e., Front End Application ]
- React is especially used to build SPA [ where performance & Responsiveness is Key ]

## What is SPA

- SPA → Single Page Applications
- SPA → Application that loads Single HTML Page
    - Navigation between "pages" & updates to contents happens Dynamically [ Using JS ] without reloading the entire page
- Adv → When moving from one page to another, Application doesn’t reload [ NASA website (vs) React website ]
- Concept
    1. Initial Load → Browser loads one main HTML file [ plus JavaScript and CSS assets ]
    2. Dynamic Content 
        - Navigation between "pages" happens via **JavaScript [ V.IMP ]**
        - JS updates parts of the page using data fetched from the server — without a full page refresh.
    3. Client Side Routing
        1. SPAs use **JavaScript-based routers** (like React Router) to switch views based on the URL
        2. In doing so, It doesn’t request a new page from the Server

## Key Features of React

1. **Component-Based**
    - Build UIs using **reusable components** that manage their own state.
2. **Declarative**
    - Define **what** the UI should look like && React updates it efficiently.
3. **Virtual DOM**
    - Uses a lightweight, in-memory DOM to update only what's needed — Making it fast
4. **One-Way Data Flow [ Binding ]**
    - Data flows **one direction [ parent → child ]**, making apps predictable and easier to debug.
5. **JSX**
    - A Syntax to Write **HTML-like code** directly in JavaScript [ for cleaner UI code ]

## React Setup

Pre req:

- Install `node`,
- Install `vs code`
- Install `Vite` [ `Vite` is also used to setup `vue.JS` & Others ]

Why we will use `Vite`..?

- Both `vite` & `parcel` are Frontend Build Tools [ recommended by React ]
    - It is Very Popular, customizable & Extremely fast [ development & Building ] → Used in Large Projects
    - Parcel is lightweight & zero-config→ used for light projects

React setup using `Vite`

1. `npm create vite`
    - select required Library & Language
2. Run the displayed commands 

## Some Common Terminology

- `Fast Refresh` → Automatically updates the UI in the browser **instantly** as you save changes to your code.
- `JSX` → A syntax that lets you write **HTML-like code in JavaScript**
- `Babel` → A JavaScript compiler that transforms modern JS (ES6+) and JSX into browser-friendly code
- `SWC` [ Speedy Web Compiler ] → A much **faster alternative** to Babel, written in Rust
    - **Why it matters**: Use the latest JS features and JSX, even if the browser doesn’t support them directly.
- **`Flow`** → a **static type checker** for JavaScript developed by **Meta —** detects **type-related bugs**
    - Now Typescript is used