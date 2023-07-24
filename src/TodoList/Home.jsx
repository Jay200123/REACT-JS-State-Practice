import { React, useState } from "react";
import Navbar from "./Navbar";
import List3 from "./Lists3";
import Todo from "../data/todo"

function Home(){

    const[todo, setTodo] = useState(Todo)

    // creat two buttons 1 for showing first task and second for marking it as done or not

    function toogle(id){
        setTodo(oldTodo=>{
            
            return oldTodo.map((newToDo)=>{

                return newToDo.id === id ? {...newToDo, isDo: !newToDo.isDo} : newToDo 
            })
        })
    }

    const newTodo = todo.map((list)=>{
        return <List3 {...list} click={()=>toogle(list.id)}/>
    })

    return(
        <div>
            <Navbar/>
            {newTodo}
        </div>
    )
}

export default Home
