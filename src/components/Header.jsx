import React from 'react';
import '../assets/styles/Header.scss';
import logoHeader from '../assets/img/logoHeader.png';
import rectangleHeader from '../assets/img/rectangleHeader.png';

const link1 = 'Inicio';
const link2 = 'AMIA';
const link3 = 'Comunicación';
const link4 = 'Estadisticas';
const link5 = 'Suscribete';

const Header = () => {
    const styles = {
        backgroundImage: "url(" + rectangleHeader + ")",   
    }
    
    return (   
        <header className="header-container">
            <div className="logo-container">
                <img  src={logoHeader} alt="" className="logo"/>
            </div>
            <div  className="nav-container">
                <div style={styles} className="nav">
                    <ul className="nav-list">
                        <li className="nav-opc">
                            <a className="nav-link" href="">{link1}</a>
                        </li>
                        <li className="nav-opc">
                            <a className="nav-link" href="">{link2}</a>
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
                            
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;