import React from 'react';
import Button from './components/Button';
import CardColashCar from './components/CardColashCar';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Galery from './components/Galery';
import ComunicationCarrousel from './components/ComunicationCarrousel';

import './assets/styles/App.scss';

import vector from './assets/img/VectorCharola.jpg';
import vectorFull from './assets/img/vectorFull.png';

const App = () => (
    <div className="App">
        <Header />
        <Hero>
            <Button buttonText="Descargar el documento" anchoBoton="345px">
                <img src={vector}></img>
            </ Button>
        </Hero>
        <About>
            <Button buttonText="ver más" anchoBoton="203px">
                <img src={vectorFull}></img>
            </Button>
        </About>

        <CardColashCar className="card-colash"/>
        <ComunicationCarrousel>
        
        </ComunicationCarrousel>
        <Galery />
       <Footer />

    </div>
);

export default App;