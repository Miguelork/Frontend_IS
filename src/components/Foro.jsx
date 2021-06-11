import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import RecuperarContrasena from './RecuperarContrasena';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const cookies = new Cookies();

class Foro extends React.Component {
    state = {
        data: []
    }

    async componentDidMount() {
        if (!cookies.get("usuario")) {
            window.location.href = "/login";
        }

        const response = await axios({
            url: "https://dblinkmed.herokuapp.com/listaPregunta",
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
                                <p style={{ "color": "white" }}>Foro</p>
                            </div>
                            <div className="row" data-aos="fade-left">
                                <section id="faq" className="faq section-bg" style={{ "background": "none", "padding-top": "0rem" }}>
                                    <input type="text" id="inputBuscar" onKeyUp={Buscar} className="form-control searchm  mb-3" placeholder=" 🔍    Escriba lo que desea buscar..." />
                                    <div className="faq-list">
                                        <ul id="listaForo">
                                            {this.state.data.map((item, index) => {
                                                return (
                                                    <li>
                                                        <a data-toggle="collapse" className="collapse" href={'#faq-list-' + index}>{item.titulo}<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                                        <div id={'faq-list-' + index} className="collapse" data-parent=".faq-list">
                                                            <p>{item.descripcion}</p>
                                                            <Link to={`/${item._id}`}>
                                                                <a class="btn-get-started scrollto mt-2">Abrir</a>
                                                            </Link>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
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

function Buscar() {
    // console.log("Entrandasdf")
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("inputBuscar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listaForo");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

export default Foro
