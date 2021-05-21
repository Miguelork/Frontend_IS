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
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top d-flex align-items-center header-transparent">
          <div className="container d-flex align-items-center">
            <div className="logo mr-auto">
                <h1 className="text-light"><a href="index.html"><span>LinkMed</span></a></h1>
                {/* Uncomment below if you prefer to use an image logo */}
                {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            </div>
            <nav className="nav-menu d-lg-block">
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
            {/* .nav-menu */}
          </div>
      </header>
      {/* End Header */}
    </div>
    )
}

export default Header
