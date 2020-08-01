import React from 'react';
import '../assets/styles/Button.scss';
import vector from '../assets/img/Vector.png';
import charola from '../assets/img/Vector2.png';

const Button = ({buttonText}) => (
    <div className="button-container">
        <button className="button" type="button">{buttonText}</button>
        <div className="button-decoration">
            <img className="button-decoration-vector" src={vector} alt="vector"/>
            <img className="button-decoration-charola" src={charola} alt="charola"/>
        </div>
    </div>
);

export default Button;