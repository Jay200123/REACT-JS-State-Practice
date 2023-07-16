import { React, useState } from "react"
import img1 from "../images/test.png"
import img2 from "../images/download (1).png"

function Profile(){


    const student = {
        fname:"Renyel Jay",
        lname:"Sioc",
        phone:"09308650272",
        email:"renyel123@gmail.com",
        isImages: true
    }

    const [data, setData] = useState(student)

    let isProfile = data.isImages ? img1 : img2

    function toogle(){
        
        setData(data=>{
            return {...data, isImages: !data.isImages}
        })
    }

    return(

        <div className="name-container">
            <img className="profile-img" src={isProfile} onClick={toogle} alt="Student Profile"/>
            <h3>{data.fname}</h3>
            <h3>{data.lname}</h3>
            <h3>{data.phone}</h3>
            <h3>{data.email}</h3>
        </div>

    )

}

export default Profile