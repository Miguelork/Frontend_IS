import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import InicioCard from './InicioCard';
import Wave from './Wave';


class Inicio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      caracter: [{
        "id": 1,
        "title": "Información Certificada",
        "ico": "bi bi-shield-fill-check",
        "fr": "evenodd",
        "d1": "M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z",
        "d2": "",
        "description": "Todos los perfiles de los especialistas en la salud que veras en este medio fueron rigurosamente verificados, y validados por nuestro equipo de trabajo, el cual sirve de garantia de calidad."

      }, {
        "id": 2,
        "title": "Velocidad de Respuesta",
        "ico":"bi bi-speedometer",
        "fr":"evenodd",
        "d1":"M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z",
        "d2":"M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z",
        "description": "Contactar con especialistas de la salud nunca habia sido tan fácil, la comunicación por este medio garantiza una pronta respuesta en contraste a lo tardado que puede ser agendar una cita."
      }, {
        "id": 3,
        "title": "Contacta Directamente",
        "ico":"bi bi-chat-dots-fill",
        "fr":"",
        "d1":"M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
        "d2":"",
        "description": "La simplicación en la comunicación que ofrecemos garantiza tanto a medicos como pacientes el mantener un contacto fluido via chat para concretar citas o confirmar diagnósticos."
      }, {
        "id": 4,
        "title": "Servicio Humanitario",
        "ico":"bi bi-suit-heart-fill",
        "fr":"",
        "d1":"M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z",
        "d2":"",
        "description": "Entendemos perfectamente la crisis que se esta viviendo en el mundo a partir de la pandemia, por lo que esta es una plataforma cuyo proposito es ayudar a las personas."
      }]
    }
  }
  render() {
    return (
      <div>
        <Header />
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div data-aos="zoom-out">
                  <h1>Bienvenidos a <span>LinkMed</span></h1>
                  <h2>Conocimiento especializado, al alcance de tu mano</h2>
                  <div className="text-center text-lg-left">
                    <Link to="/login">
                      <a className="mr-2 btn-get-started scrollto">Comienza Ahora</a>
                    </Link>
                    <a href="#about" className="ml-2 btn-get-started scrollto"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                    </svg> Ver Video</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay={300}>
                <img src="assets/img/doc1.svg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="mt-5 row">
              <div className="col-12">
                <h1 className="md-5">¿Por que elegir <span>LinkMed</span>?</h1>
              </div>
            </div>
          </div>
          <InicioCard
            card={this.state.caracter}
          />
          <Wave />

        </section>
      </div>
    )
  }
}

export default Inicio
