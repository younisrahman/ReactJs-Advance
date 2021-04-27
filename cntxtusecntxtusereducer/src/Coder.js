import React, {useContext} from 'react'

import {Coder2} from './Coder2'
import {MyContext} from './App'


export const Coder = () => {
    const Myname = useContext(MyContext)
    return (
      <div>
        <h1>Coder 1 {Myname.name}</h1>
        <Coder2 />
      </div>
    )
  }