import React from 'react';
import '../assets/styles/Galery.scss';
import gal1 from '../assets/img/gal1.png';
import gal2 from '../assets/img/gal2.png';
import gal3 from '../assets/img/gal3.png';
import gal5 from '../assets/img/gal5.png';
import gal6 from '../assets/img/gal6.png';
import gal7 from '../assets/img/gal7.png';
import gal8 from '../assets/img/gal8.png';
import gal9 from '../assets/img/gal9.png';


const Galery = () =>(
    <div className="galery-container">
        <div className="galery-grid">
            <div className="galery-iem">
                <img src={gal1} alt=""/>
            </div>
            <div className="galery-iem">
                <img src={gal2} alt=""/>
            </div>
            <div className="galery-iem">
                <img src={gal3} alt=""/>
            </div>
            <div className="galery-iem">
                <p>
                   Galeria
                   <br></br>
                   Fotografica 
                </p>
            </div>
            <div className="galery-iem">
                <img src={gal5} alt=""/>
            </div>
            <div className="galery-iem">
                <img src={gal6} alt=""/>
            </div>
            <div className="galery-iem">
                <img src={gal7} alt=""/>
            </div>
            <div className="galery-iem">
                <img src={gal8} alt=""/>
            </div>
            <div className="galery-iem">
                <img src={gal9} alt=""/>
            </div>
        </div>
    </div>
)

export default Galery;