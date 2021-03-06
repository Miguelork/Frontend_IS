import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import RecuperarContrasena from './RecuperarContrasena';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { withRouter } from "react-router";

const cookies = new Cookies();

class RespuestaForo extends React.Component {
    state = {
        data: JSON,
        respuestas: [],
        doctor: false,
        ArrayUsuarios: []
    }

    esDoctor = () => {
        if (cookies.get("usuario")) {
            if (cookies.get("usuario").tipo == 'Premium' || cookies.get("usuario").tipo == 'Voluntario' && cookies.get("usuario").aprobado == true) {
                return (
                    <div>
                        <div class="form-group">
                            <h2 className="mt-4 mb-4" style={{ "color": "white" }}><b>Escribe una respuesta</b></h2>
                            <textarea rows="6" cols="50" id="respuesta" name="respuesta" className="form-control" placeholder="Escriba su respuesta..." required />
                        </div>
                        <div class="mt-4 mb-3">
                            <div style={{ "display": "none", "color": "white" }}>¡Ha ocurrido un error!</div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div class="col-md-2 mt-3 mb-3">
                                    <a href="#" onClick={agregarRespuesta} className="btn-get-started ">Aceptar</a>
                                </div>
                                <div class="col-md-2 mt-3 mb-3">
                                    <Link to='/foro'>
                                        <a className="btn-get-started ">Volver</a>
                                    </Link>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
        return (
            <div></div>
        )
    }

    alerta = (array) => {
        if (array.length == 0) {
            return (
                <div>
                    <div className="section-title" data-aos="fade-up">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-4 mt-3">
                                    <img src="assets/img/notfound.svg" className="img-fluid" alt="" />
                                    <h5 className="mt-5 fontPop" style={{ "color": "white" }}>Aún no hay respuesta</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    eliminar = (objetoRespuesta) => {
        var usuario = cookies.get("usuario");
        if (objetoRespuesta.user == usuario.user) {
            return (
                <div>
                    <a onClick={() => eliminarRespuesta(objetoRespuesta)} style={{ "color": "red", "text-decoration": "none" }}><i class="icofont-trash"></i></a>
                </div>
            )
        }
    }

    eliminarPregunta = (objetoPregunta, arrayRespuestas) => {
        //console.log(arrayRespuestas)
        var usuario = cookies.get("usuario");
        if (objetoPregunta.user == usuario.user) {
            return (
                <div id="botonEliminar">
                    <a href="#" onClick={() => eliminarPreguntaBD(objetoPregunta, arrayRespuestas)} style={{ "color": "white", "background": "#dc3545", "text-decoration": "none", "margin-top": "1rem" }} class="btn-get-started scrollto"><i class="icofont-trash"></i> Eliminar Pregunta</a>
                </div>
            )
        }
    }

    buttonSolicitarCita = (item) => {
        this.state.ArrayUsuarios.map(itemUsuario => {
            if (itemUsuario.user == item.user && itemUsuario.tipo == 'Premium' && itemUsuario.aprobado == true && cookies.get("usuario").tipo == 'Paciente') {
                console.log(itemUsuario, item)
                document.getElementById('solicitarCita' + item.user).style.display = 'block';
            }
        })
    }

    async componentDidMount() {
        // Verificar que este logueado
        if (!cookies.get("usuario")) {
            window.location.href = "/login";
        }
        //Obteniendo el ID pasado por URL
        const id = this.props.match.params.id;
        //Obteniendo de la DB los datos de la pregunta con ese ID
        const response = await axios({
            url: "https://dblinkmed.herokuapp.com/listaPregunta",
            method: "GET",
        });
        // console.log(response.data.item);
        let data = await response.data.item;
        data.map(item => {
            if (item._id == id) {
                // console.log(item)
                this.setState({
                    data: item
                })
            }
        })
        //Obtener las respuestas de esa pregunta en la coleccion de respuestas
        const response2 = await axios({
            url: "https://dblinkmed.herokuapp.com/listaRespuesta",
            method: "GET",
        });
        // console.log(response2.data.item);
        let data2 = await response2.data.item;
        var respuestasPregunta = [];
        data2.map(item => {
            if (item.idPregunta == id) {
                // console.log(item)
                respuestasPregunta.push(item);
            }
        })
        this.setState({
            respuestas: respuestasPregunta

        })

        //Obtener los usuarios
        const usuarios = await axios({
            url: "https://dblinkmed.herokuapp.com/listaUsuario",
            method: "GET",
        });
        let ArrayUsuarios = await usuarios.data.item;
        this.setState({
            ArrayUsuarios: ArrayUsuarios
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
                                <h2>Pregunta</h2>
                                <p style={{ "color": "white" }}>{this.state.data.titulo}</p>
                                <p style={{ "color": "white", "font-size": "14px" }}>{this.state.data.descripcion}</p>
                                <input type="hidden" value={this.state.data._id} id="idPregunta" />
                                {(this.eliminarPregunta(this.state.data, this.state.respuestas))}
                            </div>
                            <div className="row section-title" data-aos="fade-left" id="cargando" style={{ "display": "none" }}>
                                <div className="lds-spinner" style={{ "padding-right": "90px" }} ><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
                                <p style={{ "color": "white", "font-size": "12px" }}>Cargando</p>
                                <style dangerouslySetInnerHTML={{ __html: "\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n" }} />
                            </div>
                            <div className="row" data-aos="fade-left">
                                <section id="faq" className="faq section-bg" style={{ "background": "none", "padding-top": "0rem" }}>
                                    {(this.alerta(this.state.respuestas))}
                                    <div className="faq-list">
                                        <ul id="listaForo">
                                            {this.state.respuestas.map((item, index) => {
                                                return (
                                                    <li>
                                                        <a data-toggle="collapse" className="collapse" href="#" style={{ "text-decoration": "none" }}><i class="icofont-doctor"></i> {item.nombre} {item.apellido}<i className="bx bx-chevron-down icon-show" /></a>
                                                        <div id={'faq-list-' + index} className="collapse show" data-parent=".faq-list">
                                                            <p>{item.respuesta}</p>
                                                            <Link to={'/doctor=' + item.user}>
                                                                <a href="#" style={{ "border-color": "#1acc8d", "border-radius": "50px", "text-decoration": "none", "margin": "1rem", "background": "#1acc8d", "display": "none" }} class="btn btn-primary btn-sm" id={'solicitarCita' + item.user}>Solicitar una cita</a>
                                                            </Link>
                                                            {(this.buttonSolicitarCita(item))}
                                                            {(this.eliminar(item))}
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    {(this.esDoctor())}
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

function agregarRespuesta() {
    var Respuesta = new Object(); // Creando el objeto pregunta
    Respuesta.idPregunta = document.getElementById("idPregunta").value; // Obteniendo el titulo
    Respuesta.respuesta = document.getElementById("respuesta").value; // Obteniendo la descripcion
    let usuario = cookies.get("usuario"); // Obteniendo los datos del usuario en cookies
    Respuesta.nombre = usuario.nombre; // Poniendo al objeto pregunta el nombre
    Respuesta.apellido = usuario.apellido; // Poniendo al objeto pregunta el apellido
    Respuesta.user = usuario.user; // Poniendo la objeto pregunta el user
    // console.log(Respuesta)
    ocultar('faq');
    mostrar('cargando');
    axios.post('https://dblinkmed.herokuapp.com/crearRespuesta', {
        idPregunta: Respuesta.idPregunta,
        respuesta: Respuesta.respuesta,
        nombre: Respuesta.nombre,
        apellido: Respuesta.apellido,
        user: Respuesta.user
    })
        .then(function (response) {
            // console.log(response);
            setTimeout(() => { window.location.href = `/${Respuesta.idPregunta}`; }, 3000); // Re
        })
        .catch(function (error) {
            // console.log(error);
            ocultar('cargando');
            mostrar('faq');
        });
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

function eliminarPreguntaBD(objetoPregunta, arrayRespuesta) {
    // console.log(objetoRespuesta._id)
    ocultar('botonEliminar');
    ocultar('faq');
    mostrar('cargando');

    axios.post('https://dblinkmed.herokuapp.com/eliminarPregunta', {
        id: objetoPregunta._id,
    })
        .then(function (response) {
            // console.log(response);
            setTimeout(() => { window.location.href = `/foro`; }, 2000); // Re
        })
        .catch(function (error) {
            // console.log(error);
            ocultar('cargando');
            mostrar('faq');
            mostrar('botonEliminar');
        });

    arrayRespuesta.map((item) => {
        axios.post('https://dblinkmed.herokuapp.com/eliminarRespuesta', {
            id: item._id,
        })
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                // console.log(error);
                ocultar('cargando');
                mostrar('faq');
                mostrar('botonEliminar');
            });
    })
}


function eliminarRespuesta(objetoRespuesta) {
    // console.log(objetoRespuesta._id)
    ocultar('faq');
    mostrar('cargando');
    axios.post('https://dblinkmed.herokuapp.com/eliminarRespuesta', {
        id: objetoRespuesta._id,
    })
        .then(function (response) {
            // console.log(response);
            setTimeout(() => { window.location.href = `/${objetoRespuesta.idPregunta}`; }, 2000); // Re
        })
        .catch(function (error) {
            // console.log(error);
            ocultar('cargando');
            mostrar('faq');
        });
}

export default withRouter(RespuestaForo);