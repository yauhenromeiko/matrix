import React from 'react';

import logoRU from '../../assets/img/logo.svg';
import logoEn from '../../assets/img/logo.svg';

export const Logo = ({curLang , changeUrl}) => {
    return(
        <div className="logo">
            <img 
                src={curLang === 'ru' ? logoRU : logoEn} 
                alt="" 
                onClick={()=>{changeUrl('/')}}
            />
        </div>
    )
}