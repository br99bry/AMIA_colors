import React from 'react';
import '../assets/styles/Comunicacion.scss';
import ComunicacionVideos from './ComunicacionVideos';
import microProfesional from '../assets/img/microProfesional.png';
import lineSeparacion from '../assets/img/lineSeparacion.png';
import microfono from '../assets/img/microfono.png';

const Comunicacion = () => (
    <section className="comunicacionPage-container">
        <div className="comunicacion-left">
            <img src={microProfesional} alt=""/>
        </div>
        <div className="comunicacion-right">
            <p>Comunicacion</p>
            <img src={lineSeparacion} alt=""/>
            <img src={microfono} alt=""/>
            <p>Potcast</p>
            <div className="comunicacion-videos-container">
                <ComunicacionVideos />
            </div>
        </div>
    </section>
);

export default Comunicacion;