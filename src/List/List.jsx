import { React, useState } from "react"
import check from "../images/download (2).png"
import x from "../images/download (3).png"

export default function List(data){

    const [info, setInfo]  = useState(data)

    const value = info.isDo

    const taskCheck = value ? check : x
    const taskMsg = value ? "Done!" : "Not Yet"

    const bg = {
        backgroundColor: value ? "grey" : "transparent"
    }

    function clickTask(){
        // console.log("You've Just clicked me!")
        setInfo(info=>({...info, isDo : !info.isDo}))
    }

    return(
        <div style={bg} className="list-container" key={data.id}>
            <img className="list-img" src={taskCheck} alt="List Check" onClick={clickTask}/>
            <h4>{taskMsg}</h4>
            <ul>
                <li>{data.task}</li>
            </ul>
        </div>
    )
}