import React, {useContext} from 'react'
import {Coder3} from './Coder3'
import {MyContext} from './App'


export const Coder2 = () => {
    const Myname = useContext(MyContext)
    return (
      <div>
        <h1>Coder 2 {Myname.name}</h1>
        <button onClick={()=>Myname.changeName({type: 'CHANGE_NAME', payload:"Younis Rahman"})}>Change NAme</button>
        <Coder3 />
      </div>
    )
  }
  
  