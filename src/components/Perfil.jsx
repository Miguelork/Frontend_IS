import React from 'react';
import axios from 'axios';
import Wave from './Wave';
import Header from './Header';
import Cookies from "universal-cookie";

const cookies = new Cookies();

const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,20}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    direccion: /^.{10,250}$/,
    password: /^.{8,15}$/,
    hora: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/,
    monto: /./
}

const campos = {
    nombre: true,
    apellido: true,
    usuario: true,
    password: true,
    password2: true,
    telefono: true,
    email: true,
    direccion: true,
    especialidad: true,
    dateI: true,
    dateE: true,
    nacimiento: true,
    sexo: true,
    monto: true
}

const validarFormularioDocPac = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampoDocPac(expresiones.usuario, e.target, 'usuario');
            break;
        case "nombre":
            validarCampoDocPac(expresiones.nombre, e.target, 'nombre');
            break;
        case "apellido":
            validarCampoDocPac(expresiones.nombre, e.target, 'apellido');
            break;
        case "password":
            validarCampoDocPac(expresiones.password, e.target, 'password');
            break;
        case "email":
            validarCampoDocPac(expresiones.correo, e.target, 'email');
            break;
        case "telefono":
            validarCampoDocPac(expresiones.telefono, e.target, 'telefono');
            break;
        case "direccion":
            validarCampoDocPac(expresiones.direccion, e.target, 'direccion')
            break;
        case "nacimiento":
            validarCampoDocPac(expresiones.direccion, e.target, 'nacimiento')
            break;
        case "sexo":
            validarCampoDocPac(expresiones.nombre, e.target, 'sexo')
            break;
    }
}

const validarCampoDocPac = (expresion, input, campo) => {
    if ((expresion.test(input.value))) {
        document.getElementById(`pac${campo}`).classList.remove('is-invalid');
        document.getElementById(`pac${campo}`).classList.add('is-valid');
        campos[campo] = true;
    } else {
        document.getElementById(`pac${campo}`).classList.add('is-invalid');
        document.getElementById(`pac${campo}`).classList.remove('is-valid');
        campos[campo] = false;
    }
}
const validarPassword2docpac = () => {
    if ((document.getElementById('pacpassword').value == document.getElementById('pacpassword2').value) && (campos.password == true)) {
        document.getElementById('pacpassword2').classList.add('is-valid');
        document.getElementById('pacpassword2').classList.remove('is-invalid');
        campos.password2 = true;
    } else {
        document.getElementById('pacpassword2').classList.add('is-invalid');
        document.getElementById('pacpassword2').classList.remove('is-valid');
        campos.password2 = false;
    }
}

const validarFormularioDoc = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampoDoc(expresiones.usuario, e.target, 'usuario');
            break;
        case "monto":
            validarCampoDoc(expresiones.monto, e.target, 'monto');
            break;
        case "nombre":
            validarCampoDoc(expresiones.nombre, e.target, 'nombre');
            break;
        case "apellido":
            validarCampoDoc(expresiones.nombre, e.target, 'apellido');
            break;
        case "especialidad":
            validarCampoDoc(expresiones.nombre, e.target, 'especialidad');
            break;
        case "password":
            validarCampoDoc(expresiones.password, e.target, 'password');
            break;
        case "email":
            validarCampoDoc(expresiones.correo, e.target, 'email');
            break;
        case "telefono":
            validarCampoDoc(expresiones.telefono, e.target, 'telefono');
            break;
        case "direccion":
            validarCampoDoc(expresiones.direccion, e.target, 'direccion')
            break;
        case "dateI":
            validarCampoDoc(expresiones.hora, e.target, 'dateI')
            break;
        case "dateE":
            validarCampoDoc(expresiones.hora, e.target, 'dateE')
            break;
        case "nacimiento":
            validarCampoDoc(expresiones.direccion, e.target, 'nacimiento')
            break;
        case "sexo":
            validarCampoDoc(expresiones.nombre, e.target, 'sexo')
            break;
    }
}

