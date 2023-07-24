import { React, useState } from "react"
import Navbar from "../List/Navbar"
import List2 from "../List2/List2"
import List from "../data/list"

function Main(){

    const [list, setList] = useState(List)

    function toogle(id){

        setList(oldList=>{

            return oldList.map((newList)=>{

                return newList.id === id ? {...newList, isDo: !newList.isDo} : newList
            })
        })

    }

    const oldList = list.map((lists)=>{

        return <List2 {...lists} click={()=>toogle(lists.id)}/>

    })

    return(
        <div>
            <Navbar/>
            <main>{oldList}</main>
        </div>
    )
}

export default Main