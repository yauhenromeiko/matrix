import React, {useState} from 'react';
import axios from "axios";

import { Button } from '../shared/Button/Button';

import { Matrix } from '../../components/Matrix/Matrix';
import { TextsOut } from '../../components/TextsOut/TextsOut';

import {lang} from "../../lang/lang";

export const CompatibilityMatrix = ({showAll = false, ...restProps}) => {
    const curLang = restProps.curLang;

    const [partner1Input, setPartner1Input] = useState('10.02.1988');
    const [partner2Input, setPartner2Input] = useState('20.07.1993');
    const [combinations, setCombinations] = useState({});
    const [texts, setTexts] = useState([]);

    const [post, setPost] = useState(null);

    const handleClick = () => {

        if (partner1Input.length < 7 || partner2Input.length < 7) return
        // &edw=1
        const baseURL = `https://test-matrix.herokuapp.com/api/v2/compat?date1=${partner1Input}&date2=${partner1Input}&language=${curLang}${showAll ? '&edw=1' : ''}`;
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            setCombinations(response.data.combinations);
            setTexts(response.data.data)
        });
  
        if (!post) return null;

    }


    return(
        <div className="calc" id="matrix-compatibility">
            <div className="container">
                <div className="title2">
                    {lang.calculationMatrixOfFateWithDetailedTranscript[curLang]}
                </div>
                <div className="title1">
                    {lang.freeFateMatrixCompatibilityCalculatorOnline[curLang]}
                </div>
                <div className="form form-gorizontal">
                <div>
                    <label htmlFor="">{lang.partner[curLang]} 1</label>
                    <input 
                        type="text"  
                        placeholder=""
                        onInput={(e)=>{
                            setPartner1Input(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">{lang.partner[curLang]} 2</label>
                    <input 
                        type="text"  
                        placeholder=""
                        onInput={(e)=>{
                            setPartner2Input(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">{lang.language[curLang]}</label>
                    <input 
                        type="text"  
                        placeholder={lang.russian[curLang]}
                        onInput={(e)=>{
                            setlangInput(e.target.value)
                        }}
                    />
                </div>
                
                </div>

                <center>
                    <Button 
                        appearance='blue' 
                        value={lang.calculateCompatibility[curLang]} 
                        onClick={handleClick}
                    />
                </center>
                {post && (
                    <div className="container">
                        <div className="title1">
                            {lang.yourCompatibility[curLang]}:
                        </div>
                        <div style={{fontSize: 20, paddingBottom: 30}}>
                            <center>
                                {partner1Input} + {partner2Input}
                            </center>
                        </div>   
                        <center>
                            <Matrix combinations={combinations} curLang={curLang}/>
                        </center>
                        <TextsOut texts={texts}/>
                    </div>
                )}
            </div>
        </div> 
    )
}