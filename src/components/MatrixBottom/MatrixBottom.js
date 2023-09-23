import React, {useState} from 'react';
import axios from "axios";

import { Button } from '../../components/shared/Button/Button';
import { Matrix } from '../../components/Matrix/Matrix';
import { TextsOut } from '../../components/TextsOut/TextsOut';


import {lang} from "../../lang/lang";

// const baseURL = "https://business-matrix.herokuapp.com/api/v2/calculate/${date}?gender=${gender}&language=${lang}&appeal=p";


export const MatrixBottom = ({value, appearance, size="md", curLang, showAll = false, className, ...restProps}) => {
    const [nameInput, setNameInput] = useState('');
    const [dateInput, setdateInput] = useState('10.07.1988');
    const [langInput, setlangInput] = useState('en');
    const [sexInput, setSexInput] = useState('f');

    const [combinations, setCombinations] = useState({});
    const [texts, setTexts] = useState([]);


    const [post, setPost] = useState(null);

    const handleClick = () => {

        if (dateInput.length < 7) return
        // &edw=1
        const baseURL = `https://test-matrix.herokuapp.com/api/v2/calculate/${dateInput}?gender=${sexInput}&language=${curLang}&appeal=p${showAll ? '&edw=1' : ''}`;
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            setCombinations(response.data.combinations);
            setTexts(response.data.data)

        });
  
        if (!post) return null;

    }

    


    return (
        <>
            <div className="container matrix2 " id="matrix-fate">
                <br/>
                <br/>
                <br/>
                <div className="title2">
                    {lang.calculationMatrixOfFateWithDetailedTranscript[curLang]}
                </div>
                <div className="title1">
                    {lang.freeMatrixOfFateCalculatorOnline[curLang]}
                </div>
                <div className="form">
                    <div>
                        <label htmlFor="">{lang.name[curLang]}</label>
                        <input type="text" placeholder="" 
                        onInput={(e)=>{
                            setNameInput(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="">{lang.dateOfBirth[curLang]}</label>
                        <input type="text" placeholder={dateInput} onInput={(e)=>{
                            setdateInput(e.target.value)
                        }}/>
                    </div>
                    {/* <div>
                        <label htmlFor="">{lang.language[curLang]}</label>
                        <input type="text" placeholder="" onInput={(e)=>{
                            setlangInput(e.target.value)
                        }}/>
                    </div> */}
                    <div>
                        <label htmlFor="">{lang.sex[curLang]}</label>
                        <select type="text" placeholder="" onChange={(e)=>{
                            setSexInput(e.target.value)
                        }}>
                            {/* <option value="">--Please choose an option--</option> */}
                            <option value="f" className='option'>{lang.sexF[curLang]}</option>
                            <option value="m" className='option'>{lang.sexM[curLang]}</option>
                        </select>
                    </div>
                </div>
                <center>
                    <Button 
                        appearance='blue'  
                        value={lang.calculate[curLang]} 
                        onClick={handleClick}
                    />
                </center>
            </div>
            {post && (
                <div className="container">
                    <center>
                        <Matrix combinations={combinations} curLang={curLang}/>
                    </center>
                    <TextsOut texts={texts}/>
                </div>
            )}
        </>
    ) 
}