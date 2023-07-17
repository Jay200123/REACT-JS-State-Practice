import React from "react";

function Message(data){
    return(
        <div className="name-container"> 
            <h5>Testing Message!</h5>
            <button className="btn-form" onClick={data.msg}>Message</button>
        </div>
    )
}

export default Message