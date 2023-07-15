import React, { useState } from "react";

function Ternary(){

    // const [isCondition, setCondition] = useState("Your Answer")

    // function yesClick(){
    //     setCondition(true)
    // }

    // function noClick(){
    //     setCondition(false)
    // }

    // const [isGoingOut, setGoingOut] = useState(true)

    // function onClick(){

    //     setGoingOut(isGoingOut => !isGoingOut)
    // }

    const items = ['item1','item2']

    const [item, setItems] = useState(items)

    function addItems(){

        setItems(item => {
            return[...item, `item${item.length + 1}`]
        })
    }


    return(

        // <div className="name-container">
        //     <h3>Is State in React Necessary?</h3>
        //     <h3>{ isGoingOut ? "Yes" : "No" }</h3> 

        //     <button className="btn-form" onClick={onClick}>Answer</button>
        //     {/* <button className="btn-form" onClick={noClick}>No</button> */}
        // </div>

        <div className="name-container">

            <div className="text-container">
               {item}
            </div>

            <button className="btn-form" onClick={addItems}>Add Items</button>
        </div>


    )
}

export default Ternary