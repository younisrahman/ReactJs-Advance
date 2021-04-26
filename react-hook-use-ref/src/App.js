import logo from './logo.svg';
import './App.css';
import React,{useEffect, useRef} from 'react';

function App() {
  // const myHeading = React.createRef()
  const myHeading = useRef(null)
  const textInpputRef = React.createRef()
  useEffect(() => {
    // console.log(myHeading)
    console.log(myHeading)
    textInpputRef.current.focus()

  }, [])

  const printValue= ()=>{
    console.log(textInpputRef.current.value)

  }
  return (
    <div className="App">
      <h1 ref={myHeading}>UseRef Tut</h1>
      <input type="text" ref={textInpputRef} />
      <button onClick={printValue}>get Element</button>

    </div>
  );
}

export default App;
