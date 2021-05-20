import { render } from '@testing-library/react';
import React from 'react'
import './css/Register.css';

class Register extends React.Component {


    handleSubmit(event) {
        alert("Submit presionado");
    }

    render(){
        return (
            <div class="container register-form">
                <h1>Registro</h1>
            <div class="form">
                <div class="form-content">
                    <form onSubmit={this.handleSubmit}>
                        <div class="row justify-content-center">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Nombre" value=""/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Numero de telefono" value=""/>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Correo Electronico" value=""/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Direccion" value=""/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Nombre de usuario" value=""/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Contraseña" value=""/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btnSubmit">Submit</button>
                    </form>
                </div>
            </div>
            </div>
        );
    }
    
        
    
}



export default Register
