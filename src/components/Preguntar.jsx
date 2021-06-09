import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import RecuperarContrasena from './RecuperarContrasena';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const cookies = new Cookies();

class Preguntar extends React.Component {
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
                <section id="hero">
                    <section id="team" className="team" style={{ "background": "transparent" }}>
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Realizar una pregunta</h2>
                            </div>
                            <div className="row section-title" data-aos="fade-left" id="cargando" style={{ "display": "none" }}>
                                <div className="lds-spinner" style={{ "padding-right": "90px" }} ><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
                                <p style={{ "color": "white", "font-size": "12px" }}>Cargando</p>
                                <style dangerouslySetInnerHTML={{ __html: "\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n" }} />
                            </div>
                            <div className="row" id="pregunta" >
                                <div className="col-md-4 hero-img">
                                    <img src="assets/img/foroimg.svg" className="img-fluid animated" alt="" />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-7" data-aos="fade-left" id="DocFormulario">

                                    <form role="form"  class="php-email-form" style={{ "width": "100%" }}>
                                        <div class="form-group">
                                            <h2 className="mt-4 mb-4" style={{ "color": "white" }}><b>Ingresa aqui tu duda</b></h2>
                                            <input type="text" id="titulo" name="titulo" className="form-control" placeholder="Escriba su duda aqui " required />
                                            <h2 className="mt-4 mb-4" style={{ "color": "white" }}><b>Especifique detalles de la duda</b></h2>
                                            <textarea rows="6" cols="50" id="descripcion" name="descripcion" className="form-control" placeholder="Escriba detalles de su duda (Si lo considera necesario)" required />
                                        </div>
                                        <div class="mt-4 mb-3">
                                            <div style={{ "display": "none", "color": "white" }}>¡Ha ocurrido un error!</div>
                                        </div>
                                        <div class="text-center">
                                            <a href="#" onClick={validar} className="btn-get-started scrollto">Aceptar</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Wave />
                </section>
            </div>
        )
    }
}
function validar() {
    var pregunta  = document.getElementById("titulo").value;
    if (pregunta.length == 0) {
        alert("No furula");
    }else{
        crearPregunta();
    }
     
}

async function crearPregunta() {
    var Pregunta = new Object(); // Creando el objeto pregunta
    Pregunta.titulo = document.getElementById("titulo").value; // Obteniendo el titulo
    Pregunta.descripcion = document.getElementById("descripcion").value; // Obteniendo la descripcion
    let usuario = await cookies.get("usuario"); // Obteniendo los datos del usuario en cookies
    Pregunta.nombre = usuario.nombre; // Poniendo al objeto pregunta el nombre
    Pregunta.apellido = usuario.apellido; // Poniendo al objeto pregunta el apellido
    Pregunta.user = usuario.user; // Poniendo la objeto pregunta el user
    // Mostrar cargando mientrar se ejecutan toda la funcion
    ocultar('pregunta');
    mostrar('cargando');
    // Envio POST al backend
    
    axios.post('https://dblinkmed.herokuapp.com/crearPregunta', { 
        titulo: Pregunta.titulo,
        descripcion: Pregunta.descripcion,
        nombre: Pregunta.nombre,
        apellido: Pregunta.apellido,
        user: Pregunta.user
    })
        .then(function (response) {
            console.log(response);
            setTimeout(() => { window.location.href = '/foro'; }, 3000); // Re
        })
        .catch(function (error) {
            console.log(error);
            ocultar('cargando');
            mostrar('pregunta');
        });

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

}



export default Preguntar
