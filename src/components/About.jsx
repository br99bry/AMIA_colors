import React from 'react';
import '../assets/styles/About.scss';
import twoCars from '../assets/img/two-fast-cars.png';
import timeLaps from '../assets/img/time-lapse.png';
const texto = ' es una asociación civil constituida por voluntad propia de las empresas fabricantes de vehículos establecidos en nuestro país el 3 de enero de 1951. Con el propósito de tener una representación exclusiva para este sector industrial.';
const titulo = 'AMIA';

const About = ({children}) => (

    <section className="about-container">
        <div className="item">
            <p>Sobre<br></br>Nosotros</p>
        </div>
        <div className="item">
            <img src={twoCars} alt="" className="item-img"/>
        </div>
        <div className="item">
            <div className="item-info">
                <p className="item-title">{titulo}</p>
                <p className="item-description">
                    <strong>{titulo}</strong>{texto}
                </p>
                {children}
            </div>
        </div>
        <div className="item">
            <img src={timeLaps} alt="" className="item-img"/>
        </div>
    </section>

);

export default About;