import React from "react";

function Joke(joke){

    const Condition = joke.isClick

    const jokeStatus = Condition ? "Hide Joke" : "Show Joke"
    
    return(
        <div className="joke-container">
            <h4>{Condition && joke.count}</h4>
            <h5>{Condition && joke.setup}</h5>
            <ul>
                <li>{Condition && joke.punchline}</li>
            </ul>
            <button className="count-btn" onClick={joke.click}>{jokeStatus}</button>
        </div>
    )
}

export default Joke