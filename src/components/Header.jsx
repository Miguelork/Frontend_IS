import React from 'react';

const Header = () => {
    return (
      <div>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top d-flex align-items-center header-transparent">
        <div className="container d-flex align-items-center">
          <div className="logo mr-auto">
            <h1 className="text-light"><a href="index.html"><span>Bootslander</span></a></h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          </div>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active"><a href="index.html">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li className="drop-down"><a href>Drop Down</a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="drop-down"><a href="#">Drop Down 2</a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                  <li><a href="#">Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>{/* .nav-menu */}
        </div>
      </header>{/* End Header */}
      </div>
    )
}

export default Header
