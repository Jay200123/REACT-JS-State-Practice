import React from "react";
import logo from "../images/download (2).png"

function Navbar(){

    return(
        <nav className="nav-list">
            <img className="nav-logo" src={logo} alt="Todo List"/>
            <h5 className="nav-header">To Do List using React JS</h5>
        </nav>
    )
}

export default Navbar