import React from "react";
import Block from "../block/Block";
import {blockDataFour, blockDataOne, blockDataThree, blockDataTwo} from "../block/dataBlocks/DataBlocks";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Pricing from "../pricing/Pricing";
import Footer from "../footer/Footer";

const Home = (props) => {
    return (
        <>
            <Block isDark={true} blockData={blockDataOne}/>
            <Block isDark={false} blockData={blockDataTwo}/>
            <Block isDark={true} blockData={blockDataThree}/>
            <Pricing/>
            <Block isDark={true} blockData={blockDataFour}/>

        </>
    )
}

export default Home;