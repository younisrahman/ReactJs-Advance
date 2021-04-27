import React, { useReducer, useContext, createContext } from 'react'
import './App.css';
import {Coder} from './Coder'

export const MyContext = createContext()

const iState = {
  name: "Younis",
  role: ["Developer", "Coder"]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload
      }

    default:
      return state
  }
}



function App() {
  const [data, dispatch] = useReducer(reducer, iState)
  return (
    <MyContext.Provider value={{ name: data.name, changeName: dispatch }}>
      <div className="App">
        <h1>Context, usecontext, usereducer</h1>
        <Coder />
      </div>
    </MyContext.Provider>
  );
}

export default App;
