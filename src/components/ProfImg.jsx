import React from "react";
import img1 from "../images/download (1).png"
import img2 from "../images/test.png"

function Image(data){

    const isProfile = data.isFilled ? img1 : img2

    // console.log(data)
    return(
        <div>
            <img className="profile-img" src={isProfile} alt="Student Profile"/>
            <button className="btn-form" onClick={data.click}>FLIP</button>
        </div>
    )

}

export default Image