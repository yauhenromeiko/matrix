import React from "react";

import { PageContainer } from "../../components/PageContainer/PageContainer";
import { Tariffs } from '../../components/Tariffs/Tariffs';
import { Button } from '../../components/shared/Button/Button';
import { ChildMatrix } from '../../components/ChildMatrix/ChildMatrix';
import { CompatibilityMatrix } from '../../components/CompatibilityMatrix/CompatibilityMatrix';
import { MatrixOfFate } from '../../components/MatrixOfFate/MatrixOfFate';
import { Matrix } from '../../components/Matrix/Matrix';
import { HomeText } from '../../components/HomeText/HomeText';
// import { Typography } from '../../components/shared/Typography/Typography';

import {lang} from "../../lang/lang";

export const HomePage = ({...restProps}) => {
    const curLang = restProps.curLang;

    return ( 
<>
<PageContainer header="big" {...restProps}>

    <HomeText {...restProps}/>
    <Tariffs {...restProps}/>
    <CompatibilityMatrix {...restProps}/>
    <MatrixOfFate {...restProps}/>
    <ChildMatrix {...restProps}/>

    <div className="container matrix2 ">
        <br/>
        <br/>
        <br/>
        <div className="title2">
            {lang.calculationMatrixOfFateWithDetailedTranscript[curLang]}
        </div>
        <div className="title1">
            {lang.freeFateMatrixCompatibilityCalculatorOnline[curLang]}
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
            <Button appearance='blue'  value={lang.calculateBabyMatrix[curLang]}/>
        </center>
        
            
    </div>

    <div className="container">
        <center>
            <Matrix />
        </center>
    </div>

    </PageContainer>
    </>
    )
}