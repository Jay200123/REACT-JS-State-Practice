import { React, useState } from "react"
import img1 from "../images/test.png"
import img2 from "../images/download (1).png"

function Profile(){

    const student = {
        fname:"Renyel Jay",
        lname:"Sioc",
        course:"Bachelor of Science In Information Technology",
        email:"renyel123@gmail.com",
        isImage:true
    }

    const [info, setInfo] = useState(student)

   let isProfile = info.isImage ? img1 : img2

   function onToogle(){

    setInfo(info=>{
        return {...info, isImage:!info.isImage}
    })

   }

    return(
        <div className="name-container"> 
            <h3>{info.fname}  {info.lname}</h3>
            <h3>{info.course}</h3>
            <h3>{info.email}</h3>

        </div>
    )

}

export default Profile