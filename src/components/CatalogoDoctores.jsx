import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import RecuperarContrasena from './RecuperarContrasena';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const cookies = new Cookies();

class CatalogoDoctores extends React.Component {
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
                {/* ======= Hero Section ======= */}
                <section id="hero">
                    <section id="team" className="team" style={{ "background": "transparent" }}>
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Catalogo de</h2>
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
                                                        <div className="social">
                                                            <a href><i className="icofont-star" /> --</a>
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
                {this.state.data.map(item => {
                    if (item.tipo == "Voluntario" || item.tipo == "Premium")
                        return (
                            <div className="modal fade" id={item.user} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLongTitle">Información detallada</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <p>{item.nombre}</p>
                                            <p>{item.apellido}</p>
                                            <p>{item.user}</p>
                                            <p>{item.password}</p>
                                            <p>{item.nacimiento}</p>
                                            <p>{item.sexo}</p>
                                            <p>{item.telefono}</p>
                                            <p>{item.email}</p>
                                            <p>{item.direccion}</p>
                                            <p>{item.especialidades}</p>
                                            <p>{item.horaInicial}</p>
                                            <p>{item.horaFinal}</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                })}
            </div>
        )
    }
}



export default CatalogoDoctores
