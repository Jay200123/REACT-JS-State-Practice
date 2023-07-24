import React from "react";
import icon from "../images/react-icon.png"

function Navbar(){

    return(
        <nav className="navlist">
            <img className="nav-logo" src={icon} alt="Navigation Bar"/>
            <h4 className="nav-header">Jokes List using React</h4>
        </nav>
    )
}

export default Navbar