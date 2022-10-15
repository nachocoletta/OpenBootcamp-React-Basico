import React , { useState }from 'react';
import PropTypes from 'prop-types';
// import { Contacto } from '../../models/contacto.class';
import { ContactoCambiarEstadoEnLinea } from './ContactoCambiarEstadoEnLinea.jsx'

const ContactoComponent = ({contacto}) => {

    const { nombre, apellido, email, conectado } = contacto; 

    const [connected, setConnected] = useState(conectado); // true

    const cambiarEstadoOnline = () => {
        connected ? setConnected(false) : setConnected(true)
    }
   
    return (
        <div>
            <div>
                <h1>{`Hola ${nombre}, ${apellido}. Tu email es ${email}.
                Y en este momento te encuentras `}</h1>
                <h2>{connected ? 'Conectado' : 'Desconectado'}</h2>
            </div>
            <div>
                <ContactoCambiarEstadoEnLinea functionChangeState={cambiarEstadoOnline}></ContactoCambiarEstadoEnLinea>
            </div>
        </div>
    );
};


ContactoComponent.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
};


export default ContactoComponent;
