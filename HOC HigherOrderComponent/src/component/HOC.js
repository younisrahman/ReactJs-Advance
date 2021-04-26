import React from 'react'

const HOC = (GetComponent) => {
    const NewComp = (props) => {
        return (
            <div style={{backgroundColor : "blue"}}>
                <GetComponent name="Younis" {...props}/>
            </div>
        )
    }
    return NewComp;
}

export default HOC;