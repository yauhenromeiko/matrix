import React from 'react';

import { Button } from '../shared/Button/Button';

import { Matrix } from '../../components/Matrix/Matrix';
import {lang} from "../../lang/lang";

import Person1 from '../../assets/img/Frame 16.png';
import Person2 from '../../assets/img/Frame 15.png';

export const HomeText = ({...restProps}) => {
    const curLang = restProps.curLang;
    return(
        <div className="container">
        <div className="free_txt left_right">
            <div className="left " style={{textAlign: "center", position: "relative"}}> 
                <img src={Person1} className="person-img" style={{top:0,left:0}} alt=""/>
                <img src={Person2} className="person-img" style={{bottom:0,right:0}} alt=""/>
                <Matrix/>
            </div>
            <div className="right">
                {/* <Typography value="{lang.calculationMatrixOfFateWithDetailedTranscript[curLang]}" appearance="title2"/>
                <Typography value="{lang.freeMatrixOfFateCalculatorOnline[curLang]}" appearance="title1"/>
                <Typography value="{lang.text1[curLang]}" appearance="text"/> */}
                <div className="title2">
                    {lang.calculationMatrixOfFateWithDetailedTranscript[curLang]}
                </div>
                <div className="title1">
                    {lang.freeMatrixOfFateCalculatorOnline[curLang]}
                </div>
                <div className="text">
                    {lang.text1[curLang]}
                </div>
                <div>
                  <Button 
                    appearance="default" 
                    value={lang.calculate[curLang]} 
                    onClick={()=>{window.location.href = "#"+"matrix-fate";}}
                  />
                </div>
            </div>
        </div>
    </div>
    )
}