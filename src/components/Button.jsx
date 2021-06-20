import React from 'react';
import '../assets/styles/Button.scss';


const Button = ({buttonText , anchoBoton ,children}) => {
const styles = {width: anchoBoton}

return (
    <div className="button-container" style={styles}>
        <button  className="button" type="button">{buttonText}    </button>
        <div className="button-decoration">
            {children}
            
        </div>
    </div>
);

}

export default Button;