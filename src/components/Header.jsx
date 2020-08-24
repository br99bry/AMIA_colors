import React from 'react';
import '../assets/styles/Header.scss';
import logoHeader from '../assets/img/logoHeader.png';
import rectangleHeader from '../assets/img/rectangleHeader.png';
import searchIcon from '../assets/img/searchIcon.png';
import timeLapse from '../assets/img/timeLapse.png';


const link1 = 'Inicio';
const link2 = 'AMIA';
const link3 = 'Comunicación';
const link4 = 'Estadisticas';
const link5 = 'Suscribete';
const link2sub1 = 'Asociación';
const link2sub2 = 'Asociados';
const link2sub3 = 'Mesa Directiva';
const link2sub4 = 'Mision, Vision, Valores';
const link2sub5 = 'Directorio';
const link2sub6 = 'Contacto';




const Header = () => (   
        <header className="header-container">
            <div className="logo-container">
                <img  src={logoHeader} alt="" className="logo"/>
            </div>
            <div  className="nav-container">
                <img src={rectangleHeader} alt="" className="rectangle"/>
                <img src={timeLapse} alt="" className="timeLaps"/>
                <div  className="nav">
                    <ul className="nav-list">
                        <li className="nav-opc">
                            <a className="nav-link" href="">{link1}</a>
                        </li>
                        <li className="nav-opc">
                            <a className="nav-link" href="">{link2}</a>
                            <ul>
                                <li>{link2sub1}</li>
                                <li>{link2sub2}</li>
                                <li>{link2sub3}</li>
                                <li>{link2sub4}</li>
                                <li>{link2sub5}</li>
                                <li>{link2sub6}</li>
                            </ul>
                        </li>
                        <li className="nav-opc">
                            <a className="nav-link" href="">{link3}</a>
                        </li>
                        <li className="nav-opc">
                            <a className="nav-link" href="">{link4}</a>
                        </li>
                        <li className="nav-opc">
                            <a className="nav-link" href="">{link5}</a>
                        </li>
                        <li className="nav-opc">
                            <img src={searchIcon} alt="" className="search"/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );


export default Header;