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
      <section id="pricing" className="pricing" style={{"padding":"1rem"}}>
         <div className="container">
         <div data-aos="zoom-out">
                  <h1>Unete a la plataforma <span>LinkMed</span></h1>
                  <h2>Seleciona tu tipo de usuario</h2>
                </div>
            <div className="row" data-aos="fade-center" style={{"justify-content":"center"}}>
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
                        <a href="#" className="btn-buy" onClick={ mostrarDivPaciente }>Seleccionar</a>
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
                        <a href="#" className="btn-buy" onClick={ mostrarDivDoctorV }>Seleccionar</a>
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
                        <a href="#" className="btn-buy" onClick={ mostrarDivDoctorP }>Seleccionar</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* End Pricing Section */}
      <div>
      </div>
      <div id="divDoctor" style={{"display":"none"}}>
         <section id="features" className="features" style={{"padding":"1rem"}}>
            <div className="container">
               <div className="section-title" data-aos="fade-up">
                  <h2>Registro</h2>
                  <p style={{"color":"white"}}>Doctor</p>
               </div>
               <div className="row" data-aos="fade-left">
               <form role="form" class="php-email-form" style={{"width":"100%"}}>
               <input type="hidden" id="tipoD"/>
                     <div class="form-row">
                        <div class="col-md-6 form-group">
                        <div className="input-group">
                              <div className="input-group-prepend">
                                 <span className="input-group-text" >Nombre</span>
                              </div>
                              <input type="text" id="nombreD" className="form-control" placeholder="Escriba su nombre" />
                           </div>
                        </div>
                        <div class="col-md-6 form-group">
                        <div className="input-group">
                              <div className="input-group-prepend">
                                 <span className="input-group-text" >Apellido</span>
                              </div>
                              <input type="text" id="apellidoD" className="form-control" placeholder="Escriba su apellido" />
                           </div>
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="col-md-6 form-group">
                        <div className="input-group">
                              <div className="input-group-prepend">
                                 <span className="input-group-text" >Usuario </span>
                              </div>
                              <input type="text" id="userD" className="form-control" placeholder="Escriba su usuario" />
                           </div>
                        </div>
                        <div class="col-md-6 form-group">
                        <div className="input-group">
                              <div className="input-group-prepend">
                                 <span className="input-group-text" >Contraseña</span>
                              </div>
                              <input type="password" id="passwordD" className="form-control" placeholder="Escriba su contraseña" />
                           </div>
                        </div>
                     </div>                     
                     <div class="form-row">
                        <div class="col-md-6 form-group">
                        <div className="input-group">
                              <div className="input-group-prepend">
                                 <span className="input-group-text" >Teléfono</span>
                              </div>
                              <input type="text" id="telefonoD" className="form-control" placeholder="Escriba su teléfono" />
                           </div>
                        </div>
                        <div class="col-md-6 form-group">
                        <div className="input-group">
                              <div className="input-group-prepend">
                                 <span className="input-group-text" >Email</span>
                              </div>
                              <input type="email" id="emailD" className="form-control" placeholder="Escriba su email" />
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                     <div className="input-group">
                           <div className="input-group-prepend">
                              <span className="input-group-text" >Dirección</span>
                           </div>
                           <input type="text" id="direccionD" className="form-control" placeholder="Escriba su dirección" />
                        </div>
                        </div>
                        <div class="form-row">
                        <div class="col-md-6 form-group">
                        <div className="input-group">
                           <div className="input-group-prepend">
                              <span className="input-group-text" >Especialidades</span>
                           </div>
                           <input type="text" id="especialidadesD" className="form-control" placeholder="Escriba su especialidades" />
                        </div>
                        </div>
                        <div class="col-md-6 form-group">
                        <div className="input-group">
                           <div className="input-group-prepend">
                              <span className="input-group-text" >Horas de atención</span>
                           </div>
                           <input type="time" id="horaInicialD" className="form-control" />
                           <span className="input-group-text" >Hasta</span>
                           <input type="time" id="horaFinalD" className="form-control" />
                        </div>
                        </div>
                     </div>
                     <div class="mb-3">
                        <div style={{"display":"none" , "color":"white"}}>¡Ha ocurrido un error!</div>
                     </div>
                     <div class="text-center"><a href="#" onClick={ registrarDoctor } className="btn-get-started scrollto">Aceptar</a></div>
                  </form>
               </div>
            </div>
         </section>
         {/* End Features Section */}
      </div>
      <div id="divPaciente" style={{"display":"none"}}>
         <section id="features" className="features" style={{"padding":"1rem"}}>
            <div className="container">
               <div className="section-title" data-aos="fade-up">
                  <h2>Registro</h2>
                  <p style={{"color":"white"}}>Paciente</p>
               </div>
               <div className="row" data-aos="fade-left">
                  <form role="form" class="php-email-form" style={{"width":"100%"}}>
                     <div class="form-row">
                        <div class="col-md-6 form-group">
                           <div className="input-group">
                              <div className="input-group-prepend">
                                 <span className="input-group-text" >Nombre</span>
                              </div>
                              <input type="text" id="nombreP" className="form-control" placeholder="Escriba su nombre" />
                           </div>
                        </div>
                        <div class="col-md-6 form-group">
                           <div className="input-group">
                              <div className="input-group-prepend">
                                 <span className="input-group-text" >Apellido</span>
                              </div>
                              <input type="text" id="apellidoP" className="form-control" placeholder="Escriba su apellido" />
                           </div>
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="col-md-6 form-group">
                           <div className="input-group">
                              <div className="input-group-prepend">
                                 <span className="input-group-text" >Usuario </span>
                              </div>
                              <input type="text" id="userP" className="form-control" placeholder="Escriba su usuario" />
                           </div>
                        </div>
                        <div class="col-md-6 form-group">
                           <div className="input-group">
                              <div className="input-group-prepend">
                                 <span className="input-group-text" >Contraseña</span>
                              </div>
                              <input type="password" id="passwordP" className="form-control" placeholder="Escriba su contraseña" />
                           </div>
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="col-md-6 form-group">
                           <div className="input-group">
                              <div className="input-group-prepend">
                                 <span className="input-group-text" >Teléfono</span>
                              </div>
                              <input type="text" id="telefonoP" className="form-control" placeholder="Escriba su teléfono" />
                           </div>
                        </div>
                        <div class="col-md-6 form-group">
                           <div className="input-group">
                              <div className="input-group-prepend">
                                 <span className="input-group-text" >Email</span>
                              </div>
                              <input type="email" id="emailP" className="form-control" placeholder="Escriba su email" />
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                        <div className="input-group">
                           <div className="input-group-prepend">
                              <span className="input-group-text" >Dirección</span>
                           </div>
                           <input type="text" id="direccionP" className="form-control" placeholder="Escriba su dirección" />
                        </div>
                     </div>
                     <div class="mb-3">
                        <div style={{"display":"none" , "color":"white"}}>¡Ha ocurrido un error!
                     </div>
               </div>
               <div class="text-center"><a href="#" onClick={ registrarPaciente }  className="btn-get-started scrollto">Aceptar</a></div>
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
