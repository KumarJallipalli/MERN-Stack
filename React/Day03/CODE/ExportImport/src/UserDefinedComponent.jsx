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