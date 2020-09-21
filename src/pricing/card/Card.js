import React from "react";
import style from './Card.module.css'
import Button from "../../button/Button";

const Card = ({cardData}) => {

    return (
        <div className={`${style.card} ${cardData.isDark ? style.cardDark : style.cardBlue}`}>
            <div className={style.card__name}>{cardData.cardName}</div>
            <div className={style.card__price}>{cardData.cardPrice}</div>
            <div className={style.card__subtitle}>{cardData.cardSubtitle}</div>
            <div className={style.card__description}>
                <ul>
                    <li>{cardData.cardDescriptionOne}</li>
                    <li>{cardData.cardDescriptionTwo}</li>
                    <li>{cardData.cardDescriptionThree}</li>
                </ul>
            </div>
            <div><Button isDark={cardData.isDark} btnText={cardData.btnText}></Button></div>
        </div>
    )
}

export default Card;