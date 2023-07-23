import { React } from "react"
import check from "../images/download (2).png"
import x from "../images/download (3).png"

export default function List(data){

    const value = data.isDo

    const taskCheck = value ? check : x
    const taskMsg = value ? "Done!" : "Not Yet"

    const bg = {
        backgroundColor: value ? "grey" : "transparent"
    }

    return(
        <div style={bg} className="list-container" key={data.id}>
            <img className="list-img" src={taskCheck} alt="List Check" onClick={data.click}/>
            <h4>{taskMsg}</h4>
            <ul>
                <li>{data.task}</li>
            </ul>
        </div>
    )
}