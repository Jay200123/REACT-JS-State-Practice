import {React, useState} from "react"
import img1 from "../images/download (1).png"
import Image from "./ProfImg"


function Profile2(){


    const student = {

        fname:"Renyel Jay",
        lname:"Sioc",
        course:"BSIT-NS-3A",
        isImage:false
    }

    const [data, setData] = useState(student)

    function flipClick(){

        setData(data=>({...data, isImage: !data.isImage}))
    }

    // flipClick can be pass as a custom props into the Image component then you can use it as a value to your clickHandler events

    return(
        <div className="name-container">
            <Image isFilled={data.isImage} click={flipClick}/> 
            <div className="btn-container">
            </div>
        </div>
    )
}

export default Profile2