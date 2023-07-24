import { React, useState } from "react"
import Joke from "../Jokes/Joke"
import Navbar from "./Navbar"
import data from "../data/jokes"

function Home(){

    const[joke, setJoke] = useState(data)

    function toogle(id){
        
        setJoke(oldJokes=>{

            return oldJokes.map((newJwk)=>{

                return newJwk.id === id ? {...newJwk, isClick: !newJwk.isClick} : newJwk
                
            })
        })
    }

    const newJokes = joke.map((jokes)=>{

        return <Joke {...jokes} click={()=>toogle(jokes.id)}/>
    })
    return(
        <div>
            <Navbar/>
            {newJokes}
        </div>
    )

}

export default Home