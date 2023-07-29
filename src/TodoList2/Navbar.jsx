import {React} from "react"
import icon from "../images/react-icon.png"

function Navbar(){

    return(
        <nav className="nav-list">
            <img className="nav-img" src={icon} alt="Navbar React Icon"/>
            <h3 className="nav-header">ToDo List</h3>
            <h4 className="nav-right">React Practice of State</h4>
        </nav>
    )
}

export default Navbar