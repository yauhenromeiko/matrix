import React from 'react';

import { CirclesToMatrix } from '../CirclesToMatrix/CirclesToMatrix';

import ImgMatrix1 from '../../assets/img/matrix.png';
import ImgMatrix2 from '../../assets/img/svgmatrix 2.svg';

import {lang} from "../../lang/lang";

import './Matrix.style.css';

export const Matrix = ({value, appearance, size="md", curLang, combinations, className, ...restProps}) => {

    if (appearance == 'white') {
        return(
            <div className='matrix-diagram'>
                <div className='matrix-diagram__svg'>
                    <img src={ImgMatrix1} alt="" />
                </div>
                <CirclesToMatrix combinations={combinations}/>
            </div>
        )
    }else if (appearance == 'default') {
        return(
            <div className='matrix-diagram'>
                <div className='matrix-diagram__svg'>
                    <img src={ImgMatrix2} alt="" />
                </div>
                <CirclesToMatrix combinations={combinations}/>
            </div>
        )
    }else {
        return(
            <div className='matrix-diagram'>
                <div className='matrix-diagram__svg'>
                    <img src={ImgMatrix2} alt="" />
                </div>
                <CirclesToMatrix combinations={combinations}/>
            </div>
        )
    }
    
}