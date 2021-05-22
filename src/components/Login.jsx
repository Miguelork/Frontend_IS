import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'
import Wave from './Wave'

function login() {
    alert("Pulse");
}

const Login = () => {
    return (
        <div>
            <Header></Header>
            {/* ======= Hero Section ======= */}
            <section id="hero">
                <section id="pricing" className="pricing" style={{ "padding": "1rem" }}>
                    <div className="container" style={{ "max-width": "500px" }}>
                        <div className="section-title" data-aos="fade-up">
                            <h2>Login</h2>
                            <p style={{ "color": "white" }}>Usuario</p>
                        </div>
                        <div className="row" data-aos="fade-left">
                            <form role="form" class="php-email-form" style={{ "width": "100%" }}>
                                <input type="hidden" id="tipoD" />
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Usuario</span>
                                        </div>
                                    </div>
                                    <input type="text" id="user" className="form-control" placeholder="Escriba su usuario" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>   Clave</span>
                                        </div>
                                    </div>
                                    <input type="password" id="password" className="form-control" placeholder="Escriba su contraseña" />
                                </div>
                                <div class="mb-3">
                                    <div style={{ "display": "none", "color": "white" }}>¡Ha ocurrido un error!</div>
                                </div>
                                <div class="text-center"><a href="#" onClick={login} className="btn-get-started scrollto">Aceptar</a></div>
                            </form>
                            <Link to="/">
                                <p style={{ "color": "white", "font-size": "10px", "margin-top": "1rem" }}>¿Has olvidado la contraseña?</p>
                            </Link>
                            <Link to="/register">
                                <p style={{ "color": "white", "font-size": "10px" }}>Registrarse</p>
                            </Link>
                        </div>
                    </div>
                </section>
                {/* End Pricing Section */}
                <div>
                </div>
                <Wave />
            </section>
            {/* End Hero */}
        </div>
    )
}

export default Login
