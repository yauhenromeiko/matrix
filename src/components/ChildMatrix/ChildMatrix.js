import React from 'react';

import { Button } from '../shared/Button/Button';
import { Matrix } from '../../components/Matrix/Matrix';
import {lang} from "../../lang/lang";

export const ChildMatrix = ({...restProps}) => {
    const curLang = restProps.curLang;
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
                    
                    <Button appearance='blue'  value={lang.calculateMatrixOnline[curLang]} />
                </div>
                <div className="right">
                    <Matrix appearance={"white"} />
                </div>
            </div>
        </div>
    </div>
)
}