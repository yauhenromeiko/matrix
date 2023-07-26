import React from "react";

import { PageContainer } from "../../components/PageContainer/PageContainer";
import { Tariffs } from '../../components/Tariffs/Tariffs';

import { lang } from "../../lang/lang";

export const AboutPage = ({ ...restProps}) => {
    const curLang = restProps.curLang;
    return (
        <>
        <PageContainer {...restProps}>
        <div className="container">
            <h1>{lang.aboutUs[restProps.curLang]}</h1>
        
            <p>{lang.demoText[restProps.curLang]}</p>

        </div>
    
        <Tariffs { ...restProps}/>
        </PageContainer>
    </>
    )
}