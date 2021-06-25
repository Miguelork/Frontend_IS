import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import RecuperarContrasena from './RecuperarContrasena';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const cookies = new Cookies();

class Doctor extends React.Component {
    state = {
        doctor: JSON,
        usuario: JSON,
        usuarioHistoria_id: '',
        doctorHistoria_id: '',
        url: ''
    }

    async componentDidMount() {
        if (!cookies.get("usuario")) {
            window.location.href = "/login";
        }

        const user = this.props.match.params.user;
        //console.log(user)

        const responseUsuario = await axios({
            url: "https://dblinkmed.herokuapp.com/listaUsuario",
            method: "GET",
        });

        const responseHistoria = await axios({
            url: "https://dblinkmed.herokuapp.com/listaHistoria",
            method: "GET",
        });

        const responseDoctorHistoria = await axios({
            url: "https://dblinkmed.herokuapp.com/listaDoctorHistoria",
            method: "GET",
        });


        //console.log(response.data.item);
        let dataUsuario = await responseUsuario.data.item;
        let dataHistoria = await responseHistoria.data.item;
        let dataDoctorHistoria = await responseDoctorHistoria.data.item;

        dataUsuario.map(item => {
            if (item.user == user) {
                this.setState({
                    doctor: item
                })
            }
        })

        let usuario = cookies.get("usuario");
        this.setState({
            usuario: usuario
        })

        dataHistoria.map(item => {
            if (item.usuario_id == this.state.usuario._id) {
                this.setState({
                    usuarioHistoria_id: item._id
                })
            }
        })

        dataDoctorHistoria.map(item => {
            if (item.doctor_id == this.state.doctor._id
                && item.historia_id == this.state.usuarioHistoria_id) {
                this.setState({
                    doctorHistoria_id: item._id
                })
            }
        })

        // Share WhatsApp
        var url = window.location.href;
        this.setState({
            url: url
        })

        console.clear()
        console.log(this.state.doctor)
        console.log(this.state.usuario)
        console.log(this.state.usuarioHistoria_id)
        console.log(this.state.doctorHistoria_id)

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
                                <h2>Doctor</h2>
                                <p style={{ "color": "white", "font-size": "14px" }}>Contactar con:</p>
                                <p style={{ "color": "white" }}>{this.state.doctor.nombre} {this.state.doctor.apellido}</p>
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
                                                        <div class="count-box br">
                                                            <i class="icofont-doctor"></i>
                                                            <span style={{ "color": "#293133", "font-size": "1.5rem" }}>{this.state.doctor.nombre} {this.state.doctor.apellido}</span>
                                                            <span style={{ "color": "#293133", "font-size": "1rem" }}>{this.state.doctor.especialidades}</span>
                                                            <a href="#" class="btn-get-started scrollto mt-3" style={{ "text-decoration": "none" }}>Iniciar Chat</a>
                                                            {(this.state.doctorHistoria_id == '')
                                                                ? <a href="#" onClick={() => compartirHistoria(this.state.doctor._id, this.state.doctor.user, this.state.usuarioHistoria_id)} class="btn-get-started scrollto mt-3" style={{ "text-decoration": "none" }}>Compartir mi Historia</a>
                                                                : <button type="button" disabled class="btn-get-started scrollto mt-3" style={{ "text-decoration": "none", "opacity": ".65", "background-color": "#6c757d", "border-color": "#6c757d" }}>Historia compartida</button>
                                                            }
                                                            <a href={'whatsapp://send?text=' + this.state.url} class="btn-get-started scrollto mt-3" style={{ "text-decoration": "none" }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                                                </svg>
                                                                  Compartir
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-9 col-md-6 mt-5 mt-md-0">
                                                        <div class="count-box br">
                                                            <i class="icofont-document-folder"></i>
                                                            <span className="mb-2" style={{ "color": "#293133", "font-size": "1.5rem" }}>Información del Doctor</span>
                                                            <p>Hola aqui tu médico de contacto, mi nombre es {this.state.doctor.nombre} {this.state.doctor.apellido}, soy especialista en {this.state.doctor.especialidades}, si deseas contactar conmigo este es el monto de mi consulta: {this.state.doctor.monto}$ , si estas de acuerdo con el monto, presione el boton de iniciar chat, o bien el de compartir historia para facilitarme su información.</p>
                                                            <br />
                                                            {(this.state.doctorHistoria_id == '')
                                                                ? <div></div>
                                                                : <div class="alert alert-primary" role="alert">
                                                                Su Historia <a href="#" class="alert-link">ya esta compartida</a> con el Dr. {this.state.doctor.nombre} {this.state.doctor.apellido}.
                                                              </div>
                                                            }
                                                        </div>
                                                    </div>
                                                    {/*
                                                    <div class="text-center col-md-12 mt-3 mb-3">
                                                        <a href="/foro" className="btn-get-started ">Volver</a>
                                                    </div>
                                                    */}
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

async function compartirHistoria(idDoctor, userDoc, idHistoria) {
    console.log("Ejecutando funcion: compartirHistoria()")
    console.log("idDoctor:", idDoctor)
    console.log("idHistoria:", idHistoria)
    ocultar('faq');
    mostrar('cargando');
    axios.post("https://dblinkmed.herokuapp.com/crearDoctorHistoria", {
        historia_id: idHistoria,
        doctor_id: idDoctor,
    })
        .then(function (response) {
            // console.log(response);
            window.location.href = '/doctor=' + userDoc;
        })
        .catch(function (error) {
            // console.log(error);
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


export default withRouter(Doctor);