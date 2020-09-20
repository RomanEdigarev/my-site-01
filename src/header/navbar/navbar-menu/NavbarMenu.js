import React from "react";
import style from './NavbarMenu.module.css'
import {Link} from "react-router-dom";
import Button from "../../../button/Button";

const NavbarMenu = (props) => {

    return (
        <div className={style.navbarMenu}>
            <Link to={'/home'} className={style.navbarMenu__items}>Home</Link>
            <Link to={'services'} className={style.navbarMenu__items}>Services</Link>
            <Link to={'/products'} className={style.navbarMenu__items}>Products</Link>
            <Link to={'/sign-up'} className={style.navbarMenu__items}><Button btnText={'Sign up'} isDark={true}/></Link>
        </div>
    )
}

export default NavbarMenu;