import React from 'react'
import Header from './Header'

const Menu = () => {
    return (
        <div>
            <Header></Header>

       {/* ======= Hero Section ======= */}
       <section id="hero">
       <section id="features" className="features" style={{"padding":"1rem"}}>
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                <h2>Menu</h2>
                <p style={{"color":"white"}}>Selecciona donde ir</p>
                </div>
                <div className="row" data-aos="fade-left">
                <div className="col-lg-3 col-md-4">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={50}>
                    <i className="ri-store-line" style={{"color":"#ffbb2c"}} />
                    <h3><a href>Foro sobre dudas medicas</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
                    <i className="ri-bar-chart-box-line" style={{"color":"#5578ff"}} />
                    <h3><a href>Ver catalogo de doctores</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={150}>
                    <i className="ri-calendar-todo-line" style={{"color":"#e80368"}} />
                    <h3><a href>Ver mi perfil de usuario</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
                    <i className="ri-paint-brush-line" style={{"color":"#e361ff"}} />
                    <h3><a href>Actualizar datos personales </a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={250}>
                    <i className="ri-database-2-line" style={{"color":"#47aeff"}} />
                    <h3><a href>Nemo Enim</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
                    <i className="ri-gradienter-line" style={{"color":"#ffa76e"}} />
                    <h3><a href>Eiusmod Tempor</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={350}>
                    <i className="ri-file-list-3-line" style={{"color":"#11dbcf"}} />
                    <h3><a href>Midela Teren</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={400}>
                    <i className="ri-price-tag-2-line" style={{"color":"#4233ff"}} />
                    <h3><a href>Pira Neve</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={450}>
                    <i className="ri-anchor-line" style={{"color":"#b2904f"}} />
                    <h3><a href>Dirada Pack</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={500}>
                    <i className="ri-disc-line" style={{"color":"#b20969"}} />
                    <h3><a href>Moton Ideal</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={550}>
                    <i className="ri-base-station-line" style={{"color":"#ff5828"}} />
                    <h3><a href>Verdo Park</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={600}>
                    <i className="ri-fingerprint-line" style={{"color":"#29cc61"}} />
                    <h3><a href>Flavor Nivelanda</a></h3>
                    </div>
                </div>
                </div>
            </div>
            </section>{/* End Features Section */}
          <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
            <defs>
              <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
              </path></defs>
            <g className="wave1">
              <use xlinkHref="#wave-path" x={50} y={3} fill="rgba(255,255,255, .1)">
              </use></g>
            <g className="wave2">
              <use xlinkHref="#wave-path" x={50} y={0} fill="rgba(255,255,255, .2)">
              </use></g>
            <g className="wave3">
              <use xlinkHref="#wave-path" x={50} y={9} fill="#fff">
              </use></g>
          </svg>
        </section>{/* End Hero */}

        </div>
    )
}

export default Menu
