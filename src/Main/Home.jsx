import {React, useState} from "react"
import Box from "../data/boxes"
import Boxes from "./Boxes"

function Home(){

    const[box, setBox] = useState(Box)

    function toogle(id){
        
        setBox(box=>{

            const newBox = []

            for(let i = 0; i < box.length; i++){
                
                const curBox = box[i]

                if(curBox.id === id){

                    const updBox = {
                        ...curBox, 
                        on: ! curBox.on
                    }

                    newBox.push(updBox)
                }else{
                    newBox.push(curBox)
                }
            }

            return newBox
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