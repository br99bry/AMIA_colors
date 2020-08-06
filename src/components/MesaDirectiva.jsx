import React from 'react';
import '../assets/styles/MesaDirectiva.scss';
import mesaDirectivaLeft from '../assets/img/mesaDirectivaLeft.png';


const MesaDirectiva = () =>(

    <div className="mesaDirectiva-container">
        <section className="mesaDirectiva-left">
            <img src={mesaDirectivaLeft} alt=""/>
        </section>
        <section className="mesaDirectiva-right">
            <div className="mesaDirectiva-content">
                <div className="mesaDirectiva-item">
                    <div className="mesaDirectiva-title">
                        <p>Presidente Ejecutivo de AMIA</p>
                    </div>
                    <div className="mesaDirectiva-description">
                        <p>Eduardo J. Solís Sánchez</p>
                    </div>
                </div>
                <div className="mesaDirectiva-item">
                    <div className="mesaDirectiva-title">
                        <p>Socios Fundadores</p>
                    </div>
                    <div className="mesaDirectiva-description">
                        <p>FCA México, S.A. de C.V.</p>
                        <p>Ford Motor Company, S.A. de C.V.</p>
                        <p>General Motors de México, S. de R.L. de C.V.</p>
                        <p>Nissan Mexicana, S.A. de C.V.</p>
                        <p>Volkswagen de México. S.A. de C.V.</p>
                        <p>Audi México, S.A. de C.V.</p>
                    </div>
                </div>
                <div className="mesaDirectiva-item">
                    <div className="mesaDirectiva-title">
                        <p>Socios Afiliados C</p>
                    </div>
                    <div className="mesaDirectiva-description">
                        <p>BMW de México, S.A. de C.V.</p>
                    </div>
                </div>
                <div className="mesaDirectiva-item">
                    <div className="mesaDirectiva-title">
                        <p>Socios Cooperadores</p>
                    </div>
                    <div className="mesaDirectiva-description">
                        <p>Mercedes Benz México S. de R.L. de C.V.</p>
                        <p>Peugeot México, S.A. de C.V.</p>
                        <p>Renault México, S.A. de C.V.</p>
                        <p>Suzuki Motor de México, S.A. de C.V.</p>
                        <p>Volvo Auto de México, S.A. de C.V.</p>
                        <p>Hyundai Motor de México, S. de R.L. de C.V.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

);

export default MesaDirectiva;