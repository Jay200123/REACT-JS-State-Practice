import React from "react";
import Message from "./Message";

function TestComponent(){

    function messageMe(){
        console.log(`Hello There!`)
    }

    return(
        <div className="container">
            <Message msg={messageMe}/>
        </div>
    )
}

export default TestComponent