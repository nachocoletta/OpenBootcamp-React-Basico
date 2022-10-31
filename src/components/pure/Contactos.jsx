
import PropTypes from 'prop-types';
// import { Contacto } from '../../models/contacto.class';

const Contactos = ( { contacto , remove, changeStatus} ) => {

    return (
        <tr>
            <td>
                <span className='ms-2'>{contacto.nombre}</span>
            </td>
            <td className='align-middle'>
                <span>{contacto.apellido}</span>
            </td>
            <td className='align-middle'>
                <span>{contacto.email}</span>
            </td>
            <td className='align-middle'>
                <span>{contacto.conectado ? 
                        <i className='bi-toggle-on task-action' style={{color: 'green'}} onClick={() => {changeStatus(contacto)}}></i> : 
                        <i className='bi-toggle-off task-action' style={{color: 'red'}} onClick={() => {changeStatus(contacto)}}></i>}
                </span>      
            </td>
            <td className='align-middle'>
                <i className='bi-trash task-action' onClick={() => remove(contacto)}></i>   
            </td>
        </tr>
    
    );
};


Contactos.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
};

export default Contactos;
