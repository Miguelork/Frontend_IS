import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import RecuperarContrasena from './RecuperarContrasena';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const cookies = new Cookies();

class Chats extends React.Component {
    state = {
        data: [],
        usuario: JSON,
        hayChats: false
    }

    async componentDidMount() {
        if (!cookies.get("usuario")) {
            window.location.href = "/login";
        }

        const response = await axios({
            url: "https://dblinkmed.herokuapp.com/listaChat",
            method: "GET",
        });
        //console.log(response.data.item);
        let data = await response.data.item;
        this.setState({
            data
        })

        this.setState({
            usuario: cookies.get("usuario")
        })
    }

    render() {
        return (
            <div>
                <section id="hero" data-testid="Chats">
                    <section id="team" className="team" style={{ "background": "transparent" }}>
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <p style={{ "color": "white", "font-size": "28px" }}>Conversaciones</p>
                            </div>
                            <div className="row" data-aos="fade-left">
                                <div className="col-md-1 "></div>
                                <div className="col-md-10 ">
                                    <section id="faq" className="faq section-bg centered" style={{ "background": "none", "padding-top": "0rem" }}>
                                        <div id='lista' className="row" data-aos="fade-left">
                                            <div class="container" style={{ "max-width": "600px" }}>
                                                <table  id="tablaDoctores" >
                                                    <tbody>
                                                        {this.state.data.map(item => {
                                                            if (item.userPaciente == this.state.usuario.user) {
                                                                this.state.hayChats = true
                                                                return (
                                                                    <div>
                                                                        <Link to={'chat=' + item._id}>
                                                                            <a className="btn-get-started" style={{ "color": "white"}}>{item.nombreDoctor} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text-fill" viewBox="0 0 16 16">
                                                                                <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                                                            </svg></a>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            }
                                                            if (item.userDoctor == this.state.usuario.user) {
                                                                this.state.hayChats = true
                                                                return (
                                                                    <Link to={'chat=' + item._id}>
                                                                        <a className="btn-get-started" style={{ "color": "white"}}>{item.nombrePaciente} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text-fill" viewBox="0 0 16 16">
                                                                            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                                                        </svg></a>
                                                                    </Link>
                                                                )
                                                            }
                                                        })}
                                                    </tbody>
                                                </table>
                                                {
                                                    this.state.hayChats == false &&
                                                    <div className="row section-title" data-aos="fade-left">
                                                        <p style={{ "color": "white", "font-size": "12px", "margin-top": "3rem" }}>No tienes Chats abiertos</p>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Wave />
                </section>
                <style dangerouslySetInnerHTML={{ __html: "\n.table {\n  border: 1px solid #1acc8d;\n}\n th {\n    font-weight: 700;\n    text-transform: uppercase;\n    font-family: \"Poppins\", sans-serif;\n}\n" }} />
            </div>
        )
    }
}


export default Chats