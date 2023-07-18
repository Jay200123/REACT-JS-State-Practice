import React, { useState } from "react";

function Box(boxes){

    const [box, setBox] = useState(boxes)

    function boxClick(){
        console.log("box clicked")
        setBox(data=>({...data, on : !data.on}))
    }

    const darkMode = box.on

    const bg = {
        backgroundColor: darkMode ? "#222222" : "transparent"
    }
    return(
        <div style={bg} className="box-container" key={box.id} onClick={boxClick}></div>
    )
}

export default Box