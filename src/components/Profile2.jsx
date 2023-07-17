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

    return(
        <div className="name-container">
            <Image isFilled={data.isImage}/>
            <div className="btn-container">
                <button className="btn-form" onClick={flipClick}>FLIP</button>
            </div>
        </div>
    )
}

export default Profile2