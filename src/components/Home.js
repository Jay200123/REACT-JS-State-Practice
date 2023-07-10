import { React, useState } from 'react'

function Home(){
    

    const title = useState("This is A Home Page Component")

    const [question, setQuestion] = useState("")

    function nextQuestion(){
        setQuestion("Is State in React Necessary?")
    }


    const [answer, setAnswer] = useState("")

    function yesClick(){
        setAnswer("That's Right! State are necesary in Order to Manage Data being used in React")
    }

    function noClick(){
        setAnswer("Wrong... Answer State are necesary in order to manage data being used in React")
    }

    function clearClick(){
        setAnswer("")
    }
    

    return(
        <div className='container'>
            <h2>{title}</h2>
            <h5 className='question-header' onMouseOver={nextQuestion}>Question:{question}</h5>

            <h3 className='answer-header'>{answer}</h3>

            <button className='btn-form' onClick={yesClick}>Yes</button>
            <button className='btn-form' onClick={noClick}>No</button>
            <button className='btn-form' onClick={clearClick}>Clear</button>
        </div>
    )
}

export default Home