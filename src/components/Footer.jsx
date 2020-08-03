import React from 'react';
import '../assets/styles/Footer.scss';
import footerDecoration from '../assets/img/footerDecoration.png';
import footerLogo from '../assets/img/logoFooter.png';
import youTube from '../assets/img/youTube.png';
import facebook from '../assets/img/facebook.png';
import twitter from '../assets/img/twitter.png';
import linkedln from '../assets/img/LinkedIn.png';


const Footer = () =>(

    <footer className="footer-container">
        <div className="footer-decoration">
            <img src={footerDecoration} alt="" className="footer-triangle"/>
        </div>
        <div className="footer">
            <div className="footer-item">
                <img src={footerLogo} alt="" className="footer-logo"/>
            </div>
            <div className="footer-item">
                <div className="footer-nav">
                    <ul>
                        <li>
                            <a href="">
                            Inicio
                            </a>
                        </li>
                        <li>
                            <a href="">
                            AMIA
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Comunicacion
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Estadisticas
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Suscriptores
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-suscribe-container">
                    <input type="text" placeholder="tuNombre@ejemplo.com"/>
                    <p>Suscribete</p>
                </div>
            </div>
            <div className="footer-item">
                <p className="unete">Unete a la conversación</p>
                <div className="redes-container">
                    <img src={youTube} alt="" className="redes"/>
                    <img src={facebook} alt="" className="redes"/>
                    <img src={twitter} alt="" className="redes"/>
                    <img src={linkedln} alt="" className="redes"/>
                </div>
            </div>
        </div>
    </footer>

);

export default Footer;