import React from "react";

import { PageContainer } from "../../components/PageContainer/PageContainer";
import { Tariffs } from '../../components/Tariffs/Tariffs';
import { ChildMatrix } from '../../components/ChildMatrix/ChildMatrix';
import { CompatibilityMatrix } from '../../components/CompatibilityMatrix/CompatibilityMatrix';
import { MatrixOfFate } from '../../components/MatrixOfFate/MatrixOfFate';
import { MatrixBottom } from '../../components/MatrixBottom/MatrixBottom';

import { Button } from '../../components/shared/Button/Button';

import PersonImg from '../../assets/img/person.jpg'
import SettingsImg from '../../assets/img/settings.svg'

import { lang } from "../../lang/lang";

export const CabinetPage = ({ ...restProps}) => {
    const curLang = restProps.curLang;
    return (
        <>
        <PageContainer {...restProps}>
        <div className="container">
    <div className="cabinet">
        <div className="person">
            <div className="inner">
            <div className="img">
                <img src={PersonImg} alt=""/>
            </div>
            <div className="name">
                Helen Petrova
            </div>
            <div className="text1">
             {lang.activeTariff[curLang]}
            </div>
            <div className="text2">
                {lang.untilTheEndOfTheTariffPlanlLeft[curLang]}: 
                2 {lang.days[curLang]}
            </div>
            <div className="action">
                <Button value={lang.renewPlan[curLang]}/>
            </div>
            <div className="bottom">
                <div className="change">
                    <img src={SettingsImg} alt=""/>
                    {lang.editProfile[curLang]}
                </div>
                <div className="del">
                    {lang.deleteProfile[curLang]}
                </div>
            </div>
        </div>
        </div>
        <div className="calcs">
            <div className="item white">
                <div className="name">
                    {lang.calculateMatrixOnline[curLang]}
                </div>
                <div className="action">
                    <Button value={lang.calculate[restProps.curLang]} onClick={()=>{
                            window.location.href = "#" + "matrix-fate";
                        }}/>
                </div>
            </div>
            <div className="item blue-light">
                <div className="name">
                    {lang.calculateCompatibility[curLang]}
                </div>
                <div className="action">
                    <Button value={lang.calculate[restProps.curLang]} onClick={()=>{
                            window.location.href = "#"+"matrix-compatibility";
                        }}/>
                </div>
            </div>
            <div className="item blue">
                <div className="name">
                    {lang.calculateBabyMatrix[curLang]}
                </div>
                <div className="action">
                    <Button value={lang.calculate[restProps.curLang]} onClick={()=>{
                            window.location.href = "#"+"child-matrix";
                        }}/>
                </div>
            </div>
            

        </div>
    </div>

</div>
    
        <Tariffs {...restProps}/>

        
        <CompatibilityMatrix showAll={true} {...restProps}/>
        <ChildMatrix showAll={true} {...restProps}/>
        <MatrixBottom showAll={true} {...restProps}/>



        </PageContainer>
    </>
    )
}