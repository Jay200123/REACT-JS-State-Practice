import {React, useState} from 'react'
import Students from '../data/students'

function Names2(){

    const [guess, setGuess] = useState("GENERATE RANDOM NAME")

    function generateClick(){

        const randomName = Students
        // console.log(randomName)
        const randomId = Math.floor(Math.random() * randomName.length)
        const generate = randomName[randomId].name

        return setGuess(generate)
    }

    function resetClick(){

        return setGuess("GENERATE RANDOM NAME")
    }

    return(
        <div className='name-container'>
            <h3>{guess}</h3>

            <button className='btn-form' onClick={generateClick}>Generate</button>
            <button className='btn-form' onClick={resetClick}>Clear</button>
        </div>
    )
}

export default Names2