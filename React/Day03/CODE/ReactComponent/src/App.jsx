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
