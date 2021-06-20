import React from 'react';
import ComunicationCard from './ComunicationCard';
import '../assets/styles/ComunicationCarrousel.scss';
import menorque from '../assets/img/menorque.png';
import mayorque from '../assets/img/mayorque.png';
import microfono from '../assets/img/microfono.png';
import periodico from '../assets/img/periodico.png';
import conf from '../assets/img/conf.png';
import potcast23 from '../assets/img/potcast23.png';
import reporteVenta from '../assets/img/reporteVenta.png';
import confPrensa from '../assets/img/confPrensa.png';

const title1 = () =>(
    <div>
    <p className="title-big1">
        Potcast 23
    </p>
    <p className="title-little1">
        Podcast 23 Abril: Consejo consultivo empresarial
    </p>
    </div>
);

const title2 = () =>(
    <div>
    <p className="title-little2">
    Reporte de venta de vehículos ligeros nuevos <br></br>
    <strong>
    Junio de 2020.
    </strong>
    </p>
    </div>
);


const title3 = () =>(
    <div>
    <p className="title-little3">
    Conferencia de prensa <br></br>
    <small>
    06/03/2020
    </small>
    </p>
    </div>
);


const ComunicationCarrousel = () => (

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
                <ComunicationCard itemImg={microfono} 
                itemTitle={
                    title1()
                }
                itemContent={potcast23} >
                
                </ComunicationCard>
            </div>
            <div className="comunicacion-item">
            <ComunicationCard itemImg={periodico} 
            itemTitle={
                title2()
            }
                itemContent={reporteVenta}>
                
                </ComunicationCard>
                
            </div>
            <div className="comunicacion-item">
            <ComunicationCard itemImg={conf} 
                itemTitle={
                    title3()
                }
                itemContent={confPrensa}>
                
                </ComunicationCard>
                
            </div>

        </div>
    </section>

);


export default ComunicationCarrousel;