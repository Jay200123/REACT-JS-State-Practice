import { React }  from "react"
import icon from "../images/react-icon.png"
function Navbar(){

    return(
        <nav className="nav-forms">
            <img className="forms-img" src={icon} alt="React Icon"/>
            <h3 className="forms-header">Create Forms Using React</h3>
        </nav>
    )
}

export default Navbar