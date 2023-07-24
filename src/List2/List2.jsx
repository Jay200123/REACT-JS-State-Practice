import { React } from "react"
import check from "../images/download (2).png"
import x from "../images/download (3).png"


function List(list){

    const value = list.isDo

    const taskCheck = value ? check : x

    const taskMsg = value ? "Done" : "Not Yet"

    const bg = {
        
        backgroundColor: value ? "grey" : "transparent"

    }


    return(
        <div style={bg} className="list-container">
            <img className="list-img" src={taskCheck} onClick={list.click} alt="List Status"/>
            <h3>{taskMsg}</h3>
            <ul>
                <li>{list.task}</li>
            </ul>
        </div>
    )
}

export default List