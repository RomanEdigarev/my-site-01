import React from "react";
import style from './Block.module.css'
import Button from "../button/Button";

const Block = ({isDark, blockData}) => {

    return (
        <div className={isDark ? style.blockDark : style.blockLight}>
            <div className={style.blockText__wrapper}>
                <div className={style.block__title}>
                    {blockData.titleText}
                </div>
                <div className={style.block__subtitle}>
                    {blockData.subtitleText}
                </div>
                <div className={style.block__text}>
                    {blockData.text}
                </div>
                <Button btnText={blockData.btnText} isDark={isDark}></Button>

            </div>
            <div className={style.blockImg__wrapper}>
                <img src={blockData.image} alt={blockData.altImg} className={style.blockImg}/>
            </div>

        </div>
    )
}

export default Block;