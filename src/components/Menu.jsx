import React from "react";
import Header from "./Header";
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const cookies = new Cookies();

class Menu extends React.Component {

  
  esAdmin = () => {
    if (cookies.get("usuario")) {
      if(cookies.get("usuario").tipo === 'Admin'){
        return true
      }
    } 
    return false
  }

  cerrarSesion = () => {
    cookies.remove("usuario", { path: "/" });
    window.location.href = "/";
  };

  componentDidMount() {
    if (!cookies.get("usuario")) {
      window.location.href = "/login";
    } 
  }

  
  render() {
    console.log(cookies.get('usuario'));
    return (
      <div>
        <Header></Header>

        {/* ======= Hero Section ======= */}
        <section id='hero'>
          <section
            id='features'
            className='features'
            style={{ padding: "1rem" }}
          >
            <div className='container'>
              <div className='section-title' data-aos='fade-up'>
                <h2>Menu</h2>
                <p style={{ color: "white" }}>Selecciona donde ir</p>
              </div>
              <div className='row' data-aos='fade-left'>
                <div className='col-md-6 mt-4'>
                  <div
                    className='icon-box'
                    data-aos='zoom-in'
                    data-aos-delay={50}
                  >
                    <i className='icofont-attachment' style={{ color: "#ffbb2c" }} />
                    <Link to='/preguntar'>
                    <h3>
                      <a href> Realizar una pregunta en el Foro</a>
                    </h3>
                    </Link>
                  </div>
                </div>
                <div className='col-md-6 mt-4'>
                  <div
                    className='icon-box'
                    data-aos='zoom-in'
                    data-aos-delay={100}
                  >
                    <i
                      className='icofont-comment'
                      style={{ color: "#5578ff" }}
                    />
                    <h3>
                      <a href> Ver Mensajes</a>
                    </h3>
                  </div>
                </div>
                <div className='col-md-6 mt-4'>
                  <div
                    className='icon-box'
                    data-aos='zoom-in'
                    data-aos-delay={150}
                  >
                    <i
                      className='icofont-search-document'
                      style={{ color: "#e80368" }}
                    />
                    <Link to='/foro'>
                    <h3>
                      <a href> Explorar Foros</a>
                    </h3>
                    </Link>
                  </div>
                </div>
                <div className='col-md-6 mt-4'>
                  <div
                    className='icon-box'
                    data-aos='zoom-in'
                    data-aos-delay={200}
                  >
                    <i
                      className='icofont-doctor-alt'
                      style={{ color: "#e361ff" }}
                    />
                    <Link to='/catalogo'>
                    <h3>
                      <a href> Explorar Doctores</a>
                    </h3>
                    </Link>
                  </div>
                </div>
                <div className='col-md-6 mt-4'>
                  <div
                    className='icon-box'
                    data-aos='zoom-in'
                    data-aos-delay={250}
                  >
                    <i
                      className='icofont-id'
                      style={{ color: "#47aeff" }}
                    />
                    {/* <h3><a href> Ver Perfil</a></h3>*/}
                    <Link to='/perfil'>
                      <h3>
                        <a href> Ver Perfil</a>
                      </h3>
                    </Link>
                  </div>
                </div>
                <div className='col-md-6 mt-4'>
                  <div
                    className='icon-box'
                    data-aos='zoom-in'
                    data-aos-delay={300}
                  >
                    <i
                      className='icofont-logout'
                      style={{ color: "#ffa76e" }}
                    />
                    <h3>
                      <a href='#' onClick={this.cerrarSesion}>
                        {" "}
                        Cerrar Sesión
                      </a>
                    </h3>
                  </div>
                </div>
                <div className='col-md-6 mt-4'>
                  <div
                    className='icon-box'
                    data-aos='zoom-in'
                    data-aos-delay={350}
                  >
                    <i
                      className='ri-file-list-3-line'
                      style={{ color: "#11dbcf" }}
                    />
                    <Link to='/mision'>
                      <h3>
                        <a href>Proposito de LinkMed</a>
                      </h3>
                    </Link>
                  </div>
                </div>
                <div className='col-md-6 mt-4'>
                  <div
                    className='icon-box'
                    data-aos='zoom-in'
                    data-aos-delay={400}
                  >
                    <i
                      className='ri-price-tag-2-line'
                      style={{ color: "#4233ff" }}
                    />
                    <h3>
                      <a href> ¿Quienes Somos?</a>
                    </h3>
                  </div>
                </div>
                {(this.esAdmin())
                  ? <div className='col-md-6 mt-4'>
                      <div
                        className='icon-box'
                        data-aos='zoom-in'
                        data-aos-delay={150}
                      >
                        <i
                          className='icofont-search-document'
                          style={{ color: "#e80368" }}
                        />
                        <Link to='/admin_aprobar'>
                        <h3>
                          <a href>Aprobar/Rechazar Doctores</a>
                        </h3>
                        </Link>
                      </div>
                    </div>
                  : <div></div>
                }
              </div>
            </div>
          </section>
          {/* End Features Section */}
          <svg
            className='hero-waves'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 24 150 28 '
            preserveAspectRatio='none'
          >
            <defs>
              <path
                id='wave-path'
                d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
              ></path>
            </defs>
            <g className='wave1'>
              <use
                xlinkHref='#wave-path'
                x={50}
                y={3}
                fill='rgba(255,255,255, .1)'
              ></use>
            </g>
            <g className='wave2'>
              <use
                xlinkHref='#wave-path'
                x={50}
                y={0}
                fill='rgba(255,255,255, .2)'
              ></use>
            </g>
            <g className='wave3'>
              <use xlinkHref='#wave-path' x={50} y={9} fill='#fff'></use>
            </g>
          </svg>
        </section>
        {/* End Hero */}
      </div>
    );
  }
}

export default Menu;