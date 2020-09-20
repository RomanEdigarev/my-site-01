import React from "react";
import style from './Button.module.css'

const Button = ({btnText, isDark}) => {

    return (
        <div className={`${style.btn} + ${isDark ? style.btnForDark : style.btnForLight}`}>{btnText}</div>
    )
}

export default Button;
