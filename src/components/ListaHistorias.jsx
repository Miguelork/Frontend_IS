import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { findAllByTestId } from '@testing-library/react';

const cookies = new Cookies();

class ListaHistorias extends React.Component {
    state = {
        dataDoctorHistoria: [],
        dataHistoria: [],
        dataUsuario: []
    }

    esNull = () => {
        if (this.state.dataUsuario.length > 1) {
            return false;
        } else {
            return true;
        }
    }


    async componentDidMount() {
        if (!cookies.get("usuario")) {
            window.location.href = "/login";
        } else {
            if (cookies.get("usuario").tipo !== 'Voluntario' &&
                cookies.get("usuario").tipo !== 'Premium') {
                window.location.href = "/menu";
            }
        }

        const responseDoctorHistoria = await axios({
            url: "https://dblinkmed.herokuapp.com/listaDoctorHistoria",
            method: "GET",
        });

        const responseHistoria = await axios({
            url: "https://dblinkmed.herokuapp.com/listaHistoria",
            method: "GET",
        });

        const responseUsuario = await axios({
            url: "https://dblinkmed.herokuapp.com/listaUsuario",
            method: "GET",
        });


        // console.log(response.data.item);
        let dataDH = await responseDoctorHistoria.data.item;
        let dataH = await responseHistoria.data.item;
        let dataU = await responseUsuario.data.item;

        dataDH.map(item => {
            if (item.doctor_id == cookies.get("usuario")._id) {
                this.setState({
                    dataDoctorHistoria: this.state.dataDoctorHistoria.concat(item)
                })
            }
        })

        for (const Hitem of this.state.dataDoctorHistoria) {
            dataH.map(item => {
                if (Hitem.historia_id == item._id) {
                    this.setState({
                        dataHistoria: this.state.dataHistoria.concat(item)
                    })
                }
            })
        }


        for (const Hitem of this.state.dataHistoria) {
            dataU.map(item => {
                if (Hitem.usuario_id == item._id) {
                    this.setState({
                        dataUsuario: this.state.dataUsuario.concat(item)
                    })
                }
            })
        }
    }

    render() {
        return (
            <div>
                <Header></Header>
                <section id="hero">
                    <section id="team" className="team" style={{ "background": "transparent" }}>
                        <div className="container">
                            <div className="section-title mb-0 pb-0" data-aos="fade-up">
                                <h2>Lista de historias</h2>
                            </div>
                            {(this.esNull()) ?
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 mt-3">
                                            <img src="assets/img/notfound.svg" className="img-fluid" alt="" />
                                            <h5 className="mt-5 fontPop" style={{ "color": "white" }}>No te han sido compartidas historias aun</h5>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 mb-5 text-center">
                                            <div data-aos="zoom-out">
                                                <h1 className="mt-3 mb-3" style={{ "color": "white" }}>Pacientes</h1>
                                            </div>
                                        </div>
                                        <div className="row section-title" data-aos="fade-left" id="cargando" style={{ "display": "none" }}>
                                            <div className="lds-spinner" style={{ "padding-right": "90px" }} ><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
                                            <p style={{ "color": "white", "font-size": "12px" }}>Cargando</p>
                                            <style dangerouslySetInnerHTML={{ __html: "\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n" }} />
                                        </div>
                                        <div id='lista' className="row" data-aos="fade-left">
                                            <div class="container" style={{ "max-width": "600px" }}>
                                                <table class="table" id="tablaDoctores" >
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" style={{ "color": "white" }}>Nombre</th>
                                                            <th scope="col" style={{ "color": "white" }}>Usuario</th>
                                                            <th scope="col" style={{ "color": "white" }}>Opción </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.dataUsuario.map(item => {
                                                            return (
                                                                <tr >
                                                                    <td scope="row" style={{ "color": "white" }}>{item.nombre + " " + item.apellido}</td>
                                                                    <td style={{ "color": "white" }}>{item.user}</td>
                                                                    <td style={{ "color": "white" }}>
                                                                        <a href={'/historia=' + item._id} class="btn-checkk btn-sm mr-2">
                                                                            Historia
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </section>
                    <Wave />
                </section>
                <style dangerouslySetInnerHTML={{ __html: "\n.table {\n  border: 1px solid #1acc8d;\n}\n th {\n    font-weight: 700;\n    text-transform: uppercase;\n    font-family: \"Poppins\", sans-serif;\n}\n" }} />
            </div>
        )
    }
}



export default withRouter(ListaHistorias)