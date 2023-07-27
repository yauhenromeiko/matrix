import React from 'react';

import { Button } from '../../components/shared/Button/Button';
import { Matrix } from '../../components/Matrix/Matrix';

import {lang} from "../../lang/lang";

export const MatrixBottom = ({value, appearance, size="md", curLang, className, ...restProps}) => {
    return (
        <>
            <div className="container matrix2 " id="matrix-fate">
                <br/>
                <br/>
                <br/>
                <div className="title2">
                    {lang.calculationMatrixOfFateWithDetailedTranscript[curLang]}
                </div>
                <div className="title1">
                    {lang.freeMatrixOfFateCalculatorOnline[curLang]}
                </div>
                <div className="form">
                    <div>
                        <label htmlFor="">{lang.name[curLang]}</label>
                        <input type="text" placeholder="" />
                    </div>
                    <div>
                        <label htmlFor="">{lang.dateOfBirth[curLang]}</label>
                        <input type="text" placeholder=""/>
                    </div>
                    <div>
                        <label htmlFor="">{lang.language[curLang]}</label>
                        <input type="text" placeholder=""/>
                    </div>
                </div>
                <center>
                    <Button appearance='blue'  value={lang.calculate[curLang]}/>
                </center>
                
                    
            </div>

            <div className="container">
                <center>
                    <Matrix />
                </center>
            </div>
        </>
    ) 
}