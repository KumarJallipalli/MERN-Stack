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