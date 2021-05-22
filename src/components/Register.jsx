import React from 'react'
import Header from './Header'
import Wave from './Wave'
import axios from 'axios';

// onChange={(e) => mostrarDiv(e.target.value)} <------ NO BORRAR

function mostrarDivDoctorV() {
   document.getElementById('pricing').style.display = 'none';
   document.getElementById('divDoctor').style.display = '';
   document.getElementById('tipoD').value = "Voluntario";
}

function mostrarDivDoctorP() {
   document.getElementById('pricing').style.display = 'none';
   document.getElementById('divDoctor').style.display = '';
   document.getElementById('tipoD').value = "Premium";
}

function mostrarDivPaciente() {
   document.getElementById('pricing').style.display = 'none';
   document.getElementById('divPaciente').style.display = '';
}

function registrarDoctor() {
   var Doctor = new Object();
   Doctor.tipo = document.getElementById("tipoD").value;
   Doctor.nombre = document.getElementById("nombreD").value;
   Doctor.apellido = document.getElementById("apellidoD").value;
   Doctor.user = document.getElementById("userD").value;
   Doctor.password = document.getElementById("passwordD").value;
   Doctor.telefono = document.getElementById("telefonoD").value;
   Doctor.email = document.getElementById("emailD").value;
   Doctor.direccion = document.getElementById("direccionD").value;
   Doctor.especialidades = document.getElementById("especialidadesD").value;
   Doctor.horaIncial = document.getElementById("horaInicialD").value;
   Doctor.horaFinal = document.getElementById("horaFinalD").value;
   console.log(Doctor)
   // Envio POST al backend
   axios.post('https://dblinkmed.herokuapp.com/crearUsuario', {
      "tipo": Doctor.tipo,
      "nombre": Doctor.nombre,
      "apellido": Doctor.apellido,
      "user": Doctor.user,
      "password": Doctor.password,
      "telefono": Doctor.telefono,
      "email": Doctor.email,
      "direccion": Doctor.direccion,
      "especialidades": Doctor.especialidades,
      "horaIncial": Doctor.horaIncial,
      "horaFinal": Doctor.horaFinal
   })
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      });


   /*
    fetch('https://dblinkmed.herokuapp.com/crearUsuario', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    {
       "tipo": "${Doctor.tipo}"
       "nombre": "${Doctor.nombre}",
       "apellido": "${Doctor.apellido}",
       "user": "${Doctor.user}",
       "password": "${Doctor.password}",
       "telefono": "${Doctor.telefono}",
       "email": "${Doctor.email}",
       "direccion": "${Doctor.direccion}",
       "especialidades": "${Doctor.especialidades}",
       "horaIncial": "${Doctor.horaIncial}",
       "horaFinal": "${Doctor.horaFinal}"
   }
        ` }),
    })
    .then(res => res.json())
    .then(res => console.log(res))
    */
}

function registrarPaciente() {
   var Paciente = new Object();
   Paciente.nombre = document.getElementById("nombreP").value;
   Paciente.apellido = document.getElementById("apellidoP").value;
   Paciente.user = document.getElementById("userP").value;
   Paciente.password = document.getElementById("passwordP").value;
   Paciente.telefono = document.getElementById("telefonoP").value;
   Paciente.email = document.getElementById("emailP").value;
   Paciente.direccion = document.getElementById("direccionP").value;
   axios.post('https://dblinkmed.herokuapp.com/crearUsuario', {
      "nombre": Paciente.nombre,
      "apellido": Paciente.apellido,
      "user": Paciente.user,
      "password": Paciente.password,
      "telefono": Paciente.telefono,
      "email": Paciente.email,
      "direccion": Paciente.direccion,
   })
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      });
}

