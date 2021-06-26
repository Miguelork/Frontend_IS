import React from 'react'
import Header from './Header'
import Wave from './Wave'
import FormDoctor from './FormDoctor';
import FormPaciente from './FormPaciente';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function mostrarDivDoctorV() {
   document.getElementById('pricing').style.display = 'none';
   document.getElementById('divDoctor').style.display = '';
   document.getElementById('tipoD').value = "Voluntario";
   document.getElementById('tamm').classList.add('col-md-12');
}

function mostrarDivDoctorP() {
   document.getElementById('pricing').style.display = 'none';
   document.getElementById('divDoctor').style.display = '';
   document.getElementById('tipoD').value = "Premium";
   mostrar('divMonto')
   mostrar('avisopago')
   document.getElementById('tamm').classList.add('col-md-6');
}

function mostrarDivPaciente() {
   document.getElementById('pricing').style.display = 'none';
   document.getElementById('divPaciente').style.display = '';
}

const cookies = new Cookies();

class Register extends React.Component {
   cerrarSesion = () => {
      cookies.remove("usuario", { path: "/" });
      window.location.href = "/";
   };

   componentDidMount() {
      if (cookies.get("usuario")) {
         window.location.href = "/";
      }
   }

   render() {
      return (
         <div>
            <Header></Header>
            <section id="hero">
               <section id="pricing" className="pricing" style={{ "padding": "1rem" }}>
                  <div className="container">
                     <div data-aos="zoom-out">
                        <h1>Unete a la plataforma <span>LinkMed</span></h1>
                        <h2>Seleciona tu tipo de usuario</h2>
                     </div>
                     <div className="row" data-aos="fade-center" style={{ "justify-content": "center" }}>
                        <div className="col-lg-3 col-md-6 col-12">
                           <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                              <h3>Paciente</h3>
                              <h4><sup>$</sup>0<span> / mes</span></h4>
                              <ul>
                                 <li>Crear un nuevo foro</li>
                                 <li>Buscar entre los foros</li>
                                 <li>Buscar Medicos </li>
                                 <li>Chat con Medicos (Especiales)</li>
                                 <li>Valorar Medicos (Especiales)</li>
                              </ul>
                              <div className="btn-wrap">
                                 <a href="#" className="btn-buy" onClick={mostrarDivPaciente}>Seleccionar</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mt-4 mt-md-0">
                           <div className="box featured" data-aos="zoom-in" data-aos-delay={200}>
                              <h3>Medico Voluntario</h3>
                              <h4><sup>$</sup>0<span> / mes</span></h4>
                              <ul>
                                 <li>Buscar entre los foros</li>
                                 <li>Responder foros</li>
                                 <li>Ver historia el paciente</li>
                                 <li className="na">Chat con paciente</li>
                                 <li className="na">Puntuación personal</li>
                              </ul>
                              <div className="btn-wrap">
                                 <a href="#" className="btn-buy" onClick={mostrarDivDoctorV}>Seleccionar</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mt-4 mt-md-0">
                           <div className="box featured" data-aos="zoom-in" data-aos-delay={200}>
                              <h3>Medico Especial</h3>
                              <h4><sup>$</sup>19,99<span> / mes</span></h4>
                              <ul>
                                 <li>Buscar entre los foros</li>
                                 <li>Responder foros</li>
                                 <li>Ver historia el paciente</li>
                                 <li>Chat con paciente</li>
                                 <li>Puntuación personal</li>
                              </ul>
                              <div className="btn-wrap">
                                 <a href="#" className="btn-buy" onClick={mostrarDivDoctorP}>Seleccionar</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <div>
               </div>
               <div id="divDoctor" style={{ "display": "none" }}>
                  <section id="features" className="features" style={{ "padding": "1rem" }}>
                     <FormDoctor />
                  </section>
               </div>
               <div id="divPaciente" style={{ "display": "none" }}>
                  <section id="features" className="features" style={{ "padding": "1rem" }}>
                     <FormPaciente />
                  </section>
               </div>
               <Wave />
            </section>
         </div>
      )
   }
}

function ocultar( id ){
   document.getElementById(id).style.opacity = '0';
   document.getElementById(id).style.transition = 'opacity 0.5s';
   setTimeout(() => {  document.getElementById(id).style.display = 'none'; }, 500);
}

function mostrar( id ){
   setTimeout(() => { 
   document.getElementById(id).style.display = 'block';
   document.getElementById(id).style.opacity = '100';
   }, 500);
}

export default Register