const validarCampoDoc = (expresion, input, campo) => {
    if ((expresion.test(input.value))) {
        document.getElementById(`doc${campo}`).classList.remove('is-invalid');
        document.getElementById(`doc${campo}`).classList.add('is-valid');
        campos[campo] = true;
    } else {
        document.getElementById(`doc${campo}`).classList.add('is-invalid');
        document.getElementById(`doc${campo}`).classList.remove('is-valid');
        campos[campo] = false;
    }
}
const validarpassword2doc = () => {
    if ((document.getElementById('docpassword').value == document.getElementById('docpassword2').value) && (campos.password == true)) {
        document.getElementById('docpassword2').classList.add('is-valid');
        document.getElementById('docpassword2').classList.remove('is-invalid');
        campos.password2 = true;
    } else {
        document.getElementById('docpassword2').classList.add('is-invalid');
        document.getElementById('docpassword2').classList.remove('is-valid');
        campos.password2 = false;
    }
}

const onSubmit = (e) => {
    //alert(document.getElementById("pactipo").value)
    if (document.getElementById("pactipo").value == "Paciente") {
        if (campos.password2) {
            if (campos.nombre && campos.apellido && campos.usuario && campos.password && campos.telefono &&
                campos.email && campos.direccion && campos.sexo && campos.nacimiento && campos.password2) {
                actualizarPaciente();
            } else {
                mostrar('camposincorrecto');
                ocultar('nocoincid');
            }
        } else {
            mostrar('nocoincid');
            ocultar('camposincorrecto');
        }
    } else {
        if (campos.password2) {
            if (document.getElementById("tipoD").value == "Premium") {
                if (campos.nombre && campos.apellido && campos.monto && campos.usuario && campos.password && campos.password2 && campos.telefono && campos.sexo &&
                    campos.email && campos.direccion && campos.especialidad && campos.dateI && campos.dateE && campos.nacimiento) {
                    actualizarDoctor();
                } else {
                    mostrar('camposincorrect');
                    ocultar('nocoincide');
                }
            } else {
                if (campos.nombre && campos.apellido && campos.usuario && campos.password && campos.password2 && campos.telefono && campos.sexo &&
                    campos.email && campos.direccion && campos.especialidad && campos.dateI && campos.dateE && campos.nacimiento) {
                    actualizarDoctor();
                } else {
                    mostrar('camposincorrect');
                    ocultar('nocoincide');
                }
            }
        } else {
            mostrar('nocoincide');
            ocultar('camposincorrect');
        }
    }
}

class Perfil extends React.Component {

