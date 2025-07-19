
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
