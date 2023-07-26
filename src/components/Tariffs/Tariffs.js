import React from 'react';

import { Button } from '../shared/Button/Button';

import IconPay1 from '../../assets/img/pay.svg';
import IconPay2 from '../../assets/img/pay2.svg';
import IconPay3 from '../../assets/img/pay3.svg';

import {lang} from "../../lang/lang";

export const Tariffs = ({...restProps}) => {
    const curLang = restProps.curLang;
    return(
        <div className="tariffs">
        <div className="container">
            <div className="title2">
                {lang.freeMatrixOfFateCalculatorOnline[curLang]}
            </div>
            <div className="title1">
                {lang.subscriptionsToTheMatrixOfFate[curLang]}
            </div>
            <div className="items">
                <div className="item item1">
                    <div className="icon">
                        <img src={IconPay1} alt=""/>
                    </div>
                    <div className="text">
                        {lang.subscription[restProps.curLang]} 90 {lang.days[restProps.curLang]}
                    </div>
                    <div className="price">
                        15$
                    </div>
                    <Button  value={lang.calculate[restProps.curLang]}/>
                </div>
                <div className="item item2">
                    <div className="icon">
                        <img src={IconPay2} alt=""/>
                    </div>
                    <div className="text">
                        {lang.subscription[restProps.curLang]} 30 {lang.days[restProps.curLang]}
                    </div>
                    <div className="price">
                        9$
                    </div>
                    <Button appearance='green'  value={lang.calculate[restProps.curLang]}/>
                </div>
                <div className="item item3">
                    <div className="icon">
                        <img src={IconPay3} alt=""/>
                    </div>
                    <div className="text">
                        {lang.subscription[restProps.curLang]} 7 {lang.days[restProps.curLang]}
                    </div>
                    <div className="price">
                        5$
                    </div>
                    <Button  value={lang.calculate[restProps.curLang]}/>
                </div>

            </div>
        </div>
    </div>
)
}