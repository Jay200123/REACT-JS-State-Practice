import {React, useState} from 'react'
import Students from '../data/students'

function Names2(items){
    console.log(items)

    const [guess, setGuess] = useState("GENERATE RANDOM NAME")

    function generateClick(){

        const randomName = Students
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

            <ul>
                <li>{items[0]}</li>
                <li>{items[1]}</li>
                <li>{items[2]}</li>
                <li>{items[3]}</li>
                <li>{items[4]}</li>
            </ul>

            <button className='btn-form' onClick={generateClick}>Generate</button>
            <button className='btn-form' onClick={resetClick}>Reset</button>
        </div>
    )
}

export default Names2