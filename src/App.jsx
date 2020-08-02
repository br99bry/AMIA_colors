import React from 'react';
import Button from './components/Button';
import CardColashCar from './components/CardColashCar';
import About from './components/About';
import Header from './components/Header';
import './assets/styles/App.scss';

import vector from './assets/img/VectorCharola.jpg';
import vectorFull from './assets/img/vectorFull.png';

const App = () => (
    //<Button buttonText="Descargar el documento" anchoBoton="345px" />
    // <About>
    //     <Button buttonText="ver más" anchoBoton="203px">
    //         <img src={vectorFull}></img>
    //     </Button>
    // </About>
    // <CardColashCar />
    <div className="App">
        <Header />
    </div>
);

export default App;