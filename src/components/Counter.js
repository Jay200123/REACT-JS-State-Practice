import { React, useState } from "react";

function Counter(){


    const [ count, setCounter ] = useState(0) //sets the count to 0

    function plusClick(){

        // value are the count variable that was being pass as the parameter to the addition function 

        const addition = (value)=>{ //uses a value as the addition parameter

            const total = value + 1
            return total
        }

        setCounter(addition) //updating the state by adding 1

    }



    function minusClick(){
    
        const minus = (value)=>{ //uses a value as the addition parameter

            const total = value - 1
            return total
        }

       
        setCounter(minus) //updating the state by subtracting 1
    }


    function clearClick(){

        setCounter(0) //sets the state to 0

    }


    return(

        <div className="count-container">

            <h3>Hello  there!</h3>
            <h5>Perform A Number Count Using State in React</h5>
            <div className="counter">
                
                <h4>{count}</h4>

            </div>

            <div className="btn-container">

            <button className="count-btn" onClick={plusClick}> Add (+)</button>
            <button className="count-btn" onClick={minusClick}>Minus (-)</button>
            <button className="count-btn" onClick={clearClick}>Clear</button>

            </div>

        </div>

    )
}

export default Counter