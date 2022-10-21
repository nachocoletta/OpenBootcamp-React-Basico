import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BotonCambioEstadoOnLine from './pure/BotonCambioEstadoOnLine';
// import { PersonalVideo } from '@mui/icons-material';
import { Contacto } from '../models/contacto.class';

export const Contactobis = ( {contacto, nuevoNombre} ) => {

    const { nombre, apellido, email, conectado } = contacto;

    const nuevaPersona = new Contacto("Wachin","Pirulin","puro@choto.com",true)
    const nuevaPersona2 = new Contacto("Wachin 420","Pirulin","puro@choto.com",true)
    const [estadoConectado, setEstadoConectado] = useState(conectado);
    const [datosPersona, setDatosPersona] = useState(nuevaPersona2);
    
    const cambiarEstadoOnline = ( ) => {
        
        estadoConectado ? setEstadoConectado(false) : setEstadoConectado(true);
        setDatosPersona( nuevaPersona2 )

    }

    return (
        <div>
            <h1>{`Hola!, tu nombre es ${estadoConectado ? contacto.nombre : datosPersona.nombre} ${apellido}
            tu email es: ${email} y te encuentras...`}</h1>
            <h2>{ estadoConectado ? "Conectado" : "Desconectado"}</h2>
            <BotonCambioEstadoOnLine cambioEstado={cambiarEstadoOnline}
                                     nuevoNombre="Pirulo"></BotonCambioEstadoOnLine>
        </div>
    );
};


Contactobis.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
};


// export default Contactobis;
