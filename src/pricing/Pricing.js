import React from "react";
import Card from "./card/Card";
import style from './Pricing.module.css'
import {cardDataOne, cardDataThree, cardDataTwo} from "./card/CardData";

const Pricing = (props) => {

    return (
        <div className={style.pricing__container}>
            <div className={style.pricing__title}>Pricing</div>
            <Card cardData={cardDataOne}/>
            <Card cardData={cardDataTwo}/>
            <Card cardData={cardDataThree}/>
        </div>
    )
}

export default Pricing;