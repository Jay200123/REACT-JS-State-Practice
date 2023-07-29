import { React, useState } from "react"
import Navbar from "./Navbar"
import List from "./List"
import List2 from "../data/list2"

function Main(){

    const [list, setList] = useState(List2)

    function toogle(id){

        setList(prevList =>{

            return prevList.map((newList)=>{

                return newList.id === id ? {...newList, isDone: !newList.isDone} : newList
            })
        })
    }

    const newList = list.map((lists)=>{

        return <List {...lists} click={()=>toogle(lists.id)}/>
    })

    return(
        <main>
            <Navbar/>
            {newList}
        </main>
    )
}

export default Main