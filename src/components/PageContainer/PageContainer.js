import React from 'react';

import { Header } from "../Header/Header";
import { Footer } from '../Footer/Footer';

export const PageContainer = ({children, ...restProps}) => {
    return(
        <>
            <Header {...restProps}/>
                {children}
            <Footer {...restProps}/>
        </>
    )
}
