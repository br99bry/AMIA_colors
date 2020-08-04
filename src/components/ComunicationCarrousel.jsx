import React from 'react';
import '../assets/styles/ComunicationCarrousel.scss';
import menorque from '../assets/img/menorque.png';
import mayorque from '../assets/img/mayorque.png';

const ComunicationCarrousel = ({children},{children2},{children3}) => (

    <section className="comunicacion-container">
        <div className="comunicacion-grid">
            <div className="comunicacion-item">
                <div className="comunicacion-title">
                    <p>Comuni<br />cacion</p>
                </div>
                <div className="comunicacion-buttons-container">
                    <div className="comunicacion-buttons">
                        <img src={menorque} alt=""/>
                    </div>
                    <div className="comunicacion-buttons">
                        <img src={mayorque} alt=""/>
                    </div>
                </div>
            </div>
            <div className="comunicacion-item">
                {children}
            </div>
            <div className="comunicacion-item">
                {children2}
            </div>
            <div className="comunicacion-item">
                {children3}
            </div>

        </div>
    </section>

);


export default ComunicationCarrousel;