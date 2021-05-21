import React from 'react';
import Header from './Header';
import Wave from './Wave';

const Inicio = () => {
    return (
        <div>
          <Header/>
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div data-aos="zoom-out">
                  <h1>Bienvenidos a <span>LinkMed</span></h1>
                  <h2>Conocimiento especializado, al alcance de tu mano</h2>
                  <div className="text-center text-lg-left">
                    <a href="#about" className="mr-2 btn-get-started scrollto">Comienza Ahora</a>
                    <a href="#about" className="ml-2 btn-get-started scrollto">Ver Video</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay={300}>
                <img src="assets/img/doc1.svg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="mt-5 row">
                <div className="col-3">
                  <div class="card">
                    <div class="card-body">
                        <h5 class="card-title icoFont"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        </svg></h5>
                        <h5 class="card-title mt-2 icoFont"><b>Información Certificada</b></h5>
                        <p class="card-text">Todos los perfiles de los especialistas en la salud que veras en este medio fueron rigurosamente verificados, y validados por nuestro equipo de trabajo, el cual sirve de garantia de calidad de los mismos</p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div class="card">
                    <div class="card-body">
                        <h5 class="card-title icoFont"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
                        <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                        <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
                        </svg></h5>
                        <h5 class="card-title mt-2 icoFont"><b>Rápida Respuesta</b></h5>
                        <p class="card-text">Contactar con especialistas de la salud nunca habia sido tan fácil, la comunicación por este medio garantiza una pronta respuesta en contraste a lo tardado que puede ser agendar una cita.</p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div class="card">
                    <div class="card-body">
                        <h5 class="card-title icoFont"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                        <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                        <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg></h5>
                        <h5 class="card-title mt-2 icoFont"><b>Contacto Directo</b></h5>
                        <p class="card-text">La simplicación en la comunicación que ofrecemos garantiza tanto a medicos como pacientes el mantener un contacto fluido via chat para concretar citas o confirmar diagnósticos.</p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div class="card">
                    <div class="card-body">
                        <h5 class="card-title icoFont"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg></h5>
                        <h5 class="card-title mt-2 icoFont"><b>Servicio Humanitario</b></h5>
                        <p class="card-text">Entendemos perfectamente la crisis que se esta viviendo en el mundo a partir de la pandemia, por lo que esta es una plataforma principalmente humanitaria, para garantizar ayudar a la mayoria de las personas.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
           <Wave/>
           
        </section>  
      </div>
    )
}

export default Inicio
