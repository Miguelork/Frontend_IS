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
        doctorHistoria_id: ''
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
                                <h2>Pregunta</h2>
                                <p style={{ "color": "white" }}>Perfil</p>
                                <p style={{ "color": "white", "font-size": "14px" }}>Doctor</p>
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

                                                    <div class="col-lg-3 col-md-6">
                                                        <div class="count-box">
                                                            <i class="icofont-doctor"></i>
                                                            <span data-toggle="counter-up" style={{ "font-size": "1.5rem" }}>{this.state.doctor.nombre} {this.state.doctor.apellido}</span>
                                                            <a href="#" class="btn-get-started scrollto mt-3" style={{ "text-decoration": "none" }}>Iniciar Chat</a>
                                                            {(this.state.doctorHistoria_id == '')
                                                                ?<a href="#" onClick={ () => compartirHistoria(this.state.doctor._id , this.state.doctor.user, this.state.usuarioHistoria_id) } class="btn-get-started scrollto mt-3" style={{ "text-decoration": "none" }}>Compartir mi Historia</a>
                                                                :<p class="btn-get-started scrollto mt-3" style={{ "text-decoration": "none" }}>Historia compartida</p>
                                                            }
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-9 col-md-6 mt-5 mt-md-0">
                                                        <div class="count-box">
                                                            <i class="icofont-document-folder"></i>
                                                            <span data-toggle="counter-up" style={{ "font-size": "1rem" }}>Datos del Doctor</span>
                                                            <p>Aqui mostrar los datos del doctor detalladamente y bueno nos esta faltando un atributo que sea para el costo por hora del doctor. Para mostrar los datos del doctor en esta parte se debe usar this.state.doctor.nombre o this.state.doctor.tipo y asi pero eso entre llaves en el codigo</p>
                                                        </div>
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

async function compartirHistoria(idDoctor ,userDoc, idHistoria) {
    console.log("Ejecutando funcion: compartirHistoria()")
    console.log("idDoctor:" , idDoctor)
    console.log("idHistoria:" , idHistoria)
    ocultar('faq');
    mostrar('cargando');
    axios.post("https://dblinkmed.herokuapp.com/crearDoctorHistoria", {
            historia_id: idHistoria,
            doctor_id: idDoctor,
        })
        .then(function (response) {
            // console.log(response);
            window.location.href = '/doctor='+userDoc;
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