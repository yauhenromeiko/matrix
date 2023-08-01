import React from 'react';

import { Button } from '../shared/Button/Button';
import { Menu } from '../Menu/Menu';
import { Logo } from '../Logo/Logo';

import img1 from '../../assets/img/hed-1.svg';
import img2 from '../../assets/img/hed-2.svg';
import img3 from '../../assets/img/img1.jpg';

import {lang} from "../../lang/lang";

import './Header.style.css';

export const Header = ({ header, curLang, changeLang, ...restProps}) => {

    return(
        <div className="header">
        <div className="cont">
        <div className="top">
            <Logo curLang={curLang} {...restProps}/>
            <Menu 
                curLang={curLang} 
                changeLang={changeLang} 
                {...restProps}
            />
            <div style={{color: '#fff'}} className='langBlock'>
                <span onClick={()=>{
                    changeLang('ru')
                }} className={ curLang=='ru'? 'active': '' }>
                    ru
                </span>
                {" / "}
                <span onClick={()=>{
                    changeLang('en')
                }} className={ curLang=='en'? 'active': '' }>
                    en
                </span>
            </div>
            <div>
                <Button value={lang.buy[curLang]} onClick={()=>{
                    window.location.href = "#"+"tariffs";
                }}/>
            </div>
        </div>
        {header === 'big' && (
            <div className="center">
                <div className="img">
                    <img src={img1} alt="" className="hed1"/>
                    <img src={img2} alt="" className="hed2"/>
                    <img src={img3} alt="" className="hed3"/>
                </div>
                <div className="txt1">{lang.calculationOfTheMatrix[curLang]}</div>
                <div className="txt2">{lang.freeCalc[curLang]}</div>
                <div className="txt3">{lang.fateMatricesOnline[curLang]}</div>
                <div className="actions">
                    <Button 
                        appearance='green'  
                        value={lang.calculateMatrixOnline[curLang]} 
                        onClick={()=>{
                            window.location.href = "#"+"matrix-fate";
                        }
                    }/>
                    
                </div>
                <div className="actions">
                    <Button 
                        appearance='green'  
                        value={lang.calculateCompatibility[curLang]} 
                        onClick={()=>{
                            window.location.href = "#"+"matrix-compatibility";
                        }}
                    />
                    <Button 
                        appearance='blue'  
                        value={lang.calculateBabyMatrix[curLang]} 
                        onClick={()=>{
                            window.location.href = "#"+"child-matrix";
                        }
                    }/>
                </div>
            </div>
        )}
            
    </div>


    
    </div>
)
}

