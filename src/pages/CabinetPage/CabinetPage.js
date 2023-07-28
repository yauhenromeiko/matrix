import React from "react";

import { PageContainer } from "../../components/PageContainer/PageContainer";
import { Tariffs } from '../../components/Tariffs/Tariffs';

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
                    {lang.childMatrix[restProps.curLang]}
                </div>
                <div className="action">
                    <Button value={lang.calculate[restProps.curLang]} onClick={()=>{}}/>
                </div>
            </div>
            <div className="item blue-light">
                <div className="name">
                    {lang.fateMatrix[restProps.curLang]}
                </div>
                <div className="action">
                    <Button value={lang.calculate[restProps.curLang]} onClick={()=>{}}/>
                </div>
            </div>
            <div className="item blue">
                <div className="name">
                    {lang.childMatrix[restProps.curLang]}
                </div>
                <div className="action">
                    <Button value={lang.calculate[restProps.curLang]} onClick={()=>{}}/>
                </div>
            </div>
            <div className="item white">
                <div className="name">
                    {lang.fateMatrix[restProps.curLang]}
                </div>
                <div className="action">
                    <Button value={lang.calculate[restProps.curLang]} onClick={()=>{}}/>
                </div>
            </div>
            <div className="item blue-light">
                <div className="name">
                    {lang.fateMatrix[restProps.curLang]}
                </div>
                <div className="action">
                    <Button value={lang.calculate[restProps.curLang]} onClick={()=>{}}/>
                </div>
            </div>
            <div className="item blue">
                <div className="name">
                    {lang.fateMatrix[restProps.curLang]}
                </div>
                <div className="action">
                    <Button value={lang.calculate[restProps.curLang]} onClick={()=>{}}/>
                </div>
            </div>

        </div>
    </div>

</div>
    
        <Tariffs {...restProps}/>
        </PageContainer>
    </>
    )
}