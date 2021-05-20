import Register from './components/Register';
import Login from './components/Login';
import Inicio from './components/Inicio';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
<Router>
    <div className="App">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