    async componentDidMount() {
        if (!cookies.get("usuario")) {
            window.location.href = "/login";
        } else {
            let data = await cookies.get("usuario");
            if (data.tipo == "Paciente") {
                if (data.sexo == "hombre") {
                    document.getElementById("imagenero").src = "assets/img/hombre.svg";
                } else {
                    document.getElementById("imagenero").src = "assets/img/mujer.svg";
                }
            }
            if ((data.tipo == "Voluntario") || (data.tipo == "Premium")) {
                if (data.sexo == "hombre") {
                    document.getElementById("imagenero").src = "assets/img/doctorhombre.svg";
                } else {
                    document.getElementById("imagenero").src = "assets/img/doctoramujer.svg";
                }
            }

            if (data.tipo == "Paciente") {
                setTimeout(() => {
                    document.getElementById("titulo").innerHTML = "Paciente";
                    document.getElementById("pacid").value = data._id;
                    document.getElementById("pactipo").value = data.tipo;
                    document.getElementById("pacnombre").value = data.nombre;
                    document.getElementById("pacapellido").value = data.apellido;
                    document.getElementById("pacusuario").value = data.user;
                    document.getElementById("pacpassword").value = data.password;
                    document.getElementById("pacpassword2").value = data.password;
                    document.getElementById("pacnacimiento").value = data.nacimiento;
                    document.getElementById("pacsexo").value = data.sexo;
                    document.getElementById("pactelefono").value = data.telefono;
                    document.getElementById("pacemail").value = data.email;
                    document.getElementById("pacdireccion").value = data.direccion;
                    mostrar("Paciente");
                }, 1000);
            }
            if (data.tipo == "Voluntario" || data.tipo == "Premium") {
                setTimeout(() => {
                    document.getElementById("titulo").innerHTML = "Doctor";
                    document.getElementById("docid").value = data._id;
                    document.getElementById("tipoD").value = data.tipo;
                    document.getElementById("docnombre").value = data.nombre;
                    document.getElementById("docapellido").value = data.apellido;
                    document.getElementById("docusuario").value = data.user;
                    document.getElementById("docpassword").value = data.password;
                    document.getElementById("docpassword2").value = data.password;
                    document.getElementById("docnacimiento").value = data.nacimiento;
                    document.getElementById("docsexo").value = data.sexo;
                    document.getElementById("doctelefono").value = data.telefono;
                    document.getElementById("docemail").value = data.email;
                    document.getElementById("docdireccion").value = data.direccion;
                    document.getElementById("docespecialidad").value = data.especialidades;
                    document.getElementById("docdateI").value = data.horaInicial;
                    document.getElementById("docdateE").value = data.horaFinal;
                    document.getElementById("aprobado").value = data.aprobado;
                    if (data.tipo == "Premium") {
                        document.getElementById("docmonto").value = data.monto;
                    }
                    mostrar("Doctor");
                    if (data.tipo == "Premium") {
                        mostrar("DocPrivado");
                        document.getElementById('tamn').classList.add('col-md-6');
                    } else {
                        document.getElementById('tamn').classList.add('col-md-12');
                    }
                }, 1000);
            }
        }
    }

