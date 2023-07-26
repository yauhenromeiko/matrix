import React from 'react';

import { Button } from '../shared/Button/Button';
import {lang} from "../../lang/lang";

export const CompatibilityMatrix = ({...restProps}) => {
    const curLang = restProps.curLang;
    return(
        <div className="calc">
            <div className="container">
                <div className="title2">
                    {lang.calculationMatrixOfFateWithDetailedTranscript[curLang]}
                </div>
                <div className="title1">
                    {lang.freeFateMatrixCompatibilityCalculatorOnline[curLang]}
                </div>
                <div className="form form-gorizontal">
                <div>
                    <label htmlFor="">{lang.partner[curLang]} 1</label>
                    <input type="text"  placeholder=""/>
                </div>
                <div>
                    <label htmlFor="">{lang.partner[curLang]} 2</label>
                    <input type="text"  placeholder=""/>
                </div>
                <div>
                    <label htmlFor="">{lang.language[curLang]}</label>
                    <input type="text"  placeholder={lang.russian[curLang]}/>
                </div>
                
                </div>

                <center>
                    <Button appearance='blue' value={lang.calculateCompatibility[curLang]}/>
                </center>
            </div>
        </div> 
    )
}