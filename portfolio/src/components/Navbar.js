import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-style">
            <ul>
                <li>
                    {/* <Link to="/">Home</Link> */}
                    <NavLink exact to="/" activeStyle={{ fontWeight: "bold", color: "red" }} >Home</NavLink>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar