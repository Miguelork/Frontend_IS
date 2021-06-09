import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import RecuperarContrasena from './RecuperarContrasena';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const cookies = new Cookies();

class Preguntar extends React.Component {
    state = {
        data: []
    }


    async componentDidMount() {
        if (!cookies.get("usuario")) {
            window.location.href = "/login";
        }

        const response = await axios({
            url: "https://dblinkmed.herokuapp.com/listaUsuario",
            method: "GET",
        });
        console.log(response.data.item);
        let data = await response.data.item;
        this.setState({
            data
        })
    }

    render() {
        return (
            <div>
                <Header></Header>
                <section id="hero">
                    <section id="team" className="team" style={{ "background": "transparent" }}>
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Realizar una</h2>
                                <p style={{ "color": "white" }}>Pregunta</p>
                            </div>
                            <div className="row section-title" data-aos="fade-left" id="cargando" style={{ "display": "none" }}>
                                <div className="lds-spinner" style={{ "padding-right": "90px" }} ><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
                                <p style={{ "color": "white", "font-size": "12px" }}>Cargando</p>
                                <style dangerouslySetInnerHTML={{ __html: "\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n" }} />
                            </div>
                            <div className="row" data-aos="fade-left">
                                <section id="faq" className="faq section-bg" style={{ "background": "none", "padding-top": "0rem" }}>

                                    <div className="row" data-aos="fade-left" id="DocFormulario">
                                        <form role="form" id="pregunta" class="php-email-form" style={{ "width": "100%" }}>
                                            <div class="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-lg" viewBox="0 0 16 16">
                                                            <path d="M3 4.075a.423.423 0 0 0 .43.44H4.9c.247 0 .442-.2.475-.445.159-1.17.962-2.022 2.393-2.022 1.222 0 2.342.611 2.342 2.082 0 1.132-.668 1.652-1.72 2.444-1.2.872-2.15 1.89-2.082 3.542l.005.386c.003.244.202.44.446.44h1.445c.247 0 .446-.2.446-.446v-.188c0-1.278.487-1.652 1.8-2.647 1.086-.826 2.217-1.743 2.217-3.667C12.667 1.301 10.393 0 7.903 0 5.645 0 3.17 1.053 3.001 4.075zm2.776 10.273c0 .95.758 1.652 1.8 1.652 1.085 0 1.832-.702 1.832-1.652 0-.985-.747-1.675-1.833-1.675-1.04 0-1.799.69-1.799 1.675z" />
                                                        </svg>  Pregunta </span>
                                                        </div>
                                                    </div>
                                                    <input type="text" id="titulo" name="titulo" className="form-control" placeholder="Escriba su pregunta... " required />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify-left" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                                        </svg>  Descripción </span>
                                                        </div>
                                                    </div>
                                                    <textarea rows="4" cols="50" id="descripcion" name="descripcion" className="form-control" placeholder="Escriba su una descripcion mas detallada... (Opcional)" required />
                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <div style={{ "display": "none", "color": "white" }}>¡Ha ocurrido un error!</div>
                                            </div>
                                            <div class="text-center"><a href="#" onClick={ crearPregunta } className="btn-get-started scrollto">Aceptar</a></div>
                                        </form>
                                    </div>

                                </section>
                            </div>
                        </div>
                    </section>
                    <Wave />
                </section>
            </div>
        )
    }
}

async function crearPregunta() {
    var Pregunta = new Object(); // Creando el objeto pregunta
    Pregunta.titulo = document.getElementById("titulo").value; // Obteniendo el titulo
    Pregunta.descripcion = document.getElementById("descripcion").value; // Obteniendo la descripcion
    let usuario = await cookies.get("usuario"); // Obteniendo los datos del usuario en cookies
    Pregunta.nombre = usuario.nombre; // Poniendo al objeto pregunta el nombre
    Pregunta.apellido = usuario.apellido; // Poniendo al objeto pregunta el apellido
    Pregunta.user = usuario.user; // Poniendo la objeto pregunta el user
    // Mostrar cargando mientrar se ejecutan toda la funcion
    ocultar('pregunta');
    mostrar('cargando');
    // Envio POST al backend
    axios.post('https://dblinkmed.herokuapp.com/crearPregunta', {
        titulo: Pregunta.titulo,
        descripcion: Pregunta.descripcion,
        nombre: Pregunta.nombre,
        apellido: Pregunta.apellido,
        user: Pregunta.user
    })
        .then(function (response) {
            console.log(response);
            setTimeout(() => { window.location.href = '/foro'; }, 3000); // Re
        })
        .catch(function (error) {
            console.log(error);
            ocultar('cargando');
            mostrar('pregunta');
        });

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

}



export default Preguntar
