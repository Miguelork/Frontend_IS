import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecuperarContrasena = () => {

    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,20}$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        password: /^.{8,15}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    const campos = {
        nombre:false,
        usuario:false,
        password:false,
        email:false
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "usuario":
                validarCampo(expresiones.usuario, e.target, 'usuario');
                break;
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
                break;
            case "password":
                validarCampo(expresiones.password, e.target, 'password');
                break;
            case "email":
                validarCampo(expresiones.correo, e.target, 'email');
                break;
        }
    }

    const validarCampo = (expresion, input, campo) => {
        if ((expresion.test(input.value))) {
            document.getElementById(campo).classList.remove('is-invalid');
            document.getElementById(campo).classList.add('is-valid');
            campos[campo] = true;
        } else {
            document.getElementById(campo).classList.add('is-invalid');
            document.getElementById(campo).classList.remove('is-valid');
            campos[campo] = false;
        }
    }

    const next = (e) => {
        // console.log(campos[e.target.name])
        if(campos[e.target.name]){
            pasos();
        }else{
            e.preventDefault();
        }
    }

    return (
        <div className="container" style={{ "max-width": "500px" }}>
            <div className="section-title" data-aos="fade-up">
                <p style={{ "color": "white", "font-size": "20px"}}>
                    Llene la información solicitada para comprobar su identidad
                </p>
                <br />
                <p style={{ "color": "white" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                    </svg>
                </p>
            </div>
            <div role="form" class="php-email-form">
                <input type="hidden" id="pasos" value="0" />
                <div className="row" data-aos="fade-left" id="paso-1">
                    <div class="col-md-12">
                        <div class="form-group" >
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Nombre</span>
                                    </div>
                                </div>
                                <input type="text" id="nombre" name="nombre" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 offset-4 text-center">
                        <a href="#" onClick={next} name="nombre" className="btn-get-started scrollto">Siguiente</a>
                    </div>
                </div>
                <div className="row" data-aos="fade-left" id="paso-2" style={{ "display": "none" }}>
                    <div class="col-md-12">
                        <div class="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>  Usuario</span>
                                    </div>
                                </div>
                                <input type="text" id="usuario" name="usuario" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 offset-4 text-center">
                        <a href="#" onClick={next}  name="usuario" className="btn-get-started scrollto">Siguiente</a></div>
                </div>
                <div className="row" data-aos="fade-left" id="paso-3" style={{ "display": "none" }}>
                    <div class="col-md-12">
                        <div class="form-group" style={{ "width": "100%" }}>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                    </svg>  Email</span>
                                    </div>
                                </div>
                                <input type="text" id="email" name="email" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 offset-4 text-center">
                        <a href="#" onClick={next} name="email" className="btn-get-started scrollto">Siguiente</a>
                    </div>
                </div>
                <div className="row" data-aos="fade-left" id="cargando" style={{ "display": "none" }}>
                    <div className="lds-spinner" style={{ "padding-right": "90px" }} >
                        <div /><div /><div />
                        <div /><div /><div />
                        <div /><div /><div />
                        <div /><div /><div />
                    </div>
                    <p style={{ "color": "white", "font-size": "12px" }}>
                        Verificando identidad
                </p>
                    <style dangerouslySetInnerHTML={{ __html: "\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n" }} />
                </div>
                <div className="row" data-aos="fade-left" id="aceptado" style={{ "display": "none", "padding": "1rem" }}>
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Perfecto!</strong> Hemos verificado su identidad. Por favor, introduzca su nueva contraseña.
            <button type="button" className="close btn-cancel" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="input-group mb-2">
                        <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>   Clave</span>
                        </div>
                        <input type="password" id="passwordNuevo" name="password" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su nueva contraseña" required />
                    </div>
                    <br />
                    <div class="text-center"><a href="#" onClick={cambiarClave} className="btn-get-started scrollto">Guardar Cambios</a></div>
                </div>
                <div className="row" data-aos="fade-left" id="finalizando" style={{ "display": "none" }}>
                    <div className="lds-spinner" style={{ "padding-right": "90px" }} ><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
                    <p style={{ "color": "white", "font-size": "12px" }}>
                        Se clave se esta cambiando con exito <br /> Sera redirigido al Login para que inicie sesión
                </p>
                    <style dangerouslySetInnerHTML={{ __html: "\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n" }} />
                </div>
                <div className="row" data-aos="fade-left" id="error" style={{ "display": "none", "padding": "1rem" }}>
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error!</strong> Lamentablemente no se ha podido verificar su identidad.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Link to="/inicio">
                        <a type="button" data-dismiss="modal" onClick={clear} aria-label="Close" className="mr-2 btn-get-started scrollto">Cerrar</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function clear(){
    paso=0;
    pasos();
    {/* falta poner 0 los valores */}

}

var auxUsuario = new Object();
var paso = 1;

function pasos() {
    // console.log("Ejecutando funcion: pasos()", paso);
    paso++;
    ocultar('paso-1');
    ocultar('paso-2');
    ocultar('paso-3');
    ocultar('cargando');
    ocultar('error');
    ocultar('aceptado');
    switch (paso) {
        case 1:
            mostrar('paso-1');
            break;
        case 2:
            mostrar('paso-2');
            break;
        case 3:
            mostrar('paso-3');
            break;
        case 4:
            mostrar('cargando');
            verificarIdentidad();
            break;
        case 5:
            mostrar('error');
            break;
        case 6:
            mostrar('aceptado');
            break;
    }
}

async function verificarIdentidad() {
    // Se verifica primero que el usuario no exista
    const response = await axios({
        url: "https://dblinkmed.herokuapp.com/listaUsuario",
        method: "GET",
    });
    // console.log(response.data.item);
    var existe = false;
    response.data.item.map((usuario) => {
        if (usuario.nombre == document.getElementById("nombre").value && usuario.user == document.getElementById("usuario").value && usuario.email == document.getElementById("email").value) {
            auxUsuario = usuario;
            existe = true;
            // console.log("El usuario si existe y coinciden los datos");
        }
    });
    if (existe == true) {
        paso = 5;
    } else {
        paso = 4;
    }
    pasos();
}

async function cambiarClave() {
    auxUsuario.password = document.getElementById("passwordNuevo").value;
    // console.log(document.getElementById("password").value);
    axios.post('https://dblinkmed.herokuapp.com/cambiarClaveUsuario', {
        id: auxUsuario._id,
        password: auxUsuario.password
    })
        .then(function (response) {
            // console.log(response);
        })
        .catch(function (error) {
            // console.log(error);
        });
    ocultar('aceptado');
    mostrar('finalizando');
    setTimeout(() => { window.location.href = '/login'; }, 10000);
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

export default RecuperarContrasena
