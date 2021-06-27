import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import RecuperarContrasena from './RecuperarContrasena';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const cookies = new Cookies();

class Chat extends React.Component {
    state = {
        mensajes: [],
        chat_id: '',
        usuario: JSON
    }

    async componentDidMount() {
        window.scrollTo(0, 0);

        if (!cookies.get("usuario")) {
            window.location.href = "/login";
        }

        this.setState({
            usuario: cookies.get("usuario")
        })

        const chat_id = this.props.match.params.chat_id;
        this.setState({
            chat_id
        })

        const response = await axios({
            url: "https://dblinkmed.herokuapp.com/listaMensaje",
            method: "GET",
        });
        console.log(response.data.item);
        let mensajes = await response.data.item;

        var mensajesDeEsteChat = [];
        mensajes.map(mensaje => {
            console.log(mensajes)
            if (mensaje.idChat == chat_id) {
                mensajesDeEsteChat.push(mensaje)
            }
        })

        this.setState({
            mensajes: mensajesDeEsteChat
        })

        this.refrescarChat(chat_id)

    }

    async refrescarChat(chat_id) {
        const response = await axios({
            url: "https://dblinkmed.herokuapp.com/listaMensaje",
            method: "GET",
        });
        console.log(response.data.item);
        let mensajes = await response.data.item;

        var mensajesDeEsteChat = [];
        mensajes.map(mensaje => {
            console.log(mensajes)
            if (mensaje.idChat == chat_id) {
                mensajesDeEsteChat.push(mensaje)
            }
        })

        this.setState({
            mensajes: mensajesDeEsteChat
        })

        setTimeout(() => { this.refrescarChat(chat_id) }, 1000);
    }

    render() {
        return (
            <div>
                <header className="page-header">
                    <div className="container ">
                        <h2 style={{ "text-transform": "uppercase", "font-family": "Poppins", "font-weight": "700" }}>Chat</h2>
                    </div>
                </header>
                <div className="main">
                    <div className="container ">
                        <div className="chat-log">
                            {this.state.mensajes.map((mensaje) => {
                                if (mensaje.user == this.state.usuario.user) {
                                    return (
                                        <div className="chat-log__item chat-log__item--own">
                                            <h3 className="chat-log__author">Yo <small> - {mensaje.fecha}</small></h3>
                                            <div className="chat-log__message">{mensaje.texto}</div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className="chat-log__item">
                                            <h3 className="chat-log__author">{mensaje.user} <small> - {mensaje.fecha}</small></h3>
                                            <div className="chat-log__message">{mensaje.texto}</div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className="chat-form" style={{ "padding": "0.5rem" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-9 col-xs-10">
                                    <input type="text" id="mensaje" className="form-control" />
                                </div>
                                <div className="col-3 col-xs-2">
                                    <button onClick={() => enviarMensaje(this.state.chat_id)} className="btn btn-success btn-block" style={{ "color": "#fff", "background-color": "#1217A5", "border-color": "#1217A5", "text-transform": "uppercase", "font-family": "Poppins", "font-weight": "700" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text-fill" viewBox="0 0 16 16">
                                            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <link href="assets/css/chat.css" rel="stylesheet" />
            </div>
        )
    }
}

function enviarMensaje(chat_id) {

    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " - "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes();
    console.log(datetime)

    var Mensaje = new Object();
    Mensaje.idChat = chat_id
    Mensaje.texto = document.getElementById("mensaje").value
    Mensaje.fecha = datetime
    Mensaje.user = cookies.get("usuario").user

    axios.post("https://dblinkmed.herokuapp.com/crearMensaje", {
        idChat: Mensaje.idChat,
        texto: Mensaje.texto,
        fecha: Mensaje.fecha,
        user: Mensaje.user,
    })
        .then(function (response) {
            // console.log(response);
        })
        .catch(function (error) {
            // console.log(error);
        });

    document.getElementById("mensaje").value = ''

    setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 1000);

}

export default withRouter(Chat);