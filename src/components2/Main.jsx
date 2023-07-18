import {React, useState} from "react"
import Header from "./Header"
import Body from "./Body"

function Main(){

    const [user, setUser] = useState("Jay")
    
    function changeName(){
        setUser("Renyel Jay")
    }

    function resetName(){
        setUser("Jay")
    }


    return(
        <div>
            <Header user = {user}/>
            <Body user2 = {user} change={changeName} reset={resetName}/>
        </div>
    )

}

export default Main