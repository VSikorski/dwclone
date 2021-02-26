import React, { useState } from 'react';
import './style/NewsLetter.css';

function NewsLetter() {

    const [status, setStatus] = useState(false);
    const [inputStatus1, setInputStatus1] = useState(false);
    const [inputStatus2, setInputStatus2] = useState(false);

    function radioClicked(){
        setStatus(!status)
    }

    function leftInputClicked(){
        setInputStatus1(!inputStatus1)
    }

    function rightInputClicked(){
        setInputStatus2(!inputStatus2)
    }

    return (
        <div className="newsletter__cont">
            <div className="newsletter__left">
                <div className="newsletter__heading">
                    <p>Avem un</p>
                    <p>newsletter cool</p>
                </div>
            </div>
            <div className="newsletter__right">
                <div className="newsletter__text">
                    <div className="newsletter__medtext">Abonează-te</div>
                    <div className="newsletter__smalltext">Pe tot parcursul anului avem promoții. 
                    Unele dintre ele - cu reduceri de până la -50%. Află despre ofertele noastre. 
                    Introdu numele și e-mailul mai jos.</div>
                </div>
                <div className="newsletter__form">
                    <div className="newsletter__inputs">

                    {
                        inputStatus1 ?
                        <div className="newsletter__input input-active" onClick={leftInputClicked}><input placeholder="E-mail"/></div>
                        : <div className="newsletter__input" onClick={leftInputClicked}><input placeholder="E-mail"/></div>
                    }

                    {
                        inputStatus2 ?
                        <div className="newsletter__input input-active" onClick={rightInputClicked}><input placeholder="Nume Prenume"/></div>
                        : <div className="newsletter__input" onClick={rightInputClicked}><input placeholder="Nume Prenume"/></div>
                    }
                        
                        {
                            status ?
                            <div className={`newsletter__button active`}><a href="#">Mă abonez</a></div>
                            : <div className={`newsletter__button`}>Mă abonez</div>
                        }
                    </div>
                    <div className="newsletter__radio">
                        <div className="custom__radio">
                            <div className="radio__circle" onClick={radioClicked}>
                                {
                                    status ?
                                    <div className="radio__dot">
                                    </div>
                                    :null
                                }
                            </div>
                        </div>
                        <div className="radio__text__cont">
                            <div className="radio__text">Sunt de acord cu<p><a href="#">Politica de confidențialitate</a></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NewsLetter;
