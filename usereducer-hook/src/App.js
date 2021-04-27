import React, { useReducer } from 'react'
import './App.css';

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
  const [data2, dispatch2] = useReducer(reducer, iState)
  const getName = () => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res2 => {
        console.log(iState)
        dispatch({ type: "CHANGE_NAME", payload: res2[0].name })
      })
  }
  return (
    <div className="App">
      <h1>Use Reducer</h1>
      <h2>My name is {data.name}</h2>
      <h2>My name is {data.role[0]}</h2>
      <button onClick={getName}>Change Name</button>

      <h2>My name is {data2.name}</h2>
      <h2>My name is {data2.role[0]}</h2>
      <button onClick={()=>{console.log(iState);dispatch2({ type: "CHANGE_NAME", payload: 'Younis Rahman' })}}>Change Name</button>
    </div>
  );
}

export default App;
