import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import RecuperarContrasena from './RecuperarContrasena';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const cookies = new Cookies();

class Historia extends React.Component {
    state = {
        paciente: JSON,
        historia: '',
    }

    mostrarHistoria = (historia) => {
        if (historia.length < 1) {
            return (
                <div class="alert alert-primary" role="alert">
                    La Historia de este paciente <a href="#" class="alert-link">esta vacia</a>. Igualmente puede empezar a llenarla.
                </div>
            )
        }else{
            return (
                <p>{historia}</p>
            )
        }
    }

    async componentDidMount() {
        if (!cookies.get("usuario")) {
            window.location.href = "/login";
        }

        const user_id = this.props.match.params.user_id;
        console.log(user_id)

        const responseUsuario = await axios({
            url: "https://dblinkmed.herokuapp.com/listaUsuario",
            method: "GET",
        });

        const responseHistoria = await axios({
            url: "https://dblinkmed.herokuapp.com/listaHistoria",
            method: "GET",
        });

        let dataUsuario = await responseUsuario.data.item;
        let dataHistoria = await responseHistoria.data.item;

        dataUsuario.map(item => {
            if (item._id == user_id) {
                this.setState({
                    paciente: item
                })
            }
        })

        dataHistoria.map(item => {
            if (item.usuario_id == user_id) {
                this.setState({
                    historia: item.contenido
                })
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                {/* ======= Hero Section ======= */}
                <section id="hero">
                    <section id="team" className="team" style={{ "background": "transparent" }}>
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Historia</h2>
                                <p style={{ "color": "white" }}>Paciente</p>
                                <p style={{ "color": "white", "font-size": "14px" }}>{this.state.paciente.nombre + " " + this.state.paciente.apellido}</p>
                            </div>
                            <div className="row section-title" data-aos="fade-left" id="cargando" style={{ "display": "none" }}>
                                <div className="lds-spinner" style={{ "padding-right": "90px" }} ><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
                                <p style={{ "color": "white", "font-size": "12px" }}>Cargando</p>
                                <style dangerouslySetInnerHTML={{ __html: "\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n" }} />
                            </div>
                            <div className="row" data-aos="fade-left">
                                <section id="faq" className="faq section-bg" style={{ "background": "none", "padding-top": "0rem" }}>
                                    <div class="row" data-aos="fade-up">

                                        <section id="counts" class="counts" style={{ "background": "none", "padding": "25px 0" }}>
                                            <div class="container">
                                                <div class="row" data-aos="fade-up">

                                                    <div class="col-lg-3 col-md-6">
                                                        <div class="count-box">
                                                            <i class="icofont-doctor"></i>
                                                            <span data-toggle="counter-up" style={{ "font-size": "1.5rem" }}>
                                                                {this.state.paciente.nombre} {this.state.paciente.apellido}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-9 col-md-6 mt-5 mt-md-0">
                                                        <div class="count-box">
                                                            <i class="icofont-document-folder"></i>
                                                            <span data-toggle="counter-up" style={{ "font-size": "1rem" }}>Historia del paciente</span>
                                                            <br />
                                                            {(this.mostrarHistoria(this.state.historia))}
                                                        </div>
                                                        <a href={'/modificarhistoria=' + this.state.paciente._id} class="btn-get-started scrollto mt-3" style={{ "text-decoration": "none" }}>Modificar Historia</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
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




export default withRouter(Historia);

