import { React, useState } from "react"
import Students from "../data/students"
import icon from "../images/download.png"

function Name(){

    const [name, setName] = useState("Name") //sets the current state to null

    function printName(){

        const randomName = Students

        const randomId = Math.floor(Math.random() * randomName.length)
        const names = randomName[randomId].name

        setName(names)
    }

    function clearName(){
        setName("Name") //changes the current State to "" or null using setName function 
    }

    // setName returns the name that was being printed inside the parenthesis when the functions are being envoked in the button 


    return(
        <div className="name-container">

            <div className="text-container">
                <div className="title-container">
                <img className="title-img" src={icon} alt="React Logo"/>
                <h3>Generate a Random Name!</h3>
                </div>
                <h4 className="text-header">{name}</h4>
            </div>          
            <button className="btn-form" onClick={printName}>Print Name</button>
            <button className="btn-form" onClick={clearName}>Clear Name</button>     
        </div>
    )

}

export default Name