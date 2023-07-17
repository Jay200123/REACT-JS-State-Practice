import React from "react";
import img1 from "../images/download (1).png"
import img2 from "../images/test.png"

function Image(data){

    const isProfile = data.isFilled ? img1 : img2

    return(
        <div>
            <img className="profile-img" src={isProfile} alt="Student Profile"/>
        </div>
    )

}

export default Image