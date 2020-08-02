import React, { Children } from 'react';
import '../assets/styles/CardColashCar.scss';
import toyota from '../assets/img/Toyota.png';
import ford from '../assets/img/Ford.jpg';
import gm from '../assets/img/generalMotors.png';
import kia from '../assets/img/kia.png';
import bmw from '../assets/img/bmw.png';
import nissan from '../assets/img/nissan.png';
import honda from '../assets/img/honda.png';
import w from '../assets/img/w.png';
import mazda from '../assets/img/mazda.png';
import volvo from '../assets/img/volvo.png';
import pegout from '../assets/img/pegout.png';
import isuzu from '../assets/img/isuzu.png';
import hundai from '../assets/img/hundai.png';
import renault from '../assets/img/renault.png';
import audi from '../assets/img/audi.png';
import mercez from '../assets/img/mercedez.png';
import sizuki from '../assets/img/sizuki.png';
import subaru from '../assets/img/subaru.png';
import fca from '../assets/img/fca.png';


const CardColashCard = () => (

    <div className="colash-container-component">
        <div className="colash-container">
            <div className="colash-logo"><img src={toyota} alt=""/></div>
            <div className="colash-logo"><img src={ford} alt=""/></div>
            <div className="colash-logo"><img src={gm} alt=""/></div>
            <div className="colash-logo"><img src={kia} alt=""/></div>
            <div className="colash-logo"><img src={bmw} alt=""/></div>
            <div className="colash-logo"><img src={nissan} alt=""/></div>
            <div className="colash-logo"><img src={honda} alt=""/></div>
            <div className="colash-logo"><img src={w} alt=""/></div>
            <div className="colash-logo"><img src={mazda} alt=""/></div>
            <div className="colash-logo"><img src={volvo} alt=""/></div>
            <div className="colash-logo"><img src={pegout} alt=""/></div>
            <div className="colash-logo"><img src={isuzu} alt=""/></div>
            <div className="colash-logo"><img src={hundai} alt=""/></div>
            <div className="colash-logo"><img src={renault} alt=""/></div>
            <div className="colash-logo"><img src={audi} alt=""/></div>
            <div className="colash-logo"><img src={mercez} alt=""/></div>
            <div className="colash-logo"><img src={sizuki} alt=""/></div>
            <div className="colash-logo"><img src={subaru} alt=""/></div>
            <div className="colash-logo"><img src={fca} alt=""/></div>
        </div>

    </div>
);

export default CardColashCard;
