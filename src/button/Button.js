import React from "react";
import style from './Button.module.css'
import {Link} from "react-router-dom";

const Button = ({btnText}) => {

    return (
        <Link to={`/${btnText}`} className={style.btn}>{btnText}</Link>
    )
}

export default Button;
