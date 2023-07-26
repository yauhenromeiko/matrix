import React from 'react';

import { lang } from "../../lang/lang";

import './Footer.styles.css';

export const Footer = ({curLang}) => {
    return (
        <div className="footer">
            <div className="container">
                <div className="text">
                    <p>{lang.footerText1[curLang]}</p>
                    <p>{lang.footerText2[curLang]}</p>
                    <p>{lang.footerText3[curLang]}</p>
                </div>
            </div>
        </div>
    )
}