const Register = () => {
   return (
      <div>
         <Header></Header>
         {/* ======= Hero Section ======= */}
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
            {/* End Pricing Section */}
            <div>
            </div>
            <div id="divDoctor" style={{ "display": "none" }}>
               <section id="features" className="features" style={{ "padding": "1rem" }}>
                  <div className="container">
                     <div className="section-title" data-aos="fade-up">
                        <h2>Registro</h2>
                        <p style={{ "color": "white" }}>Doctor</p>
                     </div>
                     <div className="row" data-aos="fade-left">
                        <form role="form" class="php-email-form" style={{ "width": "100%" }}>
                           <input type="hidden" id="tipoD" />
                           <div class="form-row">
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-prepend">
                                       <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Nombre</span>
                                       </div>
                                    </div>
                                    <input type="text" id="nombreD" className="form-control" placeholder="Escriba su nombre" />
                                 </div>
                              </div>
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-prepend">
                                       <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Apellido</span>
                                       </div>
                                    </div>
                                    <input type="text" id="apellidoD" className="form-control" placeholder="Escriba su apellido" />
                                 </div>
                              </div>
                           </div>
                           <div class="form-row">
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-prepend">
                                       <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                       </svg>  Usuario</span>
                                       </div>
                                    </div>
                                    <input type="text" id="userD" className="form-control" placeholder="Escriba su usuario" />
                                 </div>
                              </div>
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                       <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>   Clave</span>
                                    </div>
                                    <input type="password" id="passwordD" className="form-control" placeholder="Escriba su contraseña" />
                                 </div>
                              </div>
                           </div>
                           <div class="form-row">
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-prepend">
                                       <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                       </svg>  Telefono</span>
                                       </div>
                                    </div>
                                    <input type="text" id="telefonoD" className="form-control" placeholder="Escriba su teléfono" />
                                 </div>
                              </div>
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-prepend">
                                       <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                       </svg>  Email</span>
                                       </div>
                                    </div>
                                    <input type="email" id="emailD" className="form-control" placeholder="Escriba su email" />
                                 </div>
                              </div>
                           </div>
                           <div class="form-group">
                              <div className="input-group">
                                 <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                       <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>  Dirección</span>
                                    </div>
                                 </div>
                                 <input type="text" id="direccionD" className="form-control" placeholder="Escriba su dirección" />
                              </div>
                           </div>
                           <div class="form-row">
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-prepend">
                                       <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                                          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                       </svg>  Especialidad</span>
                                       </div>
                                    </div>
                                    <input type="text" id="especialidadesD" className="form-control" placeholder="Escriba su especialidades" />
                                 </div>
                              </div>
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-prepend">
                                       <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                       </svg> Desde</span>
                                       </div>
                                    </div>
                                    <input type="time" id="horaInicialD" className="form-control" />
                                    <div className="input-group-prepend">
                                       <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                          <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                          <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                          <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                       </svg>  Hasta</span>
                                       </div>
                                    </div>
                                    <input type="time" id="horaFinalD" className="form-control" />
                                 </div>
                              </div>
                           </div>
                           <div class="mb-3">
                              <div style={{ "display": "none", "color": "white" }}>¡Ha ocurrido un error!</div>
                           </div>
                           <div class="text-center"><a href="#" onClick={registrarDoctor} className="btn-get-started scrollto">Aceptar</a></div>
                        </form>
                     </div>
                  </div>
               </section>
               {/* End Features Section */}
            </div>
            <div id="divPaciente" style={{ "display": "none" }}>
               <section id="features" className="features" style={{ "padding": "1rem" }}>
                  <div className="container">
                     <div className="section-title" data-aos="fade-up">
                        <h2>Registro</h2>
                        <p style={{ "color": "white" }}>Paciente</p>
                     </div>
                     <div className="row" data-aos="fade-left">
                        <form role="form" class="php-email-form" style={{ "width": "100%" }}>
                           <div class="form-row">
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-prepend">
                                       <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Nombre</span>
                                       </div>
                                    </div>
                                    <input type="text" id="nombreP" className="form-control" placeholder="Escriba su nombre" />
                                 </div>
                              </div>
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-prepend">
                                       <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Apellido</span>
                                       </div>
                                    </div>
                                    <input type="text" id="apellidoP" className="form-control" placeholder="Escriba su apellido" />
                                 </div>
                              </div>
                           </div>
                           <div class="form-row">
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-prepend">
                                       <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                       </svg>  Usuario</span>
                                       </div>
                                    </div>
                                    <input type="text" id="userP" className="form-control" placeholder="Escriba su usuario" />
                                 </div>
                              </div>
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                       <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>   Clave</span>
                                    </div>
                                    <input type="password" id="passwordP" className="form-control" placeholder="Escriba su contraseña" />
                                 </div>
                              </div>
                           </div>
                           <div class="form-row">
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-prepend">
                                       <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                       </svg>  Telefono</span>
                                       </div>
                                    </div>
                                    <input type="text" id="telefonoP" className="form-control" placeholder="Escriba su teléfono" />
                                 </div>
                              </div>
                              <div class="col-md-6 form-group">
                                 <div className="input-group">
                                    <div className="input-group-prepend">
                                       <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                       </svg>  Email</span>
                                       </div>
                                    </div>
                                    <input type="email" id="emailP" className="form-control" placeholder="Escriba su email" />
                                 </div>
                              </div>
                           </div>
                           <div class="form-group">
                              <div className="input-group">
                                 <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                       <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>  Dirección</span>
                                    </div>
                                 </div>
                                 <input type="text" id="direccionP" className="form-control" placeholder="Escriba su dirección" />
                              </div>
                           </div>
                           <div class="mb-3">
                              <div style={{ "display": "none", "color": "white" }}>¡Ha ocurrido un error!
                     </div>
                           </div>
                           <div class="text-center"><a href="#" onClick={registrarPaciente} className="btn-get-started scrollto">Aceptar</a></div>
                        </form>
                     </div>
                  </div>
               </section>
               {/* End Features Section */}
            </div>
            <Wave />
         </section>
         {/* End Hero */}
      </div>
   )
}

export default Register
