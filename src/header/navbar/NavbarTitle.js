import React from "react";
import style from './NavbarTitle.module.css'
import {IoLogoFreebsdDevil} from 'react-icons/all';
import { IconContext } from "react-icons"

const NavbarTitle = (props) => {
    return (
        <IconContext.Provider value={{color: '#fff', size: '2rem'}}>
            <div className={style.navbarTitle__container}>
                <IoLogoFreebsdDevil className={style.navbarTitle__icon}/>
                <h1 className={style.navbarTitle}>My site-01</h1>
            </div>
        </IconContext.Provider>
    )
}

export default NavbarTitle;