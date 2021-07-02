import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import RecuperarContrasena from './RecuperarContrasena';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const cookies = new Cookies();

const expresiones = {
    user: /^[a-zA-Z0-9_-]{4,20}$/,
    password: /^.{8,15}$/
}

const campos = {
    user: false,
    password: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "user":
            validarCampo(expresiones.user, e.target, 'user');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if ((expresion.test(input.value))) {
        document.getElementById(campo).classList.remove('is-invalid');
        campos[campo] = true;
    } else {
        document.getElementById(campo).classList.add('is-invalid');
        campos[campo] = false;
    }
}

const onSubmit = (e) => {
    if (campos.user && campos.password) {
        login();
    } else {
        ocultar('datoincorrecto')
        mostrar('datosfaltan')
    }
}

class Login extends React.Component {
    cerrarSesion = () => {
        cookies.remove("usuario", { path: "/" });
        window.location.href = "/";
    };

    componentDidMount() {
        if (cookies.get("usuario")) {
            window.location.href = "/menu";
        }
    }

    render() {
        return (
            <div data-testid="Login" id="Login">
                <Header></Header>
                <section id="hero">
                    <section id="pricing" className="pricing" style={{ "padding": "1rem" }}>
                        <div className="container" style={{ "max-width": "500px" }}>
                            <div className="section-title" data-aos="fade-up">
                                <h2>Inicio de Sesión</h2>
                                <p style={{ "color": "white" }}>Usuario</p>
                            </div>
                            <div className="mt-0 mb-4 hero-img" id="imagen" data-aos="zoom-out" data-aos-delay={100}>
                                <img src="assets/img/log.svg" className="img-fluid" alt="" />
                            </div>
                            <div className="row section-title" data-aos="fade-left" id="cargando" data-testid="cargando-login" style={{ "display": "none" }}>
                                <div className="lds-spinner" style={{ "padding-right": "90px" }} ><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
                                <p style={{ "color": "white", "font-size": "12px" }}>Cargando</p>
                                <style dangerouslySetInnerHTML={{ __html: "\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n" }} />
                            </div>
                            <div className="row" data-aos="fade-left" id="login" data-testid="form-login">
                                <div role="form" class="php-email-form" style={{ "width": "100%" }}>
                                    <input type="hidden" id="tipoD" />
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Usuario</span>
                                            </div>
                                        </div>
                                        <input type="text" id="user" data-testid="input-user" name="user" onClick={validarFormulario} onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su usuario" required/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>   Clave</span>
                                            </div>
                                        </div>
                                        <input type="password" id="password" data-testid="input-password" name="password" onClick={validarFormulario} onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su contraseña" required/>
                                    </div>
                                    <div id="datoincorrecto" class="alert alert-danger alert-dismissible" style={{ "display": "none" }} role="alert">
                                        <strong>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                            </svg>
                                            Haz introducido algun dato erróneo
                                        </strong>
                                    </div>
                                    <div id="datosfaltan" class="alert alert-danger alert-dismissible" style={{ "display": "none" }} role="alert">
                                        <strong>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                            </svg>
                                            Por favor rellene los campos correctamente
                                        </strong>
                                    </div>
                                    <div class="mb-3">
                                        <div style={{ "display": "none", "color": "white" }}>¡Ha ocurrido un error!</div>
                                    </div>
                                    <div className="text-center"><a href="#" onClick={onSubmit} className="btn-get-started scrollto">Aceptar</a></div>
                                    <a type="button" class="btn" data-toggle="modal" data-target="#exampleModal">
                                        <p style={{ "color": "white", "font-size": "10px", "margin-top": "1rem" }}>¿Has olvidado la contraseña?</p>
                                    </a>
                                    <Link to="/register">
                                        <p style={{ "color": "white", "font-size": "10px" }}>Registrarse</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content ">
                            <div className="modal-header bg-green pt-2 pb-2">
                                            <h5 style={{ "color": "white" }} className="modal-title" id="exampleModalLongTitle">Recuperar Contraseña</h5>
                                            <h1 display="400" style={{ "color": "white" }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
                                                    <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                                </svg></span>
                                            </h1>
                                        </div>
                                <div className="modal-body bg-blue">
                                    <RecuperarContrasena />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Wave />
                </section>
            </div>
        )
    }
}

async function login() {
    ocultar('login');
    ocultar('imagen');
    mostrar('cargando');
    // Funcion para iniciar sesión
    const response = await axios({
        url: "https://dblinkmed.herokuapp.com/listaUsuario",
        method: "GET",
    });
    var login = false; // Variable de control para poner en true si coinciden los datos con la DB

    response.data.item.map((usuario) => {
        if (usuario.user == document.getElementById("user").value && usuario.password == document.getElementById("password").value) {
            login = true;
            cookies.set('usuario', usuario, { path: "/" });
        }
    });
    // Si login esta true es que todo fue bien y se inicia sesión
    if (login == true) {

        //Llamamos a la lista de historias para verificar si hay una historia para este usuario
        const check = await axios({
            url: "https://dblinkmed.herokuapp.com/listaHistoria",
            method: "GET",
        });

        var hayHistoria = false;//variable de control que se pone true si existe una historia para el usuario
        check.data.item.map((historia) => {
            if (cookies.get("usuario").tipo == 'Paciente'
                && historia.usuario_id == cookies.get("usuario")._id) {
                hayHistoria = true;
            }
        });

        //Si el usuario es de tipo paciente y no se encuentra una historia en bdd se le crea una
        if (hayHistoria == false && cookies.get("usuario").tipo == 'Paciente') {
            axios.post("https://dblinkmed.herokuapp.com/crearHistoria", {
                usuario_id: cookies.get("usuario")._id,
                contenido: "",
            })
                .then(function (response) {
                    // console.log(response);
                })
                .catch(function (error) {
                    // console.log(error);
                });
        }

        setTimeout(() => {
            window.location.href = "/menu";
        }, 1000);
    } else {
        setTimeout(() => {
            ocultar('cargando');
            mostrar('login');
            mostrar('imagen');
            mostrar('datoincorrecto')
            ocultar('datosfaltan')
        }, 3000);
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

export default Login