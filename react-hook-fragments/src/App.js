/*
React Fragment are use for Remove un wanted div tag
we can use this like </React.Fragment> or <>
*/

import React from "react"
import './App.css';


const MyFragment = () => {
  return (
    <React.Fragment>
      <h3>Younis Rahman</h3>
      <h3>Role : Programmer</h3>
    </React.Fragment>
  )
}

const Column = () => {
  return (
    <React.Fragment>
      <td>Onu</td>
      <td>Asu</td>
      <td>Naim</td>
      <td>jubu</td>
    </React.Fragment>
  )
}

const Table = () => {
  return (
    <table>
      <tbody>
        <tr>
          <Column />
        </tr>
      </tbody>
    </table>
  )
}

function App() {
  return (
    <div className="App">
      <h1>This is Fragment</h1>
      {/* <MyFragment /> */}
      <Table />
    </div>
  );
}

export default App;
