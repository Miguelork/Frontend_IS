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
        doctor: false
    }

    esDoctor = () => {
        if (cookies.get("usuario")) {
            if (cookies.get("usuario").tipo == 'Premium' || cookies.get("usuario").tipo == 'Voluntario') {
                return (
                    <div>
                        <form role="form" class="php-email-form" style={{ "width": "100%" }}>
                            <div class="form-group">
                                <h2 className="mt-4 mb-4" style={{ "color": "white" }}><b>Escribe una respuesta</b></h2>
                                <textarea rows="6" cols="50" id="descripcion" name="descripcion" className="form-control" placeholder="Escriba su respuesta..." required />
                            </div>
                            <div class="mt-4 mb-3">
                                <div style={{ "display": "none", "color": "white" }}>¡Ha ocurrido un error!</div>
                            </div>
                            <div class="text-center">
                                <a href="#" className="btn-get-started scrollto">Aceptar</a>
                            </div>
                        </form>
                    </div>
                )
            }
        }
        return (
            <div></div>
        )
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
        console.log(response.data.item);
        let data = await response.data.item;
        data.map(item => {
            if (item._id == id) {
                console.log(item)
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
        console.log(response2.data.item);
        let data2 = await response2.data.item;
        var respuestasPregunta = [];
        data2.map(item => {
            if (item.idPregunta == id) {
                console.log(item)
                respuestasPregunta.push(item);
            }
        })
        this.setState({
            respuestas: respuestasPregunta

        })
    }

    render() {
        return (
            <div>
                <Header></Header>
                {/* ======= Hero Section ======= */}
                <section id="hero">
                    <section id="team" className="team" style={{ "background": "transparent" }}>
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Pregunta</h2>
                                <p style={{ "color": "white" }}>{this.state.data.titulo}</p>
                                <p style={{ "color": "white", "font-size": "14px" }}>{this.state.data.descripcion}</p>
                            </div>
                            <div className="row" data-aos="fade-left">
                                <section id="faq" className="faq section-bg" style={{ "background": "none", "padding-top": "0rem" }}>
                                    <div className="faq-list">
                                        <ul id="listaForo">
                                            {this.state.respuestas.map((item, index) => {
                                                return (
                                                    <li>
                                                        <a data-toggle="collapse" className="collapse" href={'#faq-list-' + index} style={{ "text-decoration": "none" }}><i class="icofont-doctor"></i> {item.nombre} {item.apellido}<i className="bx bx-chevron-down icon-show" /></a>
                                                        <div id={'faq-list-' + index} className="collapse show" data-parent=".faq-list">
                                                            <p>{item.respuesta}</p>
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

export default withRouter(RespuestaForo);