import React from 'react';
import '../assets/styles/Footer.scss';
import footerDecoration from '../assets/img/footerDecoration.png';
import footerLogo from '../assets/img/logoFooter.png';


const Footer = () =>(

    <footer className="footer-container">
        <div className="footer-decoration">
            <img src={footerDecoration} alt="" className="footer-triangle"/>
        </div>
        <div className="footer">
            <div className="footer-item">
                <img src={footerLogo} alt="" className="footer-logo"/>
            </div>
            <div className="footer-item"></div>
            <div className="footer-item"></div>
        </div>
    </footer>

);

export default Footer;