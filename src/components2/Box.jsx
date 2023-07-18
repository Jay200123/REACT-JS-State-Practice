import React, { useState } from "react";

function Box(box){

    const[on, setOn] = useState(box)

    function Click(){
        setOn(prevOn=> ({...prevOn, on: !prevOn.on}) )
    }

    const styleMode = on.on

    const styles = {
        backgroundColor: styleMode ? "#222222" : "transparent"
    }
    return(
        <div style={styles} className="box-container" key={box.id} onClick={Click}></div>
    )
}

export default Box