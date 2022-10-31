import React, { useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Contacto } from '../../../models/contacto.class.js';



const contactoSchema = Yup.object().shape(
    {
        nombre: Yup.string()
                .required('Nombre requerido')
                .min(3)
                .max(15),
        apellido: Yup.string()
                .required('Apellido requerido')
                .min(3)
                .max(15),
        email: Yup.string()
                .required('Email requerido')
                .email('Formato de mail invalido'),
        conectado: Yup.boolean()
                .required('Conectado requerido')
    }
);

const ContactoFormik = ( {add, sort} ) => {
    
    const initialCredentials = {
        nombre: '',
        apellido: '',
        email: '',
        conectado: true
    }

    const resetForm = () => {
        alert(`${refNombre.current.value}`);
        refNombre.current.value =  '';
        refApellido.current.value = '';
        refEmail.current.value = '';
        // alert(`${refNombre.current.value}`);
    }

  
    const orderList = () => {

    }
    const addContacto = (e) => {
        // e.preventDefault();
        const newContacto = new Contacto(refNombre.current.value,
                                         refApellido.current.value,
                                         refEmail.current.value,
                                         refConectado.current.value);
        add(newContacto);
        // refNombre.current.value = refApellido.current.value = refEmail.current.value = '';
    }

    const refNombre = useRef();
    const refApellido = useRef();
    const refEmail = useRef();
    const refConectado = useRef();
    
    return (
        <div style={{margin: "20px"}}>
            <h4>Contactos desde Formik</h4>
            <Formik
                initialValues={ initialCredentials }
                validationSchema={ contactoSchema }
                // onSubmit={ async () => { await addContacto(); } }
                // resetForm to clear formik fields after submit
                // onSubmit={(values, { resetForm }) => {

                //     console.log(values);
                //     addContacto();
                //     resetForm({values: ''})}}
                onSubmit={ async ( values, { resetForm } ) => { 
                                            console.log(values)
                                            await new Promise((r) => {setTimeout(r, 2000)})
                                            addContacto(); 
                                            resetForm({values: ''})
                                            // await addContacto();
                                            // await resetForm() 
                                        } 
                        }
                // onSubmit={async (values, { setSubmitting }) => {
                //             // setSubmitting(true);
                //             addContacto();
                //             // await sleep(500);
                //             // setSubmitting(false);
                //             }}
                // onSubmit={() => {async (values) => (
                //     await new Promise((r) => setTimeout(r, 1000))
                //     alert(JSON.stringify(values, null, 2));
                //         addContacto();
                // )}}
            >

            {({
                values,
                touched,
                errors,
                isSubmitting
              }) => (
                <Form >
                    <label htmlFor='nombre'>Nombre</label>
                    <Field id='nombre' 
                           name='nombre'
                           placeholder='Ingrese nombre...' 
                           innerRef={refNombre}
                           
                           />
                {
                    errors.nombre && touched.nombre && 
                    (
                        <ErrorMessage name='nombre' component='div'></ErrorMessage>
                    )
                }
                <label htmlFor='apellido'>Apellido</label>
                    <Field id='apellido' 
                           name='apellido'
                           placeholder='Ingrese apellido...' 
                           innerRef={refApellido}
                           />
                {
                    errors.apellido && touched.apellido && 
                    (
                        <ErrorMessage name='apellido' component='div'></ErrorMessage>
                    )
                }
                <label htmlFor="email">Email</label>
                            <Field id="email" 
                                 type="email" 
                                 name="email" 
                                 placeholder="example@email.com"
                                 innerRef={refEmail} />

                            {/* Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                            }

            <label htmlFor="conectado">conectado</label>
            <Field id="conectado" 
                    type="conectado" 
                    name="conectado" 
                    placeholder="example@email.com"
                    innerRef={refConectado} />

            {/* Email Errors */}
            {
                errors.conectado && touched.conectado && 
                (
                    <ErrorMessage name="conectado" component='div'></ErrorMessage>
                )
            }
                {/* <button type="submit" onClick={() => orderList()}>Ordenar</button> */}
                <button type="submit">Crear Usuario</button>
                {isSubmitting ? 
                    (<p>Creando nuevo usuario...</p>) 
                    : (null)
                }
                </Form>
              )
            }

            </Formik>
        </div>
    );
}

export default ContactoFormik;
