import React from "react";
import style from './Footer.module.css'
import Button from "../button/Button";
import {Link} from "react-router-dom";
import SocialContainer from "./social/SocialContainer";

const Footer = (props) => {

    return (
        <div className={style.footer}>
            <div className={style.footer__container}>
                <div className={style.footer__subscribe}>
                    <h2 className={style.footer__subscribeTitle}>Join our exclusive membership to receive the latest
                        news and trends</h2>
                    <h3 className={style.footer__subscribeSubtitle}>You can unsubscribe at any time.</h3>
                    <form className={style.footer__subscribeForm}>
                        <input type="text" placeholder={'You Email'}/>
                        <Button isDark={true} btnText={'Subscribe'}></Button>
                    </form>
                </div>

                <SocialContainer/>
            </div>
        </div>
    )
}

export default Footer;