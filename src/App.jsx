import React from 'react';
import Button from './components/Button';
import CardColashCar from './components/CardColashCar';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Galery from './components/Galery';
import ComunicationCarrousel from './components/ComunicationCarrousel';
import HeroQueEsAMIA from './components/HeroQueEsAMIA';
import DescriptionQueEsAMIA from './components/DescriptionQueEsAMIA';
import FoundersAMIA from './components/FoundersAMIA';

import './assets/styles/App.scss';

import vector from './assets/img/VectorCharola.jpg';
import vectorFull from './assets/img/vectorFull.png';

const App = () => (
        // <Hero>
        //     <Button buttonText="Descargar el documento" anchoBoton="345px">
        //         <img src={vector}></img>
        //     </ Button>
        // </Hero>
        // <About>
        //     <Button buttonText="ver más" anchoBoton="203px">
        //         <img src={vectorFull}></img>
        //     </Button>
        // </About>

        // <CardColashCar className="card-colash"/>
        // <ComunicationCarrousel>
        
        // </ComunicationCarrousel>
        // <Galery />
    <div className="App">
        <Header />
        <HeroQueEsAMIA />
        <DescriptionQueEsAMIA />
        <FoundersAMIA />
       <Footer />

    </div>
);

export default App;