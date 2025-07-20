import { useState } from "react"
import Counter from "./Counter";

function App() {
    // Creating a State
    let [fruit, setFruit] = useState('Apple');

    // Handling/Managing the State
    function handleFruit (name) {
        setFruit (name);
        console.log(fruit);
        console.log(typeof fruit);
    }

    return (
        <>
            <h1>State in React</h1>
            <h2>{ fruit }</h2>
            <button onClick={ () => {handleFruit("Banana")} }>Click</button>
            <hr />
            <h1>Multiple States</h1>
            <Counter></Counter>
        </>
    )
}

export default App
