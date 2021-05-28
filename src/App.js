import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import Perfil from './components/Perfil';
import RecuperarContrasena from './components/RecuperarContrasena';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import CatalogoDoctores from './components/CatalogoDoctores';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/perfil">
            <Perfil />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/recuperarcontrasena">
            <RecuperarContrasena />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/catalogo">
            <CatalogoDoctores />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
