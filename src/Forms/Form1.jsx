import {React, useState} from "react"
import icon from "../images/react-icon.png"

function FormOne(){

    const[name, setName] = useState({
        fname:"",
        middle:"",
        lname:""
        
    })

    console.log(name)

    function onClick(e){

        setName(prevName=>{

            return {...prevName, [e.target.name]: e.target.value}
        })
    }

    return(

           <div className="form-container">
            <div className="form-nav">
                <img className="form-img" src={icon} alt="React"/>
                <h3>React Forms</h3>
            </div>
            <form>
                <div>
                <label>First Name</label>
                <input type="Text" className="form-control" name="fname" onChange={onClick} placeholder="Input First Name"/>
                </div>

                <div>
                <label>Middle Name</label>
                <input type="Text" className="form-control" name="middle" onChange={onClick} placeholder="Input Middle Name"/>
                </div>

                <div>
                <label>Last Name</label>
                <input type="Text" className="form-control" name="lname" onChange={onClick} placeholder="Input Last Name"/>
                </div>
            </form>

            <div className="answer-container">
                <h3 className="form-header">Hi there! Your Name is:</h3>
                <p>{name.fname}, {name.middle}. {name.lname}</p>
            </div>
            
            </div>

    )
}

export default FormOne