import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul> 
            </div>
        </nav>
    )
}

export default NavBar