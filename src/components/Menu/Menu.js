import React from 'react';

import {lang} from "../../lang/lang";

export const Menu = ({changeUrl, curLang, ...restProps }) => {
    const url = restProps.curPage;
    return(
        <div className="menu">
                <ul>
                    <li onClick={()=>{changeUrl('/')}} className={ url=='/'? 'active': '' }>
                        <a>{lang.menuHome[curLang]}</a>
                    </li>
                    <li onClick={()=>{changeUrl('/cabinet')}} className={ url=='/cabinet'? 'active': '' }>
                        <a>{lang.menuCabinet[curLang]}</a>
                    </li>
                    <li onClick={()=>{changeUrl('/about')}} className={ url=='/about'? 'active': '' }>
                        <a>{lang.menuAboutUs[curLang]}</a>
                    </li>
                    <li onClick={()=>{changeUrl('/contacts')}} className={ url=='/contacts'? 'active': '' }>
                        <a>{lang.menuContacts[curLang]}</a>
                    </li>
                </ul>
            </div>
)
}