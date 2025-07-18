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
