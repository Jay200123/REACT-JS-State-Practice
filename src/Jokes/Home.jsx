import { React, useState } from "react"
import data from "../data/jokes"
import Joke from "../Jokes/Joke"

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
            {newJokes}
        </div>
    )

}

export default Home