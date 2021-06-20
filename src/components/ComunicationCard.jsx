import React from 'react';
import '../assets/styles/ComunicationCard.scss';
import Button from './Button';
import vectorFull from '../assets/img/vectorFull.png';

const ComunicationCard = ({itemImg,itemTitle,itemContent}) =>(
    <div className="comunication-item-conteiner">
        <div className="comunication-item-img">
            <img src={itemImg} alt=""/>
        </div>
        <div className="comunication-item-title">
            <div>{itemTitle}</div>
        </div>
        <div className="comunication-item-content">
            <img src={itemContent} alt=""/>
        </div>
        
        <Button buttonText="ver más" anchoBoton="203px">
                <img src={vectorFull}></img>
        </Button>
    </div>
)

export default ComunicationCard;