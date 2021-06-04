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
                            <div className="row" data-aos="fade-left">
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
                                                                ? <h4><span class="badge badge-secondary" onClick='aprobarDoctor()'>Aprobado</span></h4>
                                                                : <h4><span class="badge badge-secondary" onClick='rechazarDoctor()'>Rechazado</span></h4>
                                                            }
                                                            
                                                        </div>
                                                        <div className="cambiar">
                                                            <button type="button" class="btn btn-success">Aprobar</button>
                                                            <button type="button" class="btn btn-danger">Rechazar</button>
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



export default AdminAprobar