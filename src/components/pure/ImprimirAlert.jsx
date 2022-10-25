import { padding } from '@mui/system';
import React from 'react';
// import PropTypes from 'prop-types';
// import { ContactoComponent } from './Contacto'

const ImprimirAlert = ({nombre, funcion, seteoDeNombre, clickBotonPadre}) => {
   
    const botonPrimario = 'btn btn-primary';
    const botonBlur = 'btn btn-secondary';
    return (
        <div style={{background: 'blue'}}>
             <div>
                <button className={nombre === 'Nacho' ? botonPrimario : botonBlur}
                        onClick={ () => {
                                        const nuevoNombre = nombre === 'Nacho' ? 'Wacho' : 'Nacho';
                                        funcion(nombre);
                                        seteoDeNombre(nuevoNombre);
                                        }
                        }
                        style={{padding: '5px', margin: '5px'}}
                    
                >
                    Cambiar estado online
                </button>
                <button className={nombre === 'Nacho' ? botonPrimario : botonBlur}
                    onClick={clickBotonPadre}
                    style={{padding: '5px', margin: '5px'}}
                >
                    click
                </button>
            </div>
        </div>
    );
};


export default ImprimirAlert;
