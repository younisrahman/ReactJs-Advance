import React, {useContext} from 'react'
import {MyContext} from './App'



export const Coder3 = () => {
    const Myname = useContext(MyContext)
    return (
      <div>
        <h1>Coder 3 {Myname.name}</h1>
      </div>
    )
  }
  
  