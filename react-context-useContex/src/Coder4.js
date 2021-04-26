import React from 'react';

// const MyContext = React.createContext("Asu") // With Default value
const MyContext = React.createContext()

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

export default Coder4
