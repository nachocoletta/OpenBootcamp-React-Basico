
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Contacto } from '../../../models/contacto.class';

const ContactoForm = ( {add} ) => {

    const addContacto = (e) => {
        e.preventDefault();
        const newContacto = new Contacto(refNombre.current.value,
                                         refApellido.current.value,
                                         refEmail.current.value,
                                         true);
        add(newContacto);
        refNombre.current.value = refApellido.current.value = refEmail.current.value = '';
    }

    const refNombre = useRef();
    const refApellido = useRef();
    const refEmail = useRef();

    return (
        <form onSubmit={addContacto}>
            <div>
                <input type="text" ref={refNombre} placeholder="Ingrese nombre..." autoFocus></input>
                <input type="text" ref={refApellido} placeholder="Ingrese apellido..."></input>
                <input type="text" ref={refEmail} placeholder="Ingrese email..."></input>
                <button type='submit'>Enviar</button>
            </div>

        </form>
    );
}

ContactoForm.protoTypes = {
    add: PropTypes.func.isRequired
}
export default ContactoForm;
