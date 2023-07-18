import { React, useState } from "react"
import Boxes from "../data/boxes"
import Box from "./Box"

function Home(props){

    // console.log(props)
    const [box, setBox] = useState(Boxes)


    const newBox = box.map((square)=>{

        return <Box {...square}/>
    })

    return(

        <main>
            {newBox}
        </main>

    )
}

export default Home