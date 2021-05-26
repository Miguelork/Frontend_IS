import React from 'react';
import axios from 'axios';

const FormPaciente = () => {
    
    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,20}$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        direccion: /^[a-zA-ZÀ-ÿ\s]{1,250}$/,
        password: /^.{8,15}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/
    }

    const campos = {
        nombre:false,
        apellido:false,
        usuario:false,
        password:false,
        telefono:false,
        email:false,
        direccion:false
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "usuario":
                validarCampo(expresiones.usuario, e.target, 'usuario');
                break;
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
                break;
            case "apellido":
                validarCampo(expresiones.nombre, e.target, 'apellido');
                break;
            case "password":
                validarCampo(expresiones.password, e.target, 'password');
            case "email":
                validarCampo(expresiones.correo, e.target, 'email');
                break;
            case "telefono":
                validarCampo(expresiones.telefono, e.target, 'telefono');
                break;
            case "direccion":
                validarCampo(expresiones.direccion, e.target, 'direccion')
                break;
        }
    }

    const validarCampo = (expresion, input, campo) => {
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

    const onSubmit = (e) => {
        if( campos.nombre && campos.apellido && campos.usuario && campos.password && campos.telefono &&
            campos.email && campos.direccion){
            registrarPaciente();
        } else{
            e.preventDefault();
        } 
    }
    
    return (
        <div className="container">
            <div className="section-title" data-aos="fade-up">
                <h2>Registro</h2>
                <p style={{ "color": "white" }}>Paciente</p>
            </div>
            <div className="row" data-aos="fade-left" id="finalizando"  style={{ "display": "none" }}>  
                <div className="lds-spinner" style={{ "padding-right": "90px" }} ><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
                <p style={{ "color": "white", "font-size":"12px"}}>
                    Se esta registrando con exito <br /> Sera redirigido al Login para que inicie sesión
                </p>
                <style dangerouslySetInnerHTML={{__html: "\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n" }} />    
            </div> 
            <div className="row" data-aos="fade-left" id="formulario">
                <form role="form" class="php-email-form" style={{ "width": "100%" }}>
                    <div class="form-row">
                        <div class="col-md-6 form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Nombre</span>
                                    </div>
                                </div>
                                <input type="text" id="pacnombre"  name="nombre" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su nombre" />
                            </div>
                        </div>
                        <div class="col-md-6 form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Apellido</span>
                                    </div>
                                </div>
                                <input type="text" id="pacapellido"  name="apellido" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su apellido" />
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
                                <input type="text" id="pacusuario"  name="usuario" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su usuario" />
                            </div>
                        </div>
                        <div class="col-md-6 form-group">
                            <div className="input-group">
                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>   Clave</span>
                                </div>
                                <input type="password" id="pacpassword"  name="password" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su contraseña" />
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
                                <input type="text" id="pactelefono"  name="telefono" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su teléfono" />
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
                                <input type="email" id="pacemail"  name="email" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su email" />
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
                            <input type="text" id="pacdireccion"  name="direccion" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su dirección" />
                        </div>
                    </div>
                    <div class="text-center"><a href="#" onClick={onSubmit} className="btn-get-started scrollto">Aceptar</a></div>
                </form>
            </div>
        </div>
    )
}

async function registrarPaciente() {
    console.log("Ejecutando funcion: registrarPaciente()")
    var Paciente = new Object();
    Paciente.tipo = "Paciente";
    Paciente.nombre = document.getElementById("pacnombre").value;
    Paciente.apellido = document.getElementById("pacapellido").value;
    Paciente.user = document.getElementById("pacusuario").value;
    Paciente.password = document.getElementById("pacpassword").value;
    Paciente.telefono = document.getElementById("pactelefono").value;
    Paciente.email = document.getElementById("pacemail").value;
    Paciente.direccion = document.getElementById("pacdireccion").value;

    // Se verifica primero que el usuario no exista
    const response = await axios({
        url: "https://dblinkmed.herokuapp.com/listaUsuario",
        method: "GET",
    });
    // console.log(response.data.item);

    var controlExiste = false; // Variable booleana para saber si existe ponerla en true
    response.data.item.map((usuario) => {
        if (usuario.user == Paciente.user) {
            document.getElementById("pacusuario").classList.add('is-invalid');
            document.getElementById("pacusuario").classList.remove('is-valid');
            controlExiste = true;
        }
        if (usuario.email == Paciente.email){
            document.getElementById("pacemail").classList.add('is-invalid');
            document.getElementById("pacemail").classList.remove('is-valid');
            controlExiste = true;
        }
    });
    
    // Cuando este false es decir que no existe se guarde en DB y de lo contrario se muestra un alerta
    if (controlExiste == false) {
         // Envio POST al backend
        axios.post("https://dblinkmed.herokuapp.com/crearUsuario", {
                tipo: Paciente.tipo,
                nombre: Paciente.nombre,
                apellido: Paciente.apellido,
                user: Paciente.user,
                password: Paciente.password,
                telefono: Paciente.telefono,
                email: Paciente.email,
                direccion: Paciente.direccion,
            })
            .then(function (response) {
                console.log(response);
                ocultar('formulario');
                mostrar('finalizando');
                setTimeout(() => { window.location.href = '/login'; }, 5000);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

function ocultar( id ){
    document.getElementById(id).style.opacity = '0';
    document.getElementById(id).style.transition = 'opacity 0.5s';
    setTimeout(() => {  document.getElementById(id).style.display = 'none'; }, 500);
}

function mostrar( id ){
    document.getElementById(id).style.display = 'block';
    document.getElementById(id).style.opacity = '100';
}



export default FormPaciente