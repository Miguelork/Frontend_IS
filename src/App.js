import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import Perfil from './components/Perfil';
import Mision from './components/Mision';
import Nosotros from './components/Nosotros';
import RecuperarContrasena from './components/RecuperarContrasena';
import CatalogoDoctores from './components/CatalogoDoctores';
import Foro from './components/Foro';
import AdminAprobar from './components/AdminAprobar';
import Preguntar from './components/Preguntar';
import RespuestaForo from "./components/RespuestaForo";
import Doctor from "./components/Doctor";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <Switch>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/mision">
            <Mision />
          </Route>
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
          <Route path="/preguntar">
            <Preguntar />
          </Route>
          <Route path="/catalogo">
            <CatalogoDoctores />
          </Route>
          <Route path="/foro">
            <Foro />
          </Route>
          <Route path="/admin_aprobar">
            <AdminAprobar />
          </Route>
          <Route path="/doctor=:user">
            <Doctor />
          </Route>
          <Route path="/:id">
            <RespuestaForo />
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
