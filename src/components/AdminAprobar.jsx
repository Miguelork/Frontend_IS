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
        data: [],
        
    }

    async componentDidMount() {
        if (!cookies.get("usuario")) {
            window.location.href = "/login";
        } else {
            if (cookies.get("usuario").tipo !== 'Admin') {
                window.location.href = "/menu";
            }
        }

        const response = await axios({
            url: "https://dblinkmed.herokuapp.com/listaUsuario",
            method: "GET",
        });
        // console.log(response.data.item);
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
                            <div className="section-title mb-0 pb-0" data-aos="fade-up">
                                <h2>Lista de aprobacion</h2>
                            </div>
                            <div className="col-md-12 mb-5 text-center">
                                <div data-aos="zoom-out">
                                    <h1 className="mt-3 mb-3" style={{ "color": "white" }}>Doctores</h1>
                                </div>
                            </div>
                            <div className="row section-title" data-aos="fade-left" id="cargando" style={{ "display": "none" }}>
                                <div className="lds-spinner" style={{ "padding-right": "90px" }} ><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
                                <p style={{ "color": "white", "font-size": "12px" }}>Cargando</p>
                                <style dangerouslySetInnerHTML={{ __html: "\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n" }} />
                            </div>
                            <div id='lista' className="row" data-aos="fade-left">
                                <div className="row mb-3">
                                    <div className="col-xs-10 col-md-10">
                                        <input style={{ "background": "white" }} type="text" id="inputBusDoc" onKeyUp={Buscar} onMouseMove={Buscar} className="form-control searchm mb-3" placeholder=" 🔍    Escriba el nombre..." />
                                    </div>
                                    <div class="col-xs-2 col-md-2"  >
                                        <select style={{ "color": "white" }} id="buscarPar" class="btn">
                                            <option style={{ "color": "black" }} onClick={Buscar} value="0" selected>Nombre</option>
                                            <option style={{ "color": "black" }} onClick={Buscar} value="4">Especialidad</option>
                                            <option style={{ "color": "black" }} onClick={Buscar} value="1">Tipo</option>
                                        </select>
                                    </div>
                                </div>

                                {/* ======= Tabla de Escritorios PC ======= */}
                                <div class="d-none d-sm-none d-md-block">
                                    <table class="table" id="tablaDoctores">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ "color": "white" }}>Nombre</th>
                                                <th scope="col" style={{ "color": "white" }}>Tipo</th>
                                                <th scope="col" style={{ "color": "white" }}>Usuario</th>
                                                <th scope="col" style={{ "color": "white" }}>Email</th>
                                                <th scope="col" style={{ "color": "white" }}>Especialidades</th>
                                                <th scope="col" style={{ "color": "white" }}>Estado</th>
                                                <th scope="col" style={{ "color": "white" }}> </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.data.map(item => {
                                                if (item.tipo == "Voluntario" || item.tipo == "Premium")
                                                    return (
                                                        <tr >
                                                            <td scope="row" style={{ "color": "white" }}>{item.nombre + " " + item.apellido}</td>
                                                            <td style={{ "color": "white" }}>{item.tipo}</td>
                                                            <td style={{ "color": "white" }}>{item.user}</td>
                                                            <td style={{ "color": "white" }}>{item.email}</td>
                                                            <td style={{ "color": "white" }}>{item.especialidades}</td>
                                                            <td style={{ "color": "white" }}>{item.aprobado.toString()}</td>
                                                            <td style={{ "color": "white" }}>
                                                                <button type="button" class="btn-checkk btn-sm mr-2" onClick={actualizarDoctor.bind(this, item, true)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                                                                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                                    </svg>
                                                                </button>
                                                                <button type="button" class="btn-cancel btn-sm ml-2" onClick={actualizarDoctor.bind(this, item, false)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-x-fill" viewBox="0 0 16 16">
                                                                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z" />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                {/* ======= Tabla de Moviles ======= */}
                                <div class="d-block d-sm-block d-md-none">
                                    <table class="table" id="tablaDoctores">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ "color": "white" }}>Nombre</th>
                                                <th scope="col" style={{ "color": "white" }}>Estado</th>
                                                <th scope="col" style={{ "color": "white" }}> </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.data.map(item => {
                                                if (item.tipo == "Voluntario" || item.tipo == "Premium")
                                                    return (
                                                        <tr >
                                                            <td scope="row" style={{ "color": "white" }}>{item.nombre + " " + item.apellido}</td>
                                                            <td style={{ "color": "white" }}>{item.aprobado.toString()}</td>
                                                            <td style={{ "color": "white" }}>
                                                                <button type="button" class="btn-checkk btn-sm mr-2" onClick={actualizarDoctor.bind(this, item, true)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                                                                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                                    </svg>
                                                                </button>
                                                                <button type="button" class="btn-cancel btn-sm ml-2" onClick={actualizarDoctor.bind(this, item, false)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-x-fill" viewBox="0 0 16 16">
                                                                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z" />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-12 mb-5 text-center">
                                <div data-aos="zoom-out">
                                    <h1 className="mt-3 mb-3" style={{ "color": "white" }}>Pacientes</h1>
                                </div>
                            </div>
                            <div id='lista' className="row" data-aos="fade-left">
                                {/* ======= Tabla de Escritorio ======= */}
                                <div class="d-none d-sm-none d-md-block">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ "color": "white" }}>Nombre</th>
                                                <th scope="col" style={{ "color": "white" }}>Genero</th>
                                                <th scope="col" style={{ "color": "white" }}>Usuario</th>
                                                <th scope="col" style={{ "color": "white" }}>Email</th>
                                                <th scope="col" style={{ "color": "white" }}>Telefono</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.data.map(item => {
                                                if (item.tipo == "Paciente")
                                                    return (
                                                        <tr id="listaForo">
                                                            <th scope="row" style={{ "color": "white" }}>{item.nombre + " " + item.apellido}</th>
                                                            <td style={{ "color": "white" }}>{item.sexo}</td>
                                                            <td style={{ "color": "white" }}>{item.user}</td>
                                                            <td style={{ "color": "white" }}>{item.email}</td>
                                                            <td style={{ "color": "white" }}>{item.telefono}</td>
                                                        </tr>
                                                    )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                {/* ======= Tabla de Moviles ======= */}
                                <div class="d-block d-sm-block d-md-none">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ "color": "white" }}>Nombre</th>
                                                <th scope="col" style={{ "color": "white" }}>Usuario</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.data.map(item => {
                                                if (item.tipo == "Paciente")
                                                    return (
                                                        <tr id="listaForo">
                                                            <th scope="row" style={{ "color": "white" }}>{item.nombre + " " + item.apellido}</th>
                                                            <td style={{ "color": "white" }}>{item.user}</td>
                                                        </tr>
                                                    )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
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

function actualizarDoctor(doctor, booleano) {
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
            // console.log(response);
            window.location.href = '/admin_aprobar';
        })
        .catch(function (error) {
            // console.log(error);
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

function Buscar() {
    var input, filter, table, tr, td, i, txtValue,num;
    input = document.getElementById("inputBusDoc");
    filter = input.value.toUpperCase();
    table = document.getElementById("tablaDoctores");
    tr = table.getElementsByTagName("tr");
    num = document.getElementById("buscarPar").value;
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[Number.parseInt(num)];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


export default AdminAprobar