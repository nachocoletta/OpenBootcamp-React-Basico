import React, { useState, useContext, useEffect } from 'react';

export const EjemploDePrueba = () => {

    const estadoInicial = {
        nombre: "Nacho",
        apellido: "Coletta"
    }

    const [contador, setContador] = useState(0);
    const [estado, setEstado] = useState(estadoInicial);
    // const contexto = useContext(null);


    useEffect( () => {
        alert("Montado " + estado.nombre)
    })
    
    useEffect( () => {
        
        if(contador > 3)
            setEstado({nombre: "Juan", apellido: "De los Palotes"});
        // console.log("Cambio el nombre a " + estado)
    },[estado.nombre, estado.apellido, contador])

    const setNuevoEstado = () => {
        setContador(contador + 1);
        if(estado.nombre !== "Ignacio"){
            setEstado( {nombre: "Ignacio", apellido: "Coletta"} )
            
        }
        else {
            setEstado( { nombre: "Nacho", apellido: "Coletta"})
            // console.log("No cambia")
        }
        console.log(estado.nombre)
        console.log(estado)
        console.log(contador)
    }
    return (
        <div>
            <button onClick={setNuevoEstado}>Setear Estado</button>
        </div>
    );
}

export default EjemploDePrueba;
