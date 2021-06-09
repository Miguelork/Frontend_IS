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
                            <div className="row">
                                <div className="col-md-4 hero-img">
                                    <img src="assets/img/foroimg.svg" className="img-fluid animated" alt="" />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-7" data-aos="fade-left" id="DocFormulario">
                                    <form role="form" id="pregunta" class="php-email-form" style={{ "width": "100%" }}>
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
