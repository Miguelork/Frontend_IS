import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import RecuperarContrasena from './RecuperarContrasena';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const cookies = new Cookies();

class FormHistoria extends React.Component {
    state = {
        paciente: JSON,
        historia: JSON,
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
                    historia: item
                })
            }
        })

        document.getElementById("historia_id").value = this.state.historia._id;
        document.getElementById("paciente_id").value = this.state.historia.usuario_id;
        document.getElementById("historia").value = this.state.historia.contenido;
        ocultar("Botonsubmit")
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
                                <h2>Modificar Historia</h2>
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
                                        <section id="counts" class="counts" style={{ "background": "none" , "padding":"25px 0"}}>
                                            <div class="container">
                                                <div class="row" data-aos="fade-up">
                                                    <form role="form" id="regDoctor" class="php-email-form" style={{ "width": "100%" }}>
                                                        <button id="Botonsubmit" disabled>Submit</button>
                                                        <input type="hidden" id="historia_id" />
                                                        <input type="hidden" id="paciente_id" />
                                                        <div class="count-box">
                                                                <i class="icofont-document-folder"></i>
                                                                <span data-toggle="counter-up" style={{ "font-size": "1rem" }}>Historia del paciente</span>
                                                                <textarea rows="4" cols="50" id="historia" className="form-control" placeholder="Escriba la historia del paciente" />
                                                        </div>
                                                        <div class="text-center">
                                                            <a href="#" onClick={actualizarHistoria} className="btn-get-started scrollto mt-3" style={{ "text-decoration": "none" }}>Aceptar</a>
                                                        </div>
                                                    </form>
                                                        
                
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



function actualizarHistoria() {
    var Historia = new Object();
    Historia._id = document.getElementById("historia_id").value;
    Historia.usuario_id = document.getElementById("paciente_id").value;
    Historia.contenido = document.getElementById("historia").value;

    ocultar('faq');
    mostrar('cargando');

    // Envio POST al backend
    axios.post("https://dblinkmed.herokuapp.com/modificarHistoria", {
        id: Historia._id,
        usuario_id: Historia.usuario_id,
        contenido: Historia.contenido,
    })
    .then(function (response) {
        // console.log(response);
        window.location.href = '/historia='+Historia.usuario_id;
    })
    .catch(function (error) {
        // console.log(error);
        ocultar('faq');
        mostrar('Doctor');
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

export default withRouter(FormHistoria);