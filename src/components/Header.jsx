import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = () => {
    return (
    <div>
      <header id="header" data-testid="header" className="fixed-top d-flex align-items-center header-transparent">
          <div className="container d-flex align-items-center">
            <div className="logo mr-auto">
                <h1 className="text-light"><a href="/"><span><img src="assets/img/logoLM.png" className="img-fluid" alt="" /> LinkMed</span></a></h1>
            </div>
            <nav className="nav-menu lign-items-right d-lg-block">
                <ul>
                  <Link to="/menu">
                  <h1 style={{'color':'white'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                  </h1>
                  </Link>
                </ul>
            </nav>
          </div>
      </header>
    </div>
    )
}

export default Header
