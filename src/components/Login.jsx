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
            <section id="pricing" className="pricing" style={{"padding":"1rem"}}>
                <div className="container" style={{"max-width":"500px"}}>
                <div className="section-title" data-aos="fade-up">
                  <h2>Login</h2>
                  <p style={{"color":"white"}}>Usuario</p>
               </div>
               <div className="row" data-aos="fade-left">
               <form role="form" class="php-email-form" style={{"width":"100%"}}>
               <input type="hidden" id="tipoD"/>
               <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" style={{"width":"108px","text-align":"center"}}>Usuario</span>
                </div>
                <input type="text" id="user" className="form-control" placeholder="Escriba su usuario" />
                </div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Contraseña</span>
                </div>
                <input type="password" id="password" className="form-control" placeholder="Escriba su contraseña" />
                </div>
                     <div class="mb-3">
                        <div style={{"display":"none" , "color":"white"}}>¡Ha ocurrido un error!</div>
                     </div>
                     <div class="text-center"><a href="#" onClick={ login } className="btn-get-started scrollto">Aceptar</a></div>
                  </form>
                  <Link to="/">
                  <p style={{"color":"white","font-size":"10px","margin-top":"1rem"}}>¿Has olvidado la contraseña?</p>
                  </Link>
                  <Link to="/register">
                  <p style={{"color":"white","font-size":"10px"}}>Registrarse</p>
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
