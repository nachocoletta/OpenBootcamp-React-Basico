import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { ContactoComponent } from './Contacto'


export const ContactoCambiarEstadoEnLinea = ({functionChangeState, nombre}) => {
   
    return (
        <div>
             <div>
                <button onClick={() => {functionChangeState(nombre)}}>Cambiar estado online</button>
            </div>
        </div>
    );
};


// ContactoCambiarEstadoEnLinea.propTypes = {

// };


// export default ContactoCambiarEstadoEnLinea;
