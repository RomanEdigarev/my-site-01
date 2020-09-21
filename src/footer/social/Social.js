import React from "react";
import style from './Social.module.css'
import {Link} from "react-router-dom";

const Social = ({socialData}) => {

    return (
        <div className={style.footer__social}>
            <div>
                <h1 className={style.footer__socialTitle}>{socialData.socialTitle}</h1>
                <ul>
                    {
                        socialData.socialLinks.map(link => <li key={link}><Link className={style.footer__socialLink}>{link}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Social;