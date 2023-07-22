import React from "react";

function Boxes(data){
    console.log(data)

    const value = data.on

    const bg = {
        
        backgroundColor: value ? "#222222" : "transparent"
    }

    return(
        <div style={bg} className="box-container" onClick={()=>data.click(data.id)}></div>
    )
}

export default Boxes