import React from 'react';
import axios from 'axios';

const FormDoctor = () => {

    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,20}$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        direccion: /^[a-zA-ZÀ-ÿ\s]{1,250}$/,
        password: /^.{8,15}$/,
        hora: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/
    }

    const campos = {
        nombre:false,
        apellido:false,
        usuario:false,
        password:false,
        telefono:false,
        email:false,
        direccion:false,
        especialidad:false,
        dateI:false,
        dateE:false
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "usuario":
                validarCampo(expresiones.usuario, e.target, 'usuario');
                break;
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
                break;
            case "apellido":
                validarCampo(expresiones.nombre, e.target, 'apellido');
                break;
            case "especialidad":
                validarCampo(expresiones.nombre, e.target, 'especialidad');
                break;
            case "password":
                validarCampo(expresiones.password, e.target, 'password');
            case "email":
                validarCampo(expresiones.correo, e.target, 'email');
                break;
            case "telefono":
                validarCampo(expresiones.telefono, e.target, 'telefono');
                break;
            case "direccion":
                validarCampo(expresiones.direccion, e.target, 'direccion')
                break;
            case "dateI":
                validarCampo(expresiones.hora, e.target, 'dateI')
                break;
            case "dateE":
                validarCampo(expresiones.hora, e.target, 'dateE')
                break;
        }
    }

    const validarCampo = (expresion, input, campo) => {
        if ((expresion.test(input.value))) {
            document.getElementById(`doc${campo}`).classList.remove('is-invalid');
            document.getElementById(`doc${campo}`).classList.add('is-valid');
            campos[campo] = true;
        } else {
            document.getElementById(`doc${campo}`).classList.add('is-invalid');
            document.getElementById(`doc${campo}`).classList.remove('is-valid');
            campos[campo] = false;
        }
    }

    const onSubmit = (e) => {
        if( campos.nombre && campos.apellido && campos.usuario && campos.password && campos.telefono &&
            campos.email && campos.direccion && campos.especialidad && campos.dateI && campos.dateE){
            registrarDoctor();
        } else{
            e.preventDefault();
        } 
    }

    return (
        <div className="container">
            <div className="section-title" data-aos="fade-up">
                <h2>Registro</h2>
                <p style={{ "color": "white" }}>Doctor</p>
            </div>
            <div id="error" style={{ "display": "none" }} class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Ops!</strong> El usuario o el correo ya existen en nuestra plataforma.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div className="row" data-aos="fade-left">
                <form role="form" id="regDoctor" class="php-email-form" style={{ "width": "100%" }}>
                    <input type="hidden" id="tipoD" />
                    <div class="form-row">
                        <div class="col-md-6 form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Nombre</span>
                                    </div>
                                </div>
                                <input type="text" id="docnombre" name="nombre" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su nombre" required />
                            </div>
                        </div>
                        <div class="col-md-6 form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>  Apellido</span>
                                    </div>
                                </div>
                                <input type="text" id="docapellido" name="apellido" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su apellido" required />
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>  Usuario</span>
                                    </div>
                                </div>
                                <input type="text" id="docusuario" name="usuario" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su usuario" required />
                            </div>
                        </div>
                        <div class="col-md-6 form-group">
                            <div className="input-group">
                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>   Clave</span>
                                </div>
                                <input type="password" id="docpassword" name="password" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su contraseña" required />
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>  Telefono</span>
                                    </div>
                                </div>
                                <input type="text" id="doctelefono" name="telefono" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su teléfono" required />
                            </div>
                        </div>
                        <div class="col-md-6 form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                    </svg>  Email</span>
                                    </div>
                                </div>
                                <input type="email" id="docemail" name="email" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su email" required />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>  Dirección</span>
                                </div>
                            </div>
                            <input type="text" id="docdireccion" name="direccion" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su dirección" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                    </svg>  Especialidad</span>
                                    </div>
                                </div>
                                <input type="text" id="docespecialidad" name="especialidad" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" placeholder="Escriba su especialidades" required />
                            </div>
                        </div>
                        <div class="col-md-6 form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                    </svg> Desde</span>
                                    </div>
                                </div>
                                <input type="time" id="docdateI" name="dateI" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" required />
                                <div className="input-group-prepend">
                                    <div className="input-group-lm"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                        <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                        <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                        <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>  Hasta</span>
                                    </div>
                                </div>
                                <input type="time" id="docdateE" name="dateE" onBlur={validarFormulario} onKeyUp={validarFormulario} className="form-control" required />
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div style={{ "display": "none", "color": "white" }}>¡Ha ocurrido un error!</div>
                    </div>
                    <div class="text-center"><a href="#" onClick={onSubmit} className="btn-get-started scrollto">Aceptar</a></div>
                </form>
            </div>
        </div>
    )

}
async function registrarDoctor() {
    var Doctor = new Object();
    Doctor.tipo = document.getElementById("tipoD").value;
    Doctor.nombre = document.getElementById("docnombre").value;
    Doctor.apellido = document.getElementById("docapellido").value;
    Doctor.user = document.getElementById("docusuario").value;
    Doctor.password = document.getElementById("docpassword").value;
    Doctor.telefono = document.getElementById("doctelefono").value;
    Doctor.email = document.getElementById("docemail").value;
    Doctor.direccion = document.getElementById("docdireccion").value;
    Doctor.especialidades = document.getElementById("docespecialidad").value;
    Doctor.horaIncial = document.getElementById("docdateI").value;
    Doctor.horaFinal = document.getElementById("docdateE").value;

    // Se verifica primero que el usuario no exista
    const response = await axios({
        url: "https://dblinkmed.herokuapp.com/listaUsuario",
        method: "GET",
    });
    // console.log(response.data.item);

    var controlExiste = false; // Variable booleana para saber si existe ponerla en true
    response.data.item.map((usuario) => {
        if (usuario.user == Doctor.user || usuario.email == Doctor.email) {
            controlExiste = true;
        }
    });

    // Cuando este false es decir que no existe se guarde en DB y de lo contrario se muestra un alerta
    if (controlExiste == false) {
    // Envio POST al backend
    axios.post('https://dblinkmed.herokuapp.com/crearUsuario', {
        "tipo": Doctor.tipo,
        "nombre": Doctor.nombre,
        "apellido": Doctor.apellido, 
        "user": Doctor.user,
        "password": Doctor.password,
        "telefono": Doctor.telefono,
        "email": Doctor.email,
        "direccion": Doctor.direccion,
        "especialidades": Doctor.especialidades,
        "horaIncial": Doctor.horaIncial,
        "horaFinal": Doctor.horaFinal
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }else{
        document.getElementById('error').style.display = 'block';
        setTimeout(function() {
            document.getElementById('error').style.display = 'none';
        },5000);
    }
}

export default FormDoctor