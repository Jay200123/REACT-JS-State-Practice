import React, { useState } from "react";
import check from "../images/download (2).png"
import x from "../images/download (3).png"


function List3(todo){

    const[task, setTask] = useState(false)

    function showToogle(){
        setTask(task => !task)
    }

    const value = todo.isDo
    const status = value ? check : x
    const msg = value ? "Done!" : "Not Yet!"

    const color = {
        backgroundColor: value ? "grey" : "transparent",
        color: value ? "white" : "none"
    }

    return(
        <div className="task-container">
            <button className="count-btn" onClick={showToogle}>Show Task</button>

           {task && <div style={color} className="list-container">

              <img className="list-img" src={status} onClick={todo.click} alt="To Do List"/>
              <h6>{msg}</h6>
              <ul>
              <li>{task && todo.task}</li>
              </ul>

           </div> }

        </div>
    )
}

export default List3