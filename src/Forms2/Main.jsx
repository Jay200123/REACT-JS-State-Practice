import {React, useState} from "react"
import Navbar from "./Navbar"
import icon from "../images/react-icon.png"

function Main(){

    const [forms, setForms] = useState({

        fname:"",
        middle:"",
        lname:"",
        comments:"",
        isFriendly:true

    })

    function onClick(e){

        const {name, value, type, checked} = e.target

        setForms(prevForms=>{

            return {...prevForms, [name]: type=== "checkbox" ? checked : value }
            // return {...prevForms, [e.target.name]: e.target.value}
        })
        
    }

    console.log(forms)

    return(
        <main>
            <Navbar/>
            <div className="forms-container">

                <div className="form-headers">
                    <img className="forms-img" src={icon} alt="React Icon"/>
                    <h3>React Forms</h3>
                </div>

                <form>
                    <div>
                        <label>First Name</label>
                        <input type="text" className="form-control" name="fname" value={forms.fname} onChange={onClick}  placeholder="Input Text"/>
                    </div>

                    <div>
                        <label>Middle Name</label>
                        <input type="text" className="form-control" name="middle" value={forms.middle} onChange={onClick}  placeholder="Input Text"/>
                    </div>

                    <div>
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="lname" value={forms.lname} onChange={onClick}  placeholder="Input Text"/>
                    </div>

                    <div>
                        <label>Comments</label>
                        <textarea className="text-control" name="comments" value={forms.comments} onChange={onClick}  placeholder="Comments and Suggestions..."/>
                    </div>

                    <div>
                        <input type="checkbox" name="isFriendly" checked={forms.isFriendly} onChange={onClick}/>
                        <label>Are you friendly</label>
                    </div>
                </form>
            </div>

         <div className="msg-container">
           <h3>{forms.fname}</h3>
            <h3>{forms.middle}</h3>
            <h3>{forms.lname}</h3>
            <h3>{forms.comments}</h3>
         </div>
        </main>
    )
    
}

export default Main