    render() {
        return (
            <div>
                <Header></Header>
                <section id="hero">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Perfil</h2>
                            <p style={{ "color": "white" }} id="titulo"></p>
                        </div>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div data-aos="zoom-out" className="col-md-6" data-aos-delay={60} id="imagen">
                                <img id="imagenero" alt="" className="img-fluid" />
                            </div>
                            <div>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                        <div className="row section-title" data-aos="fade-left" id="cargando" style={{ "display": "none" }}>
                            <div className="lds-spinner" style={{ "padding-right": "90px" }} ><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
                            <p style={{ "color": "white", "font-size": "12px" }}>Cargando</p>
                            <style dangerouslySetInnerHTML={{ __html: "\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n" }} />
                        </div>
                        <div className="row" data-aos="fade-left">
                            <div role="form" id="Paciente" class="php-email-form" style={{ "width": "100%", "display": "none" }}>
                                <div class="row">
                                    <input type="hidden" id="pacid" />
                                    <input type="hidden" id="pactipo" />
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Nombre</span>
                                                </div>
                                            </div>
                                            <input type="text" id="pacnombre" name="nombre" disabled className="form-control" placeholder="Escriba su nombre" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Apellido</span>
                                                </div>
                                            </div>
                                            <input type="text" id="pacapellido" name="apellido" disabled className="form-control" placeholder="Escriba su apellido" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                </svg>  Usuario</span>
                                                </div>
                                            </div>
                                            <input type="text" id="pacusuario" name="usuario" disabled className="form-control" placeholder="Escriba su usuario" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-ambiguous" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1H11.5zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z" />
                                            </svg>   Sexo</span>
                                            </div>
                                            <select class="custom-select" id="pacsexo" name="sexo" disabled>
                                                <option selected>Seleccione...</option>
                                                <option value="hombre">Hombre</option>
                                                <option value="mujer">Mujer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>   Clave</span>
                                            </div>
                                            <input type="password" id="pacpassword" name="password" onBlur={validarFormularioDocPac} onKeyUp={validarFormularioDocPac} className="form-control" placeholder="Escriba su contraseña" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>   Confirmar</span>
                                            </div>
                                            <input type="password" id="pacpassword2" name="password2" onClick={validarPassword2docpac} onBlur={validarPassword2docpac} onKeyUp={validarPassword2docpac} className="form-control" placeholder="Vuelva a escribir su contraseña" required />
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                </svg>  Nacimiento</span>
                                                </div>
                                            </div>
                                            <input type="date" id="pacnacimiento" name="nacimiento" disabled className="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                </svg>  Telefono</span>
                                                </div>
                                            </div>
                                            <input type="text" id="pactelefono" name="telefono" onBlur={validarFormularioDocPac} onKeyUp={validarFormularioDocPac} className="form-control" placeholder="Escriba su teléfono" />
                                        </div>
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                                </svg>  Email</span>
                                                </div>
                                            </div>
                                            <input type="email" id="pacemail" name="email" onBlur={validarFormularioDocPac} onKeyUp={validarFormularioDocPac} className="form-control" placeholder="Escriba su email" />
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
                                        <input type="text" id="pacdireccion" name="direccion" onBlur={validarFormularioDocPac} onKeyUp={validarFormularioDocPac} className="form-control" placeholder="Escriba su dirección" />
                                    </div>
                                </div>
                                <div id="nocoincid" class="alert alert-danger alert-dismissible" style={{ "display": "none" }} role="alert">
                                    <strong>Las contraseñas no coinciden</strong>
                                </div>
                                <div id="camposincorrecto" class="alert alert-danger alert-dismissible" style={{ "display": "none" }} role="alert">
                                    <strong>Por favor rellene los campos correctamente</strong>
                                </div>
                                <div class="text-center"><a href="#" onClick={onSubmit} className="btn-get-started scrollto">Guardar Cambios</a></div>
                            </div>
                            <div role="form" id="Doctor" class="php-email-form" style={{ "width": "100%", "display": "none" }}>
                                <input type="hidden" id="docid" />
                                <input type="hidden" id="aprobado" />
                                <input type="hidden" id="tipoD" />
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Nombre</span>
                                                </div>
                                            </div>
                                            <input type="text" id="docnombre" name="nombre" disabled className="form-control" placeholder="Escriba su nombre" required />
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Apellido</span>
                                                </div>
                                            </div>
                                            <input type="text" id="docapellido" name="apellido" disabled className="form-control" placeholder="Escriba su apellido" required />
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                </svg>  Usuario</span>
                                                </div>
                                            </div>
                                            <input type="text" id="docusuario" name="usuario" disabled className="form-control" placeholder="Escriba su usuario" required />
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-ambiguous" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1H11.5zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z" />
                                            </svg>   Sexo</span>
                                            </div>
                                            <select class="custom-select" id="docsexo" name="sexo" disabled>
                                                <option selected>Seleccione...</option>
                                                <option value="hombre">Hombre</option>
                                                <option value="mujer">Mujer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>   Contraseña</span>
                                            </div>
                                            <input type="password" id="docpassword" name="password" onClick={validarFormularioDoc} onBlur={validarFormularioDoc} onKeyUp={validarFormularioDoc} className="form-control" placeholder="Escriba su contraseña" required />
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>   Confirmar</span>
                                            </div>
                                            <input type="password" id="docpassword2" name="password2" onClick={validarpassword2doc} onBlur={validarpassword2doc} onKeyUp={validarpassword2doc} className="form-control" placeholder="Vuelva a escribir su contraseña" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                </svg>  Telefono</span>
                                                </div>
                                            </div>
                                            <input type="text" id="doctelefono" name="telefono" onClick={validarFormularioDoc} onBlur={validarFormularioDoc} onKeyUp={validarFormularioDoc} className="form-control" placeholder="Escriba su teléfono" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                </svg>  Nacimiento</span>
                                                </div>
                                            </div>
                                            <input type="date" id="docnacimiento" name="nacimiento" disabled className="form-control" />
                                        </div>
                                    </div>
                                    <div id="tamn" class="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                                </svg>  Email</span>
                                                </div>
                                            </div>
                                            <input type="email" id="docemail" name="email" onClick={validarFormularioDoc} onBlur={validarFormularioDoc} onKeyUp={validarFormularioDoc} className="form-control" placeholder="Escriba su email" required />
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group" id="DocPrivado" style={{ "display": "none" }}>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                                                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                                </svg>  Monto</span>
                                                </div>
                                            </div>
                                            <input type="number" id="docmonto" min="1" name="monto" onClick={validarFormularioDoc} onBlur={validarFormularioDoc} onKeyUp={validarFormularioDoc} className="form-control" placeholder="Escriba el monto de su consulta (En dolares)" required />
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
                                            <input type="text" id="docdireccion" name="direccion" onClick={validarFormularioDoc} onBlur={validarFormularioDoc} onKeyUp={validarFormularioDoc} className="form-control" placeholder="Escriba su dirección" required />
                                        </div>
                                    </div>
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
                                            <input type="text" id="docespecialidad" name="especialidad" onClick={validarFormularioDoc} onBlur={validarFormularioDoc} onKeyUp={validarFormularioDoc} className="form-control" placeholder="Escriba su especialidades" required />
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
                                            <input type="time" id="docdateI" name="dateI" className="mr-2" onClick={validarFormularioDoc} onBlur={validarFormularioDoc} onKeyUp={validarFormularioDoc} className="form-control" required />
                                            <div className="input-group-prepend ml-2">
                                                <div className="input-group-lm "><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                                </svg>  Hasta</span>
                                                </div>
                                            </div>
                                            <input type="time" id="docdateE" name="dateE" onClick={validarFormularioDoc} onBlur={validarFormularioDoc} onKeyUp={validarFormularioDoc} className="form-control" required />
                                        </div>
                                    </div>
                                </div>
                                <div id="nocoincide" class="alert alert-danger alert-dismissible" style={{ "display": "none" }} role="alert">
                                    <strong>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                        </svg>
                                        Las contraseñas no coinciden
                                    </strong>
                                </div>
                                <div id="camposincorrect" class="alert alert-danger alert-dismissible" style={{ "display": "none" }} role="alert">
                                    <strong>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                        </svg>
                                        Por favor rellene los campos correctamente
                                    </strong>
                                </div>
                                <div id="existeusuario" class="alert alert-danger alert-dismissible" style={{ "display": "none" }} role="alert">
                                    <strong>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                        </svg>
                                        El usuario ingresado ya esta en uso
                                    </strong>
                                </div>
                                <div class="text-center"><a href="#" onClick={onSubmit} className="btn-get-started scrollto">Guardar Cambios</a></div>
                            </div>
                        </div>
                    </div>
                    <Wave />
                </section>
            </div>
        );
    }
}

