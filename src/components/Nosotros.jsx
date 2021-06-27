import React from 'react';
import Wave from './Wave';
import Header from './Header';

class Nosotros extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <section id="hero">
          <div className="container">
            <div className="col-md-12 text-center">
              <div data-aos="zoom-out">
                <h1 className="mt-3 mb-3" style={{ "color": "white" }}> ¿Quienes Somos?</h1>
              </div>
            </div>
            <div className="row mb-3" id="bloqcontact">
              <div className="col-md-1"></div>
              <div className="col-md-2" id="headI" data-aos="zoom-out" role="button" data-toggle="collapse" data-target="#collapseI" aria-expanded="true" aria-controls="collapseI">
                <img src="assets/img/perfilboy.svg" className="img-fluid" alt="" />
                <h6 className="mt-3" style={{ "color": "white" }}>Manuel Rodriguez</h6>
              </div>
              <div id="collapseI" className="collapse bg-green brad mt-3 mb-3" style={{ "padding-top": "1rem" }} aria-labelledby="headI" data-parent="#bloqcontact">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-2 pt-5">
                    <img src="assets/img/perfilboy.svg" className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-9">
                     <h1 style={{ "color": "white" }} >Manuel Rodriguez</h1>
                    <p style={{ "color": "white" }} class="lead">Manuel Rodríguez, un estudiante de ingeniería de sistemas en la Universidad Metropolitana, con conocimientos acerca de temas como el hardware o el software. A lo largo de mi trayectoria he utilizado diversos lenguajes de programación tales como: C++, Java, Visual, PHP, Python, HTML, Jython y JavaScript. Además de que he tenido la oportunidad de trabajar con múltiples herramientas como Angular, React.js, Next.js, Laravel, Git, MongoDB y MySQL.</p>
                    <p class="lead">
                      <a class="btn-get-started btn-lg" href="https://wa.me/584129076968/" role="button">Contactame</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2" id="headII" data-aos="zoom-out" role="button" data-toggle="collapse" data-target="#collapseII" aria-expanded="true" aria-controls="collapseII">
                <img src="assets/img/perfilgirl.svg" className="img-fluid" alt="" />
                <h6 className="mt-3" style={{ "color": "white" }}>Gabriela Banezca</h6>
              </div>
              <div id="collapseII" className="collapse bg-green brad mt-3 mb-3" style={{ "padding-top": "1rem" }} aria-labelledby="headII" data-parent="#bloqcontact">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-2 pt-5">
                    <img src="assets/img/perfilgirl.svg" className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-9">
                  <h1 style={{ "color": "white" }} >Gabriela Banezca</h1>
                    <p style={{ "color": "white" }} class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p style={{ "color": "white" }} class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p class="lead">
                      <a class="btn-get-started btn-lg" href="https://wa.me/584129888614/" role="button">Contactame</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2" id="headIII" data-aos="zoom-out" role="button" data-toggle="collapse" data-target="#collapseIII" aria-expanded="true" aria-controls="collapseIII">
                <img src="assets/img/perfilboy.svg" className="img-fluid" alt="" />
                <h6 className="mt-3" style={{ "color": "white" }}>Miguelangel Somana</h6>
              </div>
              <div id="collapseIII" className="collapse bg-green brad mt-3 mb-3" style={{ "padding-top": "1rem" }} aria-labelledby="headIII" data-parent="#bloqcontact">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-2 pt-5">
                    <img src="assets/img/perfilboy.svg" className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-9">
                  <h1 style={{ "color": "white" }} >Miguelangel Somana</h1>
                    <p style={{ "color": "white" }} class="lead">Mi nombre es Miguelangel Somana Parra, soy un estudiante de ingenieria de sistemas, muy bueno con el Frontend, pero con ganas de convertirse en fullstack, tengo 20 años, entre mis hobbies se encuentran
                        el senderismo, la lectura, y como la mayoria de mi generación la música y los videojuegos.</p>
                    <p style={{ "color": "white" }} class="lead">Mi objetivos a corto plazo es graduarme como Ing de Sistemas, y en el camino de lograrlo
                        espero obtener experiencia me gustaria profundizar las areas de Inteligencia Artificial y Desarrollo Web.</p>
                    <p class="lead">
                      <a class="btn-get-started btn-lg" href="https://wa.me/584129216461/" role="button">Contactame</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2" id="headVI" data-aos="zoom-out" role="button" data-toggle="collapse" data-target="#collapseVI" aria-expanded="true" aria-controls="collapseVI">
                <img src="assets/img/perfilgirl.svg" className="img-fluid" alt="" />
                <h6 className="mt-3" style={{ "color": "white" }}>Maria Soto</h6>
              </div>
              <div id="collapseVI" className="collapse bg-green brad mt-3 mb-3" style={{ "padding-top": "1rem" }} aria-labelledby="headVI" data-parent="#bloqcontact">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-2 pt-5">
                    <img src="assets/img/perfilgirl.svg" className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-9">
                  <h1 style={{ "color": "white" }} >Maria Soto</h1>
                    <p style={{ "color": "white" }} class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p style={{ "color": "white" }} class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p class="lead">
                      <a class="btn-get-started btn-lg" href="https://wa.me/584142871576/" role="button">Contactame</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2" id="headV" data-aos="zoom-out" role="button" data-toggle="collapse" data-target="#collapseV" aria-expanded="true" aria-controls="collapseV">
                <img src="assets/img/perfilboy.svg" className="img-fluid" alt="" />
                <h6 className="mt-3" style={{ "color": "white" }}>Pedro Barrios</h6>
              </div>
              <div id="collapseV" className="collapse bg-green brad mt-3 mb-3" style={{ "padding-top": "1rem" }} aria-labelledby="headV" data-parent="#bloqcontact">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-2 pt-5">
                    <img src="assets/img/perfilboy.svg" className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-9">
                  <h1 style={{ "color": "white" }} >Pedro Barrios</h1>
                    <p style={{ "color": "white" }} class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p style={{ "color": "white" }} class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p class="lead">
                      <a class="btn-get-started btn-lg" href="https://wa.me/584241612170/" role="button">Contactame</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <Wave />

        </section>

      </div>
    )
  }
}
export default Nosotros

