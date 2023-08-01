import React, {useState} from 'react';

import { Button } from '../shared/Button/Button';
import { Matrix } from '../../components/Matrix/Matrix';
import {lang} from "../../lang/lang";

export const MatrixOfFate = ({...restProps}) => {
    const curLang = restProps.curLang;
    
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [personal, setPersonal] = useState('');
    const [sex, setSex] = useState('');
    const [language, setLanguage] = useState('');

    return(
        



<div className="child-matrix">
        <div className="container">
            <div className="free_txt left_right">
                <div className="left">
                    <div className="title2">
                        {lang.calculationMatrixOfFateWithDetailedTranscript[curLang]}
                    </div>
                    <div className="title1">
                     {lang.freeFateMatrixCompatibilityCalculatorOnline[curLang]}
                    </div>
                    <div className="title_text" style={{textAlign: "left",marginBottom: 14}}>
                        {lang.freeFateMatrixCompatibilityCalculatorOnline[curLang]}
                    </div>
                    
                    <Button 
                        appearance='blue'  
                        value={lang.calculateMatrixOnline[curLang]} 
                        onClick={()=>{window.location.href = "#"+"matrix-fate";}}
                    />
                </div>
                <div className="right">
                    <Matrix appearance={"white"}/>
                </div>
            </div>
        </div>
    </div>
    )
}