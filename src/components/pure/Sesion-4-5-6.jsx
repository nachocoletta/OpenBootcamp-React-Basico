import React, { Component, useState, useEffect} from 'react'
// import '../../styles/clock.scss';

export const ClockHook = () => {

    const state = {
        fecha: new Date().toLocaleTimeString(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [estado, setEstado] = useState(state);

    

    useEffect(() => {
        const tick = () => {
            setEstado( { ...estado, edad: estado.edad + 1, fecha: new Date().toLocaleTimeString() } );
        }    

        const timerID = setInterval (
            () => tick(), 1000
         );

        return () => {
            clearInterval (timerID);
        };
    }, [estado]);

    
    return (
        <div>
            <h1>Componente Funcional</h1>
            <h2>
                Hora Actual:
                {estado.fecha}
            </h2>
            <h3>
                {estado.nombre} {estado.apellidos}
            </h3>
            <h1>Edad: {estado.edad}</h1>
        </div>
    )
}

export class Clock extends Component {
   constructor(props) {
      super(props);
      // Estado privado del component
      this.state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: 'Martín',
         apellidos: 'San José'
      };
   }
   componentDidMount(){
      this.timerID = setInterval (
         () => this.tick(), 1000
      );
   }
   componentWillUnmount() {
      clearInterval (this.timerID);
   }
   render() {
      return (
         <div>
        <h1>Componente de clase</h1>
         <h2>
         Hora Actual:
         {this.state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{this.state.nombre} {this.state.apellidos}</h3>
         <h1>Edad: {this.state.edad}</h1>
         </div>
      )
   }
   tick(){
      this.setState((prevState) => {
         let edad = prevState.edad +1;
         return {
            ...prevState,
            fecha: new Date(),
            edad
         }
      });
   }
}
// export default Clock;