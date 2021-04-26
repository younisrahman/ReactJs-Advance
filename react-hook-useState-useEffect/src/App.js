import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    return()=>{
      //Work as a Component Unmounte
      // Use for code clean up
      //Execute atlast
      console.log("Home Component Unmounted")
    }
  }, [])
  return (
    <div>
      <h1> i am in home</h1>
      <Link to="/about"> got to about</Link>
    </div>
  )
}

const About = () => {
  useEffect(() => {
    return()=>{
      //Work as a Component Unmounte
      // Use for code clean up
      //Execute atlast
      console.log("About Component Unmounted")
    }
  }, [])
  return (
    <div>
      <h1> i am in about</h1>
    </div>
  )
}

function App() {

  // const [name, setName] = useState("Younis")
  // const [age, setAge] = useState(27)
  // const increment = () => {
  //   setAge((previousAge) => (previousAge + 1))
  // }

  // useEffect(() => {
  //   console.log("use effect called")
  // }, [])
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>React</h1>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <button onClick={() => setName("Younis Rahman")}>Change Name</button>
        <button onClick={() => increment()}>Change age</button> */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
