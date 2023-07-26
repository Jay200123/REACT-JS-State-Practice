import {React, useState} from "react"
import icon from "../images/react-icon.png"

function Comments(){

    const[comment, setComment] = useState({

        name:"",
        email:"",
        subject:"",
        messages:""
    })

    function onClick(e){

        setComment(prevComment=>{

            return { ...prevComment, [e.target.name]: e.target.value }
            
        })
    }

    return(
        <div className="form-container">
            <div className="form-nav">
                <img className="form-img" src={icon} alt="React Forms"/>
                <h5>React Forms</h5>
            </div>

            <form>
                <div>
                <label>Name:</label>
                <input type="text" className="form-control" name="name" value={comment.name} onChange={onClick} placeholder="Your Name..."/>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" value={comment.email} onChange={onClick} placeholder="Your Email..."/>
                </div>

                <div>
                    <label>Subject</label>
                    <input type="text" className="form-control" name="subject" value={comment.subject} onChange={onClick} placeholder="Message Subject..."/>
                </div>

                <div>
                    <label>Message:</label>
                    <textarea className="text-forms" name="messages" value={comment.messages} onChange={onClick} placeholder="Your Message..."/>
                </div>
            </form>

            <div className="msg-box">
            <h3>{comment.name}</h3>
            <h3>{comment.email}</h3>
            <h3>{comment.subject}</h3>
            <h3>{comment.messages}</h3>
            </div>

        </div>
            )

}

export default Comments