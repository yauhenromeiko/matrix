import React, {useState} from 'react';
import axios from "axios";

import { Button } from '../shared/Button/Button';

import { Matrix } from '../../components/Matrix/Matrix';
import { TextsOut } from '../../components/TextsOut/TextsOut';


import {lang} from "../../lang/lang";

export const ChildMatrix = ({...restProps}) => {
    const curLang = restProps.curLang;

    // 
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('20.07.1993');
    const [sex, setSex] = useState('f');

    const [combinations, setCombinations] = useState({});
    const [texts, setTexts] = useState([]);


    const [post, setPost] = useState(null);

    const handleClick = () => {

        if (dateOfBirth.length < 7) return

        const baseURL = `https://test-matrix.herokuapp.com/api/v2/children/calculate/${dateOfBirth}?gender=${sex}&language=${curLang}`;
        
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            setCombinations(response.data.combinations);
            setTexts(response.data.data)

            // console.log(response.data)

        });
  
        if (!post) return null;

    }

    return(
        <div className="matrix1" id="child-matrix">
            <div className="container">
                <div className="title2">
                    {lang.calculationMatrixOfFateWithDetailedTranscript[curLang]}
                </div>
                <div className="title1">
                    {lang.freeCalculatorOfChildrensMatrix[curLang]}
                </div>
                <div className="title_text">
                    {/* {lang.hereText1[curLang]} */}
                </div>
                <div className="top left_right">
                    <div className="left">
                        <div className="form">
                            <div>
                                <label htmlFor="">{lang.name[curLang]}</label>
                                <input 
                                    type="text"  
                                    placeholder="" 
                                    onInput={(e)=>{
                                        setName(e.target.value)
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="">{lang.dateOfBirth[curLang]}</label>
                                <input 
                                    type="text"  
                                    placeholder="" 
                                    onInput={(e)=>{
                                        setDateOfBirth(e.target.value)
                                    }}
                                />
                            </div>
                            {/* <div>
                                <label htmlFor="">{lang.appeal[curLang]}</label>
                                <input 
                                    type="text"  
                                    placeholder={lang.personal[curLang]}
                                    onInput={(e)=>{
                                        setPersonal(e.target.value)
                                    }}
                                />
                            </div> */}
                            <div>
                                <label htmlFor="">{lang.sex[curLang]}</label>
                                <input 
                                    type="text"  
                                    placeholder="" 
                                    onInput={(e)=>{
                                        setSex(e.target.value)
                                    }}
                                />
                            </div>
                            {/* <div>
                                <label htmlFor="">{lang.language[curLang]}</label>
                                <input 
                                    type="text"  
                                    placeholder={lang.russian[curLang]}
                                    onInput={(e)=>{
                                        setLanguage(e.target.value)
                                    }}
                                />
                            </div> */}
                            <Button 
                            appearance="green" 
                            value={lang.calculateMatrixOnline[curLang]}
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                    <div className="right">
                        <Matrix combinations={combinations} curLang={curLang}/>
                    </div>
                </div>
                {post && (
                    <div className="container">
                        <TextsOut texts={texts}/>
                    </div>
                )}
            </div>
        </div>
)
}