async function actualizarPaciente() {
    var Paciente = new Object();
    Paciente._id = document.getElementById("pacid").value;
    Paciente.tipo = "Paciente";
    Paciente.nombre = document.getElementById("pacnombre").value;
    Paciente.apellido = document.getElementById("pacapellido").value;
    Paciente.user = document.getElementById("pacusuario").value;
    Paciente.password = document.getElementById("pacpassword").value;
    Paciente.nacimiento = document.getElementById("pacnacimiento").value;
    Paciente.sexo = document.getElementById("pacsexo").value;
    Paciente.telefono = document.getElementById("pactelefono").value;
    Paciente.email = document.getElementById("pacemail").value;
    Paciente.direccion = document.getElementById("pacdireccion").value;

    ocultar('Paciente');
    ocultar('imagen');
    mostrar('cargando');

    // Envio POST al backend
    axios.post("https://dblinkmed.herokuapp.com/modificarUsuario", {
        id: Paciente._id,
        tipo: Paciente.tipo,
        nombre: Paciente.nombre,
        apellido: Paciente.apellido,
        user: Paciente.user,
        password: Paciente.password,
        nacimiento: Paciente.nacimiento,
        sexo: Paciente.sexo,
        telefono: Paciente.telefono,
        email: Paciente.email,
        direccion: Paciente.direccion,
    })
        .then(function (response) {
            // console.log(response);
            window.location.href = '/menu';
            cookies.set('usuario', Paciente, { path: "/" });
        })
        .catch(function (error) {
            // console.log(error);
            ocultar('cargando');
            mostrar('imagen');
            mostrar('Paciente');
        });
}


