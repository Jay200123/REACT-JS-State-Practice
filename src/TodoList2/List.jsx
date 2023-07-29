import {React} from "react"
import check from "../images/download (2).png"
import x from "../images/download (3).png"

function List(data){

   const value = data.isDone

    const status = value ? "Done" : "Not Yet"

    const icon = value ? check : x

    const bg = {
        backgroundColor: value ? "grey" : "transparent"
    }

    const statMsg = {
        color: value ? "lightgreen" : "red"
    }

    return(
        <div className="list-container">
             <h4 style={statMsg}>{status}</h4>
                 <h3 className="list-header">{data.subject}</h3>

                     <div className="status-list" style={bg}>
                         <img className="list-img" src={icon} alt="Status" onClick={data.click}/>
                             <ul>
                                 <li>{data.task}</li>
                             </ul>
                    </div>
        </div>
    )
}

export default List