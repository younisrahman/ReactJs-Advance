import React from 'react'
import { BrowserRouter, Route, useHistory, useParams, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar'

const Home = () => {
  const history = useHistory()
  console.log(history)
  return (
    <div>
      <h1>Route hook</h1>
      <h1>Home</h1>
      <button className="btn waves-effect waves-light" onClick={() => history.push('/about')} >
        Navigate to About
      </button>
    </div>
  )
}
const About = () => {
  const history = useHistory()

  return (
    <div>
      <h1>Route hook</h1>
      <h1>About</h1>
      <button className="btn waves-effect waves-light" onClick={() => history.goBack()} >
        Navigate Back
      </button>
    </div>
  )
}
const Profile = () => {
  const { name } = useParams()
  // const params =useParams()
  // console.log(params)
  return (
    <div>
      <h1>Route hook</h1>
      <h1>Profile {name}</h1>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/profile/:name" >
            <Profile />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
