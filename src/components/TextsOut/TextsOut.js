import React, {useState} from 'react';
import parse from 'html-react-parser';

import BottomIcon from '../../assets/img/arrow-bottom.svg';

import './TextsOut.style.css';

export const TextsOut = ({ texts = [], curLang, changeLang, ...restProps}) => {
    const renderTexts = (texts) =>  {
        return(
            texts.map((item,itemIndex) => {
                const [showText, setShowText] = useState(false)

                const handleClick = () => {
                    setShowText(!showText)
                }

                return (
                <div key={itemIndex} className='text-out-item'>
                    <div className='subTitleOut' onClick={handleClick}>
                            {parse(item.title) || ''}
                            <img src={BottomIcon} alt="" className={`arrow-bottom ${showText && 'active'}`}/>
                    </div>
                    <div className={`subText ${showText && 'active'}`}>
                            {parse(item.content) || ''}
                    </div>
                </div>
            )}
            )
        )
    }

    return(
        <div>
            {texts.map((item,itemIndex) => (
                <div key={itemIndex}  className='text-block' >
                    <div className='titleOut' >
                        {parse(item.title) || ''}
                    </div>

                    {renderTexts(item.blocks)}

                </div>
            ))}
    
        </div>
    )
}

