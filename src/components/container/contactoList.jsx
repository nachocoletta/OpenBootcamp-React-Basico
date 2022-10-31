import React, {useState} from 'react';
import Contactos from '../pure/Contactos'
import { Contacto } from '../../models/contacto.class';
import ContactoForm from '../pure/forms/contactoForm';
import ContactoFormik from '../pure/forms/contactoFormik';



const ContactoList = () => {

    const persona1 = new Contacto('Ignacio', 'Coletta', 'ignacio_coletta@hotmail.com', true);
    const persona2 = new Contacto('Juan', 'De los Palotes', 'juandelospalotes@gmail.com', false);
    const persona3 = new Contacto('Pedro', 'Picapiedras', 'pedro@picapiedras.com', true);


    const [personas, setPersonas] = useState([persona1, persona2, persona3]);

    const removePerson = (persona) => {
        const index = personas.indexOf(persona);
        const tempRemove = [...personas];
        tempRemove.splice(index,1);
        setPersonas(tempRemove);

    }

    const changeStatus = (persona) => {
        const index = personas.indexOf(persona);
        const tempChangeStatus = [...personas];
        // console.log(tempChangeStatus[index].conectado);
        tempChangeStatus[index].conectado = !tempChangeStatus[index].conectado;
        setPersonas(tempChangeStatus);
    }

    const addPerson = (persona) => {
        // console.log(`Persona ${persona.conectado}`)
        const tempAddPersona = [...personas];
        tempAddPersona.push(persona);
        
        // console.log(tempAddPersona);
        setPersonas(tempAddPersona);
        // console.log(personas.length)
    }
    
    const sortPerson = (arrayPersonas) => {
        const tempSortPersonas = [...personas]; 
        tempSortPersonas.sort( (a,b) => {
            if(a.nombre !== b.nombre)
                if(a.nombre.toLowerCase() < b.nombre.toLowerCase())
                    return -1;
                else
                    return 1;
            else
                return 0;
        })
        setPersonas(tempSortPersonas);
    }
    const Table = () => {

        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Apellido</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Conectado</th>
                        <th scope='col'>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        personas.map( (person, index) => {
                            return(
                                <Contactos
                                    key={index}
                                    contacto={person}
                                    remove={removePerson}
                                    changeStatus={changeStatus}
                                >
                                </Contactos>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }

    let personaTable;

    if(personas.length > 0){
        personaTable = <Table></Table>
    }else{
        personaTable = (
        <div>
            <h3> There are no persons to show</h3>
            <h4> Please, create one</h4>
        </div>
        )
    }

    return (
        <div>
            {personaTable}
            <ContactoForm add={addPerson}></ContactoForm>
            <ContactoFormik add={addPerson} sort={sortPerson}></ContactoFormik>
            <button onClick={ () => sortPerson()}>Ordenar</button>
        </div>

    );
}


export default ContactoList;
