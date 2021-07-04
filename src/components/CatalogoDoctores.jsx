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
                <section id="hero">
                    <section id="team" data-testid="Catalogo" className="team" style={{ "background": "transparent" }}>
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Catalogo de Doctores</h2>
                            </div>
                            <div className="row" data-aos="fade-left">
                                {/* ======= <div className="row mb-3">
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
                                </div>======= */}
                                {this.state.data.map(item => {
                                    if ((item.tipo == "Voluntario" || item.tipo == "Premium") && (item.aprobado == true))
                                        return (
                                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0 mb-5">
                                                <div className="carCatalogo" data-aos="zoom-in" data-aos-delay={100}>
                                                    <a href="#" style={{ "text-decoration": "none", "color": "whitesmoke" }} data-toggle="modal" data-target={"#" + item.user}>
                                                        <div className="pic p-4"><img src={"assets/img/doctor" + item.sexo + ".svg"} className="img-fluid" alt /></div>
                                                        <div className="member-info">
                                                            <h5 style={{ "color": "whitesmoke" }}><strong>{item.nombre} {item.apellido}</strong></h5>
                                                            <span><i>{item.especialidades}</i></span>
                                                            {(item.tipo == "Voluntario") ?
                                                                <div className="social pb-3">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                                    </svg>
                                                                </div>
                                                                :
                                                                <div className="social pb-3">
                                                                    <i className="icofont-star" />
                                                                </div>
                                                            }
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                })}
                            </div>
                        </div>
                    </section>
                    <Wave />
                </section>
                {this.state.data.map(item => {
                    if (item.tipo == "Voluntario" || item.tipo == "Premium")
                        return (
                            <div className="modal bradmodal fade" id={item.user} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog bradmodal modal-dialog-centered" role="document">
                                    <div className="modal-content bradmodal ">
                                        <div className="modal-header bg-green pt-2 pb-2">
                                            <h5 style={{ "color": "white" }} className="modal-title" id="exampleModalLongTitle">Información detallada</h5>
                                            <h1 display="400" style={{ "color": "white" }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
                                                    <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                                </svg></span>
                                            </h1>
                                        </div>
                                        <div className="modal-body bg-blue">
                                            <div class="container">
                                                <div class="row">
                                                    <h4 style={{ "color": "whitesmoke" }}>Nombre: {item.nombre} {item.apellido}</h4>
                                                    <h4 style={{ "color": "whitesmoke" }}>Especialidad: {item.especialidades}</h4>
                                                    <h4 style={{ "color": "whitesmoke" }}>Periodo de Atención al Público:</h4>
                                                    <h4 style={{ "color": "whitesmoke" }}>Hora de Inicio: {item.horaInicial}</h4>
                                                    <h4 style={{ "color": "whitesmoke" }}>Hora de Finalización: {item.horaFinal}</h4>
                                                    {(item.tipo == "Premium") ?
                                                        <div>
                                                            <h4 style={{ "color": "whitesmoke" }}>Monto por Hora de Consulta: {item.monto}</h4>
                                                            <button href="#" onClick={() => iniciarChat(item, cookies.get('usuario'))} class="btn-get-started mr-2 scrollto mt-3" style={{ "text-decoration": "none" }}>Iniciar Chat</button>
                                                            <button href={'whatsapp://send?text=' + item.telefono} class="btn-get-started scrollto ml-2 mt-3" style={{ "text-decoration": "none" }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                                                </svg><span> Compartir</span>
                                                            </button>
                                                        </div>
                                                        :
                                                        <h6 className="mt-4" style={{ "color": "whitesmoke" }}><i>Este es un usuario voluntario, por lo cual en estos momentos no posee estas funciones habilitadas </i></h6>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                })
                }
            </div >
        )
    }
}

async function iniciarChat(doctor, usuario) {
    if (usuario.tipo == "Paciente" && usuario.user != doctor.user) {
        const Chats = await axios({
            url: "https://dblinkmed.herokuapp.com/listaChat",
            method: "GET",
        }).then(function (response) {
            let existeChat = false
            let id = ''
            console.log(response)
            response.data.item.map(Chat => {
                console.log(Chat.userPaciente, usuario.user, Chat.userDoctor, doctor.user)
                if (Chat.userPaciente == usuario.user && Chat.userDoctor == doctor.user) {
                    console.log("Verda")
                    existeChat = true
                    id = Chat._id
                }
            })

            if (existeChat == false) {
                axios.post("https://dblinkmed.herokuapp.com/crearChat", {
                    userPaciente: usuario.user,
                    userDoctor: doctor.user,
                })
                    .then(function (response) {
                        // console.log(response);
                        iniciarChat(doctor, usuario)
                    })
                    .catch(function (error) {
                        // console.log(error);
                    });
            } else {
                window.location = '/chat=' + id;
            }

        });
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

export default CatalogoDoctores
