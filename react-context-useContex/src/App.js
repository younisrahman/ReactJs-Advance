import React, {useContext} from 'react';
import './App.css';
// import Coder from './Coder' 
// import Coder4 from './Coder4' 


// const MyContext = React.createContext("Asu") // With Default value
const MyContext = React.createContext()
const nameContext = React.createContext()
const ageContext = React.createContext()

class Coder4 extends React.Component {

  static contextType = MyContext
  render() {
    return (
      <React.Fragment>
        <h1>Name is {this.context.name}</h1>
        <h1>Age is {this.context.age}</h1>
      </React.Fragment>
    )
  }
}

const Coder3 = () => {
  const name = useContext(nameContext)
  const age = useContext(ageContext)
  return (

    <React.Fragment>
      <h1>Name is {name}</h1>
      <h1>Age is {age}</h1>
    </React.Fragment>

  )
}
const Coder2 = () => {
  return (
    <Coder3 />
  )
}

const Coder = () => {
  return (
    <Coder2 />
  )
}

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      {/* <MyContext.Provider value={{ name: 'Jubu', age: 56 }}> */}
      <nameContext.Provider value={"Naim"}>
        <ageContext.Provider value={30}>
          <Coder />
          {/* <Coder4 /> */}
        </ageContext.Provider>
      </nameContext.Provider>
    </div>
  );
}

export default App;
