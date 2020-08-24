import React, { Children } from 'react';
import '../assets/styles/Hero.scss';
import timeLapse from '../assets/img/timeLapse.png';


const Hero = ({children}) =>(
    <section className="hero-container">
        <div className="hero-description">
            <h1 className="hero-title">Conocientdo<br></br>La industria automotriz</h1>
            <p> Empresas establecidas en nuestro país dedicadas a la fabricación y/o comercialización de automóviles y camiones ligeros de hasta ocho toneladas de peso bruto vehicular</p>
            {children}
        </div>
        
        {/* <div className="timeLaps-container">
            <img src={timeLapse} alt="" className="timeLaps"/>
        </div> */}
    </section>
);


export default Hero;