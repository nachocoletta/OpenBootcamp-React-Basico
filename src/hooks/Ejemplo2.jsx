/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos
    // cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
        focusOnInput();
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con UseEffect
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando Referencia a elemento del DOM:');
    //     console.log(miRef);
    // });

    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie contador2, no habrá ejecución
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
    //     console.log('Mostrando Referencia a elemento del DOM:');
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * Cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
     */

    //  useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
    //     console.log('Mostrando Referencia a elemento del DOM:');
    //     console.log(miRef);
    // }, [contador1, contador2]);


 

    useEffect ( () => {
        alert("Cambio contador 1 a ... " + contador1)
    }, [contador1])
    // const inputEl = useRef(null);
    // const onButtonClick = () => {
    //     // `current` apunta al elemento de entrada de texto montado
    //     inputEl.current.focus();
    // };
    // return (
    //     <>
    //     <input ref={inputEl} type="text" />
    //     <button onClick={onButtonClick}>Focus the input</button>
    //     </>
    // );
    const inputEl = useRef(null);

    const focusOnInput = () => {
        // alert("entro")
        console.log(inputEl.current.value);
        // console.log(inputEl)
        // inputEl.current.innerText = "HOLA MUNDO"
        inputEl.current.value = "Holi Jeropa"
        if(contador1 === 2){
            setContador1(contador1 + 1)
            inputEl.current.value = "Holi Jeropa, ya te clavaste 2?"
        }
        // console.log("innerHtml es " + inputEl.current.value)
        // inputEl.current.focus();
    }

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <input ref={inputEl} type="text" ></input>
            <button onClick={focusOnInput}>Hacer foco</button>
            {/* <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4> */}
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
