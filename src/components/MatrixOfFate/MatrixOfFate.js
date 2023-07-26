import React from 'react';

import { Button } from '../shared/Button/Button';
import { Matrix } from '../../components/Matrix/Matrix';
import {lang} from "../../lang/lang";

export const MatrixOfFate = ({...restProps}) => {
    const curLang = restProps.curLang;
    return(
        <div className="matrix1">
            <div className="container">
                <div className="title2">
                    {lang.calculationMatrixOfFateWithDetailedTranscript[curLang]}
                </div>
                <div className="title1">
                    {lang.freeFateMatrixCompatibilityCalculatorOnline[curLang]}
                </div>
                <div className="title_text">
                    {lang.hereText1[curLang]}
                </div>
                <div className="top left_right">
                    <div className="left">
                        <div className="form">
                            <div>
                                <label htmlFor="">{lang.name[curLang]}</label>
                                <input type="text"  placeholder=""/>
                            </div>
                            <div>
                                <label htmlFor="">{lang.dateOfBirth[curLang]}</label>
                                <input type="text"  placeholder=""/>
                            </div>
                            <div>
                                <label htmlFor="">{lang.appeal[curLang]}</label>
                                <input type="text"  placeholder={lang.personal[curLang]}/>
                            </div>
                            <div>
                                <label htmlFor="">{lang.sex[curLang]}</label>
                                <input type="text"  placeholder=""/>
                            </div>
                            <div>
                                <label htmlFor="">{lang.language[curLang]}</label>
                                <input type="text"  placeholder={lang.russian[curLang]}/>
                            </div>
                            <Button appearance='green' value={lang.calculateMatrixOnline[curLang]}/>
                        </div>
                    </div>
                    <div className="right">
                        <Matrix/>
                    </div>
                </div>
                <div className="bottom">

                </div>
            </div>
        </div>
    )
}