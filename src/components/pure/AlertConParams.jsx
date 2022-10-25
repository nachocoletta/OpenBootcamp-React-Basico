import React, { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
import ImprimirAlert from './ImprimirAlert';

 const AlertConParams = () => {

    const [nombre, setNombre] = useState("Nacho");

    const inputRef = useRef('');

    const imprimirAlerta = () => {
        alert(inputRef.current.value);

        setNombre(inputRef.current.value);
        // alert(`Hola ${nombre}`);
    }

    const seteoDeNombre = (nuevoNombre) => {
        // setNombre(nuevoNombre);
    }

    const pressButton = () => {
        const text = inputRef.current.value;
        setNombre(text)
        alert(text); 
    }
    return (
        <div style={{background: 'red', borderColor: 'black'}}>
            <div>
                <p>Hola, {nombre}</p>
                <input type='text' ref={inputRef} placeholder='Ingrese texto...'></input>
            
                <ImprimirAlert nombre={nombre} funcion={imprimirAlerta} seteoDeNombre={seteoDeNombre} clickBotonPadre={pressButton}></ImprimirAlert>            
            </div>
        </div>
    );
};




export default AlertConParams;
