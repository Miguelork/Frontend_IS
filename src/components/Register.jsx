import React from 'react'
import Header from './Header'
import Wave from './Wave'

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
    Doctor.hora = document.getElementById("horaD").value;
    console.log(Doctor)
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
    console.log(Paciente) 
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
               <div className="col-lg-3 col-md-6">
                  <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                     <h3>Free</h3>
                     <h4><sup>$</sup>0<span> / month</span></h4>
                     <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li className="na">Pharetra massa</li>
                        <li className="na">Massa ultricies mi</li>
                     </ul>
                     <div className="btn-wrap">
                        <a href="#" className="btn-buy" onClick={ mostrarDivPaciente }>Buy Now</a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                  <div className="box featured" data-aos="zoom-in" data-aos-delay={200}>
                     <h3>Business</h3>
                     <h4><sup>$</sup>19<span> / month</span></h4>
                     <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li className="na">Massa ultricies mi</li>
                     </ul>
                     <div className="btn-wrap">
                        <a href="#" className="btn-buy" onClick={ mostrarDivDoctorV }>Buy Now</a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                  <div className="box featured" data-aos="zoom-in" data-aos-delay={200}>
                     <h3>Business</h3>
                     <h4><sup>$</sup>19<span> / month</span></h4>
                     <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li className="na">Massa ultricies mi</li>
                     </ul>
                     <div className="btn-wrap">
                        <a href="#" className="btn-buy" onClick={ mostrarDivDoctorP }>Buy Now</a>
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
                           <input type="text" class="form-control" id="nombreD" placeholder="Escriba su Nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                           <div class="validate"></div>
                        </div>
                        <div class="col-md-6 form-group">
                           <input type="text" class="form-control" id="apellidoD" placeholder="Escriba su Apellido" data-rule="email" data-msg="Please enter a valid email" />
                           <div class="validate"></div>
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="col-md-6 form-group">
                           <input type="text" class="form-control" id="userD" placeholder="Escriba su Usuario" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                           <div class="validate"></div>
                        </div>
                        <div class="col-md-6 form-group">
                           <input type="password" class="form-control" id="passwordD" placeholder="Escriba su Contraseña" data-rule="email" data-msg="Please enter a valid email" />
                           <div class="validate"></div>
                        </div>
                     </div>                     
                     <div class="form-row">
                        <div class="col-md-6 form-group">
                           <input type="text" class="form-control" id="telefonoD" placeholder="Escriba su Teléfono " data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                           <div class="validate"></div>
                        </div>
                        <div class="col-md-6 form-group">
                           <input type="email" class="form-control" id="emailD" placeholder="Escriba su Email" data-rule="email" data-msg="Please enter a valid email" />
                           <div class="validate"></div>
                        </div>
                     </div>
                     <div class="form-group">
                           <input type="text" class="form-control" id="direccionD" placeholder="Escriba su Dirección" data-rule="email" data-msg="Please enter a valid email" />
                           <div class="validate"></div>
                        </div>
                        <div class="form-row">
                        <div class="col-md-6 form-group">
                           <input type="text" class="form-control" id="especialidadesD" placeholder="Escriba su Especialidades" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                           <div class="validate"></div>
                        </div>
                        <div class="col-md-6 form-group">
                           <input type="text" class="form-control" id="horaD" placeholder="Escriba su Hora de atención. Ej: 8:00AM a 11:00AM" data-rule="email" data-msg="Please enter a valid email" />
                           <div class="validate"></div>
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
                           <input type="text" class="form-control" id="nombreP" placeholder="Escriba su Nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                           <div class="validate"></div>
                        </div>
                        <div class="col-md-6 form-group">
                           <input type="text" class="form-control" id="apellidoP" placeholder="Escriba su Apellido" data-rule="email" data-msg="Please enter a valid email" />
                           <div class="validate"></div>
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="col-md-6 form-group">
                           <input type="text" class="form-control" id="userP" placeholder="Escriba su Usuario" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                           <div class="validate"></div>
                        </div>
                        <div class="col-md-6 form-group">
                           <input type="password" class="form-control" id="passwordP" placeholder="Escriba su Contraseña" data-rule="email" data-msg="Please enter a valid email" />
                           <div class="validate"></div>
                        </div>
                     </div>                     
                     <div class="form-row">
                        <div class="col-md-6 form-group">
                           <input type="text" class="form-control" id="telefonoP" placeholder="Escriba su Teléfono " data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                           <div class="validate"></div>
                        </div>
                        <div class="col-md-6 form-group">
                           <input type="email" class="form-control" id="emailP" placeholder="Escriba su Email" data-rule="email" data-msg="Please enter a valid email" />
                           <div class="validate"></div>
                        </div>
                     </div>
                     <div class="form-group">
                           <input type="text" class="form-control" id="direccionP" placeholder="Escriba su Dirección" data-rule="email" data-msg="Please enter a valid email" />
                           <div class="validate"></div>
                        </div>
                     <div class="mb-3">
                        <div style={{"display":"none" , "color":"white"}}>¡Ha ocurrido un error!</div>
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
