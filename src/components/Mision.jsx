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

                  <div className="section-title" data-aos="fade-up">
                      <h2>Propósito</h2>
                      <p style={{ "color": "white" }} id="titulo"></p>
                  </div>
                  

                  
                  <div data-aos="zoom-out" data-aos-delay={300} id="imagen">
                      <img src="assets/img/team/Picture2.png" className="col-md-5" alt="" className="img-fluid" />
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

