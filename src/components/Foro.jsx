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
                                <h2>Foro</h2>
                                <p style={{ "color": "white" }}>Temas</p>
                            </div>
                            <div className="row" data-aos="fade-left">
                                <section id="faq" className="faq section-bg" style={{ "background": "none", "padding-top": "0rem" }}>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>   Buscar</span>
                                            </div>
                                        </div>
                                        <input type="text" id="inputBuscar" onKeyUp={Buscar} className="form-control" placeholder="Escriba lo que desea buscar..." />
                                    </div>


                                    <div className="faq-list">
                                        <ul id="listaForo">
                                            <li>
                                                <a data-toggle="collapse" className="collapse" href="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                                <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                                                    <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <a data-toggle="collapse" href="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                                <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                                                    <p>
                                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
            </p>
                                                </div>
                                            </li>
                                            <li>
                                                <a data-toggle="collapse" href="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                                <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                                                    <p>
                                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
            </p>
                                                </div>
                                            </li>
                                            <li>
                                                <a data-toggle="collapse" href="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                                <div id="faq-list-4" className="collapse" data-parent=".faq-list">
                                                    <p>
                                                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
            </p>
                                                </div>
                                            </li>
                                            <li>
                                                <a data-toggle="collapse" href="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                                <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                                                    <p>
                                                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
            </p>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>
                                </section>{/* End F.A.Q Section */}
                            </div>
                        </div>
                    </section>{/* End Team Section */}
                    <Wave />
                </section>
            </div>
        )
    }
}

function Buscar() {
    console.log("Entrandasdf")
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
