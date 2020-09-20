import React from "react";
import style from './Header.module.css'
import Navbar from "./navbar/Navbar";

const Header = (props) => {

    return (
        <div className={style.header}>
            <Navbar/>
        </div>
    )
}

export default Header;