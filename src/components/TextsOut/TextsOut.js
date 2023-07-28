import React from 'react';
import parse from 'html-react-parser';

import { Button } from '../shared/Button/Button';
import { Menu } from '../Menu/Menu';
import { Logo } from '../Logo/Logo';

import img1 from '../../assets/img/hed-1.svg';
import img2 from '../../assets/img/hed-2.svg';
import img3 from '../../assets/img/img1.jpg';

import {lang} from "../../lang/lang";

import './TextsOut.style.css';

export const TextsOut = ({ texts = [], curLang, changeLang, ...restProps}) => {

    const renderTexts = (texts) =>  {
        return(
            texts.map((item,itemIndex) => (
                <div key={itemIndex}>
                    <div className='subTitleOut'>
                            {parse(item.title) || ''}
                    </div>
                    <div className='subText'>
                            {parse(item.content) || ''}
                    </div>
                </div>
            ))
        )
    }

    return(
        <div>
            {texts.map((item,itemIndex) => (
                <div key={itemIndex}  className='text-block' >
                    <div className='titleOut' >
                        {parse(item.title) || ''}
                    </div>

                    {renderTexts(item.blocks)}

                </div>
            ))}
    
        </div>
    )
}

