import React from 'react'

import HOC from "./HOC"

class Header extends React.Component{
render() {
    console.log(this.props);

    return (
        <div>
            <h1>Younis Rahman</h1>
            
        </div>
    )
}
}
export default HOC(Header);