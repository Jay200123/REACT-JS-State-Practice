import { React, useState } from "react";
import Count from "./Count";

function Counter(){

    const [count, setCounter] = useState(0)

    function addClick(){
        
        setCounter(prevNum => prevNum + 1)
    }

    function minusClick(){

        setCounter(prevNum => prevNum - 1)
    }

    function clearClick(){
        setCounter(0)
    }



    return(

        <div className="count-container">

            <h3>Hello  there!</h3>
            <h5>Perform A Number Count Using State in React</h5>
            <Count number={count}/>
            <div className="btn-container">
            <button className="count-btn" onClick={addClick}> Add (+)</button>
            <button className="count-btn" onClick={minusClick}>Minus (-)</button>
            <button className="count-btn" onClick={clearClick}>Clear</button>

            </div>

        </div>

    )
}

export default Counter