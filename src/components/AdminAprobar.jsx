import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import RecuperarContrasena from './RecuperarContrasena';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const cookies = new Cookies();

class AdminAprobar extends React.Component {
    state = {
        data: []
    }


    async componentDidMount() {
        if (!cookies.get("usuario")) {
            window.location.href = "/login";
        } else {
            if (cookies.get("usuario").tipo !== 'Admin'){
                window.location.href = "/menu";
            }
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
                {/* ======= Hero Section ======= */}
                <section id="hero">
                    <section id="team" className="team" style={{ "background": "transparent" }}>
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Lista de aprobacion</h2>
                                <p style={{ "color": "white" }}>Doctores</p>
                            </div>
                            <div className="row section-title" data-aos="fade-left" id="cargando" style={{ "display": "none" }}>
                                <div className="lds-spinner" style={{ "padding-right": "90px" }} ><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
                                <p style={{ "color": "white", "font-size": "12px" }}>Cargando</p>
                                <style dangerouslySetInnerHTML={{ __html: "\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n" }} />
                            </div>
                            <div id ='lista' className="row" data-aos="fade-left">
                                {this.state.data.map(item => {
                                    if (item.tipo == "Voluntario" || item.tipo == "Premium")
                                        return (
                                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0 mb-5">
                                                <div className="member" data-aos="zoom-in" data-aos-delay={100}>
                                                    <div className="pic"><img src={"assets/img/team/" + item.sexo + ".jpg"} className="img-fluid" alt /></div>
                                                    <div className="member-info">
                                                        <h4><a href="#" style={{ "text-decoration": "none", "color": "#01036f" }} data-toggle="modal" data-target={"#" + item.user}>{item.nombre} {item.apellido}</a></h4>
                                                        <span>{item.especialidades}</span>
                                                        <div className="estatus">
                                                            {(item.aprobado)
                                                                ? <h4><span class="badge badge-secondary">Aprobado</span></h4>
                                                                : <h4><span class="badge badge-secondary">Rechazado</span></h4>
                                                            }
                                                            
                                                        </div>
                                                        <div className="cambiar">
                                                            <button type="button" class="btn btn-success" onClick={actualizarDoctor.bind(this,item,true)}>Aprobar</button>
                                                            <button type="button" class="btn btn-danger" onClick={actualizarDoctor.bind(this,item,false)}>Rechazar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                })}
                            </div>
                        </div>
                    </section>{/* End Team Section */}
                    <Wave />
                </section>
                {/* End Hero */}
            </div>
        )
    }
}

function actualizarDoctor(doctor,booleano) {
    var Doctor = doctor;

    ocultar('lista');
    mostrar('cargando');

    // Envio POST al backend
    axios.post("https://dblinkmed.herokuapp.com/modificarUsuario", {
        // Envio POST al backend
        id: Doctor._id,
        tipo: Doctor.tipo,
        nombre: Doctor.nombre,
        apellido: Doctor.apellido,
        user: Doctor.user,
        password: Doctor.password,
        nacimiento: Doctor.nacimiento,
        sexo: Doctor.sexo,
        telefono: Doctor.telefono,
        email: Doctor.email,
        direccion: Doctor.direccion,
        especialidades: Doctor.especialidades,
        horaInicial: Doctor.horaInicial,
        horaFinal: Doctor.horaFinal,
        aprobado: booleano
    
    })
        .then(function (response) {
            console.log(response);
            window.location.href = '/admin_aprobar';
        })
        .catch(function (error) {
            console.log(error);
            ocultar('cargando');
            mostrar('lista');
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



export default AdminAprobar