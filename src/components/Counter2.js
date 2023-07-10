import { React, useState } from "react"

function CounterTwo(data){

    // console.log(data)

    const [count, setCount] = useState(0)

    function addClick(){
         
        const add = (value)=>{

            const result = value + 1
            return result
        }

        setCount(add)
    }

    function minusClick(){

        const minus = (value)=>{

            const result = value - 1
            return result
        }

        setCount(minus)
    }

    function clearClick(){
        setCount(0)
    }

    return(
        <div className="count-container">
            <h2>{data.title}</h2>
            <h3>{data.description}</h3>

            <div className="counter">
                <h4>{count}</h4>
            </div>

            <div className="btn-container">
                
                <button className="count-btn" onClick={addClick}>+</button>
                <button className="count-btn" onClick={minusClick}>-</button>
                <button className="count-btn" onClick={clearClick}>clear</button>
            </div>

        </div>
    )

}

export default CounterTwo