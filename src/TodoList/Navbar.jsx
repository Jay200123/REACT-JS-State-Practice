import React from "react";
import logo from "../images/react-icon.png"

function Navbar(){

    return(
        <nav className="navlist">
            <img className="nav-logo" src={logo} alt="Todo List"/>
            <h5 className="nav-header">To Do List using React JS</h5>
        </nav>
    )
}

export default Navbar