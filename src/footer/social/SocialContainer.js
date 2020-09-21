import React from "react";
import Social from "./Social";
import {socialDataFour, socialDataOne, socialDataThree, socialDataTwo} from "./DataSocial";

const SocialContainer = (props) => {
    return (
        <>
            <Social socialData={socialDataOne}/>
            <Social socialData={socialDataTwo}/>
            <Social socialData={socialDataThree}/>
            <Social socialData={socialDataFour}/>
        </>
    )
}

export default SocialContainer;