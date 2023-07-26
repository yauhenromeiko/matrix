import React from 'react';

import ImgMatrix1 from '../../assets/img/matrix.png';
import ImgMatrix2 from '../../assets/img/svgmatrix 2.svg';

import {lang} from "../../lang/lang";


export const Matrix = ({value, appearance, size="md", curLang, className, ...restProps}) => {

    if (appearance == 'white') {
        return(
            <>
                <img src={ImgMatrix1} alt="" />
            </>
        )
    }else if (appearance == 'default') {
        return(
            <>
                <img src={ImgMatrix2} alt="" />
            </>
        )
    }else {
        return(
            <>
                <img src={ImgMatrix2} alt="" />
            </>
        )
    }
    
}