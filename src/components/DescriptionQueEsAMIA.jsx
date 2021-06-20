import React from 'react';
import '../assets/styles/DescriptionQueEsAMIA.scss';
import lineDown from '../assets/img/lineDown.png';
import lineUp from '../assets/img/lineUp.png';
import lineUpLarge from '../assets/img/lineUpLarge.png';
import bigPoint from '../assets/img/bigPoint.png';

const DescriptionQueEsAMIA = () =>(

    <div className="description-container">
        <div className="description-grid">
            <div className="description-item">
                <img src={lineDown} alt=""/>
                <img src={lineUp} alt=""/>
                <img src={bigPoint} alt=""/>
                <img src={lineUpLarge} alt=""/>
                
            </div>
            <div className="description-item">
                <p>
                AMIA es una asociación civil constituida por voluntad propia de las empresas fabricantes de vehículos establecidos en nuestro <br></br> país el 3 de enero de 1951. Con el propósito de tener una representación exclusiva para este sector industrial.
                </p>
                <p>
                AMIA representa los intereses de las empresas fabricantes de vehículos, como agrupación se esfuerza por conciliar los intereses <br></br> de estas empresas en forma colegiada prácticamente en todos los ámbitos, con respecto a otras instituciones similares, ante las <br></br> confederaciones de cámaras y ante los gobiernos municipales, estatales y federales.
                </p>
                <p>
                Es una asociación que representa a las empresas en un Estado de Derecho, por lo que tiene derecho de voz y voto. Ante el <br></br> público en general, estudiantes e investigadores, AMIA tiene como principal misión dar a conocer cuestiones automotrices, <br></br> evolución y estadística de los fabricantes de vehículos, afiliados en esta asociación.
                </p>
                <p>
                AMIA es prácticamente una pequeña cámara, pero tiene una gran diferencia, en AMIA los fabricantes de vehículos automotores <br></br> se afilian por voluntad propia .
                </p>
                <p>
                Los socios fundadores de AMIA fueron los señores: " John James Mc intyre de General Motors, S.A. " Rómulo O Farril Senior <br></br> de Automotriz O Farril, S.A. Fraine B. Rhuberry de Ford Motor Co. " Gabriél Fernández Sáyago de Willis Mexicana, S.A. " Henry Paasch<br></br> de Fábricas Automex, S.A. Carlos Felipe MacGregor Dondé de Armadora Automotriz, S.A.
                </p>
                <p>
                A través de los años, las actividades y evolución de la Asociación han estado estrechamente ligadas a la política industrial <br></br> instrumentada por el gobierno federal y particularmente a la política de regulación y fomento de la industria automotriz en su<br></br> conjunto. 
                </p>
                <p>
                Por tal motivo, es particularmente importante destacar la participación de AMIA a través de los diferentes Decretos y sus Reglas<br></br> de Aplicación. Asimismo, en años recientes nuestra institución ha colaborado estrechamente con las autoridades en las<br></br> negociaciones de Acuerdos y Tratados Comerciales Internacionales.
                </p>
            </div>
            <div className="description-item">
                <img src={bigPoint} alt=""/>
            </div>
            <div className="description-item">
                <p>
                AMIA esta integrada por las empresas siguientes:  
                </p>
            </div>
        </div>
    </div>

);

export default DescriptionQueEsAMIA;


