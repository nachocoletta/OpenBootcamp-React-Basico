// En este ejercicio tendréis que crear un componente el cual contenga un elemento, puede ser un rectángulo, cuadrado.

// Las dimensiones del elemento serán de ancho 255px y de alto 255px y su color inicial tiene que ser negro.

// Dentro del componente crearéis varios métodos de captura del ratón que harán lo siguiente para que el color del elemento cambie:

// Un método para que cuando el ratón entre en el contenedor, se dará un valor aleatorio (color RGB entre 0 y 255) para cambiar el color del componente.

// Un método para que cuando salga el ratón del componente se detenga por completo el cambio de color.

// Por último, un método en el que cuando se pulsa dos veces en el componente, se tiene que detener el cambio de color.

// import { rgbToHex } from '@mui/material';
import React, { useState } from 'react';



const Sesiones1011y12 = () => {
    const estiloInicial = { height: "255px", width: "255px", backgroundColor: "black"}

    
    const enterOnFocus = () => {
        
        let colorR;
        let colorG;
        let colorB; 
        // alert("focus")

        colorR = Math.ceil(Math.random() * 255);
        colorG = Math.ceil(Math.random() * 255);
        colorB = Math.ceil(Math.random() * 255);

        // estiloInicial.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
        setEstadoDiv({ height: "255px", width: "255px", backgroundColor: `rgb(${colorR}, ${colorG}, ${colorB})`})
    // alert(estiloInicial.backgroundColor)
    }

    const outOfFocus = () => {
        setEstadoDiv(estiloInicial)
    }

    const doubleClick = () => {
        setEstadoDiv(estiloInicial)
    }
    const [estadoDiv, setEstadoDiv] = useState(estiloInicial)

    return (
        <div style={estadoDiv} onMouseOver={enterOnFocus} onMouseOut={outOfFocus} onDoubleClick={doubleClick}>
            {/* <h1 style={{"color": "white"}}>Hola</h1> */}
        </div>
    );
}

export default Sesiones1011y12;
