// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4';
import Greetingstyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import Optionalrender from './components/pure/optionalRender';
import Loginformik from './components/pure/forms/loginFormik';
import Registerformik from './components/pure/forms/registerFormik';
import Asyncexample from './components/pure/AsyncExample';
import Observableexample from './components/pure/ObservableExample';
import Fetchexample from './components/pure/FetchExample';
import Axiosexample from './components/pure/AxiosExample';
import Axioscrudexample from './components/pure/AxiosCRUDExample';
import ContactoComponent from './components/pure/Contacto';
import { Contacto } from './models/contacto.class';
import { EjemploDePrueba } from './hooks/EjemploDePrueba.jsx';
import { Contactobis }  from './components/Contactobis.jsx'
import { Clock, ClockHook } from './components/pure/Sesion-4-5-6';
import  AlertConParams  from './components/pure/AlertConParams';
import Contactos from './components/pure/Contactos';
import ContactoList from './components/container/contactoList';
import Sesiones1011y12 from './components/pure/Sesiones 10-11-12';
import ContactoFormik from './components/pure/forms/contactoFormik';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginformikPropio from './components/pure/forms/loginFormikPropio';
import RegisterFormikPropio from './components/pure/forms/registerFormikPropio';
import { useContext } from 'react';
import Notfoundpage from './pages/404/NotFoundPage';
import AxiosChuckNorris from './components/pure/AxiosChuckNorris';




function App() {


  // const { usuario } = useContext( AuthContext );

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name={"Mart??n"}></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <Greetingf name="Mart??n"></Greetingf> */}
        {/* Componente de Listado de Tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <EjemploDePrueba></EjemploDePrueba> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* Todo loq ue hay aqu??, es tratado como props.children */}
        {/* <Ejemplo4 nombre="Mart??n">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <Greetingstyled name="Mart??n"></Greetingstyled> */}
      {/* </header> */}
      {/* Gesti??n de eventos */}
      {/* <Father></Father> */}

      {/* Ejemplos de Renderizado condicional */}
       {/* <Optionalrender></Optionalrender>  */}

      {/* Ejemplos de uso de Formik y Yup */}
      {/* <Loginformik></Loginformik> */}
      {/* <Registerformik></Registerformik> */}

      {/* Ejemplos De procesos as??nrconos */}
      {/* <Asyncexample></Asyncexample> */}
      {/* <Observableexample></Observableexample> */}
      {/* <Fetchexample></Fetchexample> */}
      {/* <Axiosexample></Axiosexample> */}
      {/* <Axioscrudexample></Axioscrudexample> */}
      <AxiosChuckNorris></AxiosChuckNorris>
      {/* PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}

      {/* Ejercicio sesiones 1, 2 y 3 */}
      {/* <ContactoComponent
                  contacto={nuevoContacto}

      ></ContactoComponent>
      <Contactobis contacto={nuevoContacto} nuevoNombre={nuevoNombre}></Contactobis> */}
      {/* Sesiones 4 5 y 6 */}
      {/* <Clock></Clock>
      <ClockHook></ClockHook> */}
      {/* <AlertConParams></AlertConParams> */}
      <Router>
        <Switch>
          
          <Route exact path='/' children={() => { return sessionStorage.getItem("Nombre") 
                                                          ?  <ContactoList /> 
                                                          : <Redirect to='/login' />

          }}
          />
          {/* <Route exact path='/' component={LoginformikPropio} /> */}

          <Route exact path='/login' children={() => { return sessionStorage.getItem("Nombre") 
                                                          ?  <Redirect to='/contacto' />
                                                          : <LoginformikPropio />

          }} />
          {/* <Route exact path='/login' component={LoginformikPropio} /> */}

          <Route exact path='/contacto' children={() => { return sessionStorage.getItem("Nombre") 
                                                          ?  <ContactoList /> 
                                                          : <Redirect to='/login' />   }
                                                  } />
          <Route exact path='/register' component={RegisterFormikPropio} />
          <Route path="*" children={() => { return <Notfoundpage /> }} />
        </Switch>
      </Router>
      {/* <Sesiones1011y12></Sesiones1011y12> */}
    </div>
  );
}

export default App;
