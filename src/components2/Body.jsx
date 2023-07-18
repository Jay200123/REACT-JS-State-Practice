import React from "react";

function Body(data){
    console.log(data)

    return(
        <section>
            <h1>Welcome Back! {data.user2}</h1>
            <button onClick={data.change}>change name</button>
            <button onClick={data.reset}>reset name</button>
        </section>
    )
}

export default Body