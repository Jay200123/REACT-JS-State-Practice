import React, { useState } from "react";

function Ternary(){

    const [isCondition, setCondition] = useState("Your Answer")

    function yesClick(){
        setCondition(true)
    }

    function noClick(){
        setCondition(false)
    }



    return(
        <div className="name-container">
            <h3>Is State in React Necessary?</h3>
            <h3>{ isCondition ? "Yes" : "No" }</h3> 

            <button className="btn-form" onClick={yesClick}>Yes</button>
            <button className="btn-form" onClick={noClick}>No</button>
        </div>
    )
}

export default Ternary