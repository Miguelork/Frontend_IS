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
                {/* ======= Hero Section ======= */}
                <section id="hero">
                    <section id="team" className="team" style={{ "background": "transparent" }}>
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Catalogo de Doctores</h2>
                            </div>
                            <div className="row" data-aos="fade-left">
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
                                {this.state.data.map(item => {
                                    if ((item.tipo == "Voluntario" || item.tipo == "Premium") && (item.aprobado == true))
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
                                                    <div class="col-md-12 form-group">
                                                        <div className="input-group">
                                                            <div>
                                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Nombre</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-control"><p>{item.nombre} {item.apellido}</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                                </svg>  Telefono</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-control"><p>{item.telefono}</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                                                </svg>  Email</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-control"><p>{item.email}</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                                </svg>  Dirección</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-control"><p>{item.direccion}</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                                                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                                                </svg>  Especialidad</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-control"><p>{item.especialidades}</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <h6 className="col-sm-12 mb-2" style={{ "color": "white" }} >Horarios de atencion</h6>
                                                    <div class="col-sm-12 form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                                                </svg> Desde</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-control mr-1"><p>{item.horaInicial}</p></div>

                                                            <div className="input-group-prepend ml-1">
                                                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                                                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                                                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                                                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                                                </svg>  Hasta</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-control"><p>{item.horaFinal}</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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


export default CatalogoDoctores
