import React from "react";

function Joke(joke){

    const Condition = joke.isClick
    return(
        <div className="joke-container">
            <h4>{joke.count}</h4>
            <h5>{joke.setup}</h5>
            <ul>
                <li>{Condition && joke.punchline}</li>
            </ul>
            <button className="count-btn" onClick={joke.click}>Guess</button>
        </div>
    )
}

export default Joke