function actualizarDoctor() {
    // console.log("Ejecutando funcion: actualizarDoctor()")
    var Doctor = new Object();
    Doctor._id = document.getElementById("docid").value;
    Doctor.tipo = document.getElementById("tipoD").value;
    Doctor.nombre = document.getElementById("docnombre").value;
    Doctor.apellido = document.getElementById("docapellido").value;
    Doctor.user = document.getElementById("docusuario").value;
    Doctor.password = document.getElementById("docpassword").value;
    Doctor.nacimiento = document.getElementById("docnacimiento").value;
    Doctor.sexo = document.getElementById("docsexo").value;
    Doctor.telefono = document.getElementById("doctelefono").value;
    Doctor.email = document.getElementById("docemail").value;
    Doctor.direccion = document.getElementById("docdireccion").value;
    Doctor.especialidades = document.getElementById("docespecialidad").value;
    Doctor.horaInicial = document.getElementById("docdateI").value;
    Doctor.horaFinal = document.getElementById("docdateE").value;
    Doctor.aprobado = document.getElementById("aprobado").value;
    if (document.getElementById("tipoD").value == "Premium") {
        Doctor.monto = document.getElementById("docmonto").value;
    }

    ocultar('Doctor');
    ocultar('imagen');
    mostrar('cargando');

    // Envio POST al backend
    if (document.getElementById("tipoD").value == "Premium") {
        axios.post("https://dblinkmed.herokuapp.com/modificarUsuario", {
            id: Doctor._id,
            tipo: Doctor.tipo,
            nombre: Doctor.nombre,
            apellido: Doctor.apellido,
            user: Doctor.user,
            password: Doctor.password,
            nacimiento: Doctor.nacimiento,
            sexo: Doctor.sexo,
            telefono: Doctor.telefono,
            email: Doctor.email,
            direccion: Doctor.direccion,
            especialidades: Doctor.especialidades,
            horaInicial: Doctor.horaInicial,
            horaFinal: Doctor.horaFinal,
            monto: Doctor.monto,
            aprobado: Doctor.aprobado

        })
            .then(function (response) {
                // console.log(response);
                window.location.href = '/menu';
                cookies.set('usuario', Doctor, { path: "/" });
            })
            .catch(function (error) {
                // console.log(error);
                ocultar('cargando');
                mostrar('imagen');
                mostrar('Doctor');
            });
    } else {
        axios.post("https://dblinkmed.herokuapp.com/modificarUsuario", {
            id: Doctor._id,
            tipo: Doctor.tipo,
            nombre: Doctor.nombre,
            apellido: Doctor.apellido,
            user: Doctor.user,
            password: Doctor.password,
            nacimiento: Doctor.nacimiento,
            sexo: Doctor.sexo,
            telefono: Doctor.telefono,
            email: Doctor.email,
            direccion: Doctor.direccion,
            especialidades: Doctor.especialidades,
            horaInicial: Doctor.horaInicial,
            horaFinal: Doctor.horaFinal,
            aprobado: Doctor.aprobado

        })
            .then(function (response) {
                // console.log(response);
                window.location.href = '/menu';
                cookies.set('usuario', Doctor, { path: "/" });
            })
            .catch(function (error) {
                // console.log(error);
                ocultar('cargando');
                mostrar('imagen');
                mostrar('Doctor');
            });
    }
}


function ocultar(id) {
    document.getElementById(id).style.opacity = '0';
    document.getElementById(id).style.transition = 'opacity 0.5s';
    setTimeout(() => { document.getElementById(id).style.display = 'none'; }, 500);
}

function mostrar(id) {
    setTimeout(() => {
        document.getElementById(id).style.display = 'block';
        document.getElementById(id).style.opacity = '100';
    }, 500);
}

export default Perfil