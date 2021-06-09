import React from 'react';
import Wave from './Wave';
import Header from './Header';

class Mision extends React.Component {

render() {
  return (
      <div>
          <Header></Header>
          {/* ======= Hero Section ======= */}
          <section id="hero">
            <div className="container">
                <div className="row">
                <div className="section-title" data-aos="fade-up">
                        <h2>Propósito</h2>
                        <p style={{ "color": "white" }} id="titulo"></p>
                    </div>     
                    <div className="row">
                      <div className="col-md-3" data-aos="zoom-out" data-aos-delay={200} id="imagen" >
                          <img src="assets/img/conected.svg" className="col-md-3" alt="" className="img-fluid"  aling = "left" width="250" height="250"/>                      
                      </div>   
                      <div className="col-md-8 ">
                        <div className="card cardHero">
                            <div className="card-body">
                                <h5 className="card-title md-3 icoFont"><b>LinkMed, plataforma de salud online</b></h5>
                                <p className="card-text" class="text-justify wow fadeInUp" >Ante las nuevas dificultades acontecidas a partir de la actual pandemia, visionamos las necesidades que la comunidad médica requeriría para una mejor conexión con sus pacientes, y viceversa. Hay muchas personas inquietas no solo por el virus de Covid-19, sino por otras enfermedades y dolencias que no han podido consultar presencialmente por el colapso de muchos centros de salud. Hoy podemos asegurar que LinkMed conecta a usuarios distribuidos en países de habla hispana. Las necesidades de los profesionales pertenecientes a nuestra comunidad son el motor de avance que permite a este foro seguir sumando ideas y proyectos para optimizar el servicio ofrecido a quienes cuidan de nuestra salud, así estemos en casa. </p>
                            </div>
                        </div>
                      </div>                        
                    </div>                          
                    <p></p>
                    <p></p>   
                    <p></p> 

                    <div className="row">                        
                      <div className="col-md-8 ">
                        <div className="card cardHero">
                            <div className="card-body">
                                <h5 className="card-title md-3 icoFont"><b>Nuestra misión</b></h5>
                                <p className="card-text" class="text-justify wow fadeInUp" >LinkMed es un portal/foro para conectar a personas con la comunidad médica, desarrollado así para ofrecer la más variada información del ámbito medicinal y de la salud. Nuestra filosofía se basa en foros donde profesionales pueden interactuar respondiendo a las preguntas del paciente en cuestión. Desde médicos generales, hasta especializados. De forma totalmente gratuita, accesible para todos en estos duros momentos. Además, los doctores de nuestra comunidad también tienen la opción de suscribirse para una experiencia más amplia, y no solo participar en el foro, sino que podrá interactuar con pacientes que quieran concretar una cita médica para casos más personalizados. </p>
                            </div>
                        </div>
                      </div>
                      <div className="col-md-4" data-aos="zoom-out" data-aos-delay={200} id="imagen" >
                        <img src="assets/img/colaborar.svg" className="col-md-3" alt="" className="img-fluid" aling ="right" width="500" height="500"/>                      
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

