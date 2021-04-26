import React from 'react';

// const MyContext = React.createContext("Asu") // With Default value
const MyContext = React.createContext()

const Coder3 = () => {
    return (
        <MyContext.Consumer>
            {
                (data) => {
                    return (
                        <React.Fragment>
                            <h1>Name is {data.name}</h1>
                            <h1>Age is {data.age}</h1>
                        </React.Fragment>
                    )
                }
            }
        </MyContext.Consumer>
    )
}

export default Coder3