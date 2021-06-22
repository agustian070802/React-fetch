// import package React
import React from 'react'

// import css
import "./navbar.css"

import { NavLink } from "react-router-dom"

// component react adalah sebuah function / class pada javascript yang akan me-Return code JSX

function Navbar() {

    return(
        <nav className="navbar">
            <div className="container-fluid">
                <h1 className="brand">DeDev</h1>   
                <div className="menu">
                    <NavLink to="/home" activeClassName="menu-item-active" >
                        <span className="menu-item">Home</span>
                    </NavLink>
                    <NavLink to="/about" activeClassName="menu-item-active" >
                        <span className="menu-item">About</span>
                    </NavLink>
                    <NavLink to="/project" activeClassName="menu-item-active" >
                        <span className="menu-item">Project</span>
                    </NavLink>
                    <NavLink to="/contact" activeClassName="menu-item-active" >
                        <span className="menu-item">Contact</span>
                    </NavLink>
                </div>
            </div>
        </nav>

    )
}
export default Navbar