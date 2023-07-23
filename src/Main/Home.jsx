import {React, useState} from "react"
import Box from "../data/boxes"
import Boxes from "./Boxes"

function Home(){

    const[box, setBox] = useState(Box)

    function toogle(id){
        setBox(square=>{
            return square.map((newSquare)=>{

                return newSquare.id === id ? {...newSquare, on: !newSquare.on} : newSquare
            })
        })
    }

    const newBox  = box.map((obj)=>{

        return <Boxes {...obj} click={toogle}/>
    })

    return(
       <main>{newBox}</main>
    )
}

export default Home