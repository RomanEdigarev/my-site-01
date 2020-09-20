import React from "react";
import style from './Navbar.module.css'
import NavbarTitle from "./NavbarTitle";
import {Link} from "react-router-dom";
import NavbarMenu from "./navbar-menu/NavbarMenu";


const Navbar = (props) => {

    return (
        <div className={style.navbar}>
            <Link to={'/'} className={style.navbar__link}>
                <NavbarTitle/>
            </Link>

            <NavbarMenu/>
        </div>
    )
}

export default Navbar;