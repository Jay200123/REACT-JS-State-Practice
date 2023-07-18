import { React, useState } from "react"
import Boxes from "../data/boxes"
import Box from "./Box"

function Home(){

    const [squares, setSquare] = useState(Boxes)

    const newSquare = squares.map((box)=>{
        return <Box {...box}/>
    })
    
    return(
        <main>
            {newSquare}
        </main>
    )
}

export default Home