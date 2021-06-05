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
                                            <div class="text-center"><a href="#" className="btn-get-started scrollto">Aceptar</a></div>
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



export default Preguntar
