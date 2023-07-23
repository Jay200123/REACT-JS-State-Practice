import React, {useState} from "react";
import Navbar from "./Navbar";
import List from "./List";
import ListData from "../data/list"


export default function Home(){

    const[list, setList] = useState(ListData)

    function checkToogle(id){
        // console.log(id)

        setList(prevList=>{
            
            return prevList.map((newList)=>{
                
                return newList.id === id ? {...newList, isDo: !newList.isDo} : newList
            })
        })
    }

    const newList = list.map((lists)=>{

        return <List {...lists} click={()=>checkToogle(lists.id)}/>

    })

    return(
        <div>
             <Navbar/>
        <main>
            {newList}
        </main>
        </div>
    )
}