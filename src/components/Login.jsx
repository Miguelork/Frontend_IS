import React from 'react'
import Header from './Header';


class Login extends React.Component {

    handleSubmit(event) {
        alert("Submit presionado");
    }

    render(){
        return (
            <div class="container login-form">
                <h1>Login</h1>
            <div class="form">
                <form onSubmit={this.handleSubmit}>
                    <div class="form-content">
                        <div class="row justify-content-center">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Nombre de usuario" value=""/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Contraseña" value=""/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btnSubmit">Submit</button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
    
}

export default Login

