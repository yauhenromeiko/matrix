import React, {useState} from 'react';

import { Button } from '../shared/Button/Button';
import {lang} from "../../lang/lang";

export const CompatibilityMatrix = ({...restProps}) => {
    const curLang = restProps.curLang;

    const [partner1Input, setPartner1Input] = useState('');
    const [partner2Input, setPartner2Input] = useState('');
    const [langInput, setlangInput] = useState('');


    return(
        <div className="calc" id="matrix-compatibility">
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
                    <input 
                        type="text"  
                        placeholder=""
                        onInput={(e)=>{
                            setPartner1Input(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">{lang.partner[curLang]} 2</label>
                    <input 
                        type="text"  
                        placeholder=""
                        onInput={(e)=>{
                            setPartner2Input(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">{lang.language[curLang]}</label>
                    <input 
                        type="text"  
                        placeholder={lang.russian[curLang]}
                        onInput={(e)=>{
                            setlangInput(e.target.value)
                        }}
                    />
                </div>
                
                </div>

                <center>
                    <Button appearance='blue' value={lang.calculateCompatibility[curLang]}/>
                </center>
            </div>
        </div> 
    )
}