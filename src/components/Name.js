import { React, useState } from "react"

function Name(){

    const [name, setName] = useState("") //sets the current state to null

    function printName(){
        return setName("RenyelJay") //changes the current State to print a Name using setName function 
    }

    function clearName(){
        setName("") //changes the current State to "" or null using setName function 
    }

    // setName returns the name that was being printed inside the parenthesis when the functions are being envoked in the button 


    return(
        <div className="name-container">

            <div className="text-container">
                <h3>Print A Name</h3>
                <h4>Name: {name}</h4>
            </div>

            <div className="btn-container"> 
            <button className="btn-form" onClick={printName}>Print Name</button>
            <button className="btn-form" onClick={clearName}>ClearName</button>
            </div>
        
        </div>
    )

}

export default Name