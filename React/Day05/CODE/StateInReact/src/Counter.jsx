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