import {React, useState} from 'react'
import Students from '../data/students'

function Names2(students){
    console.log(students)


    const [guess, setGuess] = useState("GENERATE RANDOM NAME") //current state of the data

    function generateClick(){

        const randomName = Students
        const randomId = Math.floor(Math.random() * randomName.length)
        const generate = randomName[randomId].name

        return setGuess(generate) //updates the current State of the data through click event 
    }

    function resetClick(){

        return setGuess("GENERATE RANDOM NAME") //update the current state to GENERATE RANDOM NAME
    }

    return(
        <div className='name-container'>
            <h5 className='list-container'>These are the Names that will be randomly generated</h5>
            <ul>
               <li>{students[0].name}</li>
               <li>{students[1].name}</li>
               <li>{students[2].name}</li>
               <li>{students[3].name}</li>
            </ul>

            <h3>{guess}</h3>

            <button className='btn-form' onClick={generateClick}>Generate</button>
            <button className='btn-form' onClick={resetClick}>Reset</button>
        </div>
    )
}

export default Names2