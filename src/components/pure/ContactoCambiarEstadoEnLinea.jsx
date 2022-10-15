import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { ContactoComponent } from './Contacto'


export const ContactoCambiarEstadoEnLinea = ({functionChangeState}) => {
   
    return (
        <div>
             <div>
                <button onClick={functionChangeState}>Cambiar estado online</button>
            </div>
        </div>
    );
};


// ContactoCambiarEstadoEnLinea.propTypes = {

// };


// export default ContactoCambiarEstadoEnLinea;
