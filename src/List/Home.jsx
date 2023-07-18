import React, {useState} from "react";
import Navbar from "./Navbar";
import List from "./List";
import ListData from "../data/list"


export default function Home(){

    const[list, listData] = useState(ListData)

    const newList = list.map((lists)=>{

        return <List {...lists}/>

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