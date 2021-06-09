import React from 'react';
import Wave from './Wave';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Mision extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        {/* ======= Hero Section ======= */}
        <section id="hero">
          <div className="container">
            <div className="col-md-12 mb-5 text-center">
              <div data-aos="zoom-out">
                <h1 className="mt-3 mb-3" style={{ "color": "white" }}> Propósito</h1>
              </div>
            </div>
            <div className="row">
              <div className="row" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className="col-md-3 mt-4 mb-4" data-aos="zoom-out" data-aos-delay={100} id="imagen" >
                  <img src="assets/img/conected.svg" className="col-md-3" alt="" className="img-fluid" aling="left" width="250" height="250" />
                </div>
                <div className="col-md-1 mt-4 mb-4"></div>
                <div className="col-md-8 mt-4 mb-4 ">
                  <h5 style={{ "color": "white" }} className="card-title md-3 icoFont"><b>LinkMed, plataforma de salud online</b></h5>
                  <p style={{ "color": "white" }} className="card-text" class="text-justify wow fadeInUp" >Ante las nuevas dificultades acontecidas a partir de la actual pandemia, visionamos las necesidades que la comunidad médica requeriría para una mejor conexión con sus pacientes, y viceversa. Hay muchas personas inquietas no solo por el virus de Covid-19, sino por otras enfermedades y dolencias que no han podido consultar presencialmente por el colapso de muchos centros de salud. Hoy podemos asegurar que LinkMed conecta a usuarios distribuidos en países de habla hispana. Las necesidades de los profesionales pertenecientes a nuestra comunidad son el motor de avance que permite a este foro seguir sumando ideas y proyectos para optimizar el servicio ofrecido a quienes cuidan de nuestra salud, así estemos en casa. </p>
                </div>
              </div>
              <div className="row" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className="col-md-8 mt-4 mb-4">
                  <h5 style={{ "color": "white" }} className="card-title md-3 icoFont"><b>Nuestra misión</b></h5>
                  <p style={{ "color": "white" }} className="card-text" class="text-justify wow fadeInUp" >LinkMed es un portal/foro para conectar a personas con la comunidad médica, desarrollado así para ofrecer la más variada información del ámbito medicinal y de la salud. Nuestra filosofía se basa en foros donde profesionales pueden interactuar respondiendo a las preguntas del paciente en cuestión. Desde médicos generales, hasta especializados. De forma totalmente gratuita, accesible para todos en estos duros momentos. Además, los doctores de nuestra comunidad también tienen la opción de suscribirse para una experiencia más amplia, y no solo participar en el foro, sino que podrá interactuar con pacientes que quieran concretar una cita médica para casos más personalizados. </p>
                </div>
                <div className="col-md-1 mt-4 mb-4"></div>
                <div className="col-md-3 mt-4 mb-4" data-aos="zoom-out" data-aos-delay={100} id="imagen" >
                  <img src="assets/img/colaborar.svg" className="col-md-3" alt="" className="img-fluid" aling="right" width="500" height="500" />
                </div>
              </div>
              <div className="row" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className="col-md-3 mt-4 mb-4" data-aos="zoom-out" data-aos-delay={100} id="imagen" >
                  <img src="assets/img/question.svg" className="col-md-3" alt="" className="img-fluid" aling="left" width="250" height="250" />
                </div>
                <div className="col-md-1 mt-4 mb-4"></div>
                <div className="col-md-8 mt-4 mb-4 ">
                  <h5 style={{ "color": "white" }} className="card-title md-3 icoFont"><b>¿Como surgio LinkMed?</b></h5>
                  <p style={{ "color": "white" }} className="card-text" class="text-justify wow fadeInUp" >No es exageración decir que la inesperada llegada del coronavirus cambio de forma drástica nuestra cotidianidad, más aun considerando que el PNDU (2021) expresa que el “COVID-19 es la crisis de salud global que define nuestro tiempo y el mayor desafío que hemos enfrentado desde la Segunda Guerra Mundial”. Por esto esperamos lograr disminuir la incertidumbre de las personas, así como combatir la desinformación la cual contribuye enormemente al miedo que estas tienen con respecto al virus, de igual forma, lograr colaborar a la sociedad por medio de esta propuesta. </p>
                </div>
              </div>
              <div className="row" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className="col-md-8 mt-4 mb-4">
                  <h5 style={{ "color": "white" }} className="card-title md-3 icoFont"><b>Equipo de Trabajo</b></h5>
                  <p style={{ "color": "white" }} className="card-text" class="text-justify wow fadeInUp" > Nuestro equipo consta de un destacado equipo de desarrolladores los cuales se encargan de las funciones de desarrollo web, asi como las funciones administrativas del website, para mas información acerca del equipo de desarrollo/administración visite la seccion de <Link to='/nosotros' style={{ "color": "#1acc8d" }}>¿Quienes Somos?</Link>. En este sentido, nuestro equipo no solo esta compuesto por dicho equipo, sino que es significativamente compueso por todo el panel de medicos que albergamos en nuestro directorio, para mas información visite nuestro <Link to='/catalogo' style={{ "color": "#1acc8d" }}>Catalogo</Link>, los cuales son certificados y aceptados tras una minusiosa revisión por parte del equipo administrativo, garantizando asi la calidad de nuestro equipo</p>
                </div>
                <div className="col-md-1 mt-4 mb-4"></div>
                <div className="col-md-3 mt-4 mb-4" data-aos="zoom-out" data-aos-delay={100} id="imagen" >
                  <img src="assets/img/colaborar.svg" className="col-md-3" alt="" className="img-fluid" aling="right" width="500" height="500" />
                </div>
              </div>
            </div>
          </div>
          <Wave />
        </section>
        {/* End Hero */}
      </div>
    );
  }
}
export default Mision

