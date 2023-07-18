import React from "react";
import logo from "../images/rH6yDfWyJ.png"

export default function Navbar(){
    
    return(
        <nav className="navlist">
            <img className="nav-logo" src={logo} alt="Navigational Bar"/>
            <h5 className="nav-header">To Do List</h5>
        </nav>
    )
}