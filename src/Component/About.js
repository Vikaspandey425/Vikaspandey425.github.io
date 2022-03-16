import React, { Component } from "react";
// // import { Link } from "react-router-dom";
// import { Document } from 'react-pdf'
import './About.css'
class About extends React.Component {
  render() {
    return (
      
          <div>
           

    {/* <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          <h3></h3>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Creative Independent Software Engineer Based In INDIA</h3>
            <p className="fst-italic">
              I'am UI + REact JS Developer , and I'm very passionate and dedicated to my work.
              With 2+ years experience as a professional 
              </p>
             <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                </ul>
              </div>
              <div className="col-lg-6 ">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>

      </div>
    </section>
     */}

{/* <section id="about" className="p-100 pb-2 bg-one-dark"> */}

<section id="about" className="about p-100 pb-2 bg-one-dark">
      <div className="container" data-aos="fade-up">
      <div className="section-title">
          <h2>Abo<span style={{color:'#fabf15'}}>ut</span> </h2>
          <h3></h3>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
         */}
        </div>

      <div className="row d-flex align-items-end">
        <div className="col-md-6 text-center">
          <img src="http://wpequal.com/onuc/assets/img/p-2.png" alt="Signature" className="img-fluid"/>
        </div>
        <div className="col-md-6">
          {/* <p className="color-base">ABOUT US!</p> */}
          <h2 className="text-dark mb-4">My Real Life is Up to You? I am a <span className="color-base">Front-end Developer</span>
          </h2>
          <p>I’m a Front-end Developer and graphic designer living in India. I spend my days with my hands in many different areas of UI development from back end programming to front end engineering.
          </p>
          <div className="row">
            <div className="col-md-6 about-bullet">
              <ul className="bullet-check">
                <li>Different of web development</li>
                <li>Gun Violence Prevention</li>
                <li>Eiusmod tempor incidid labore</li>
                <li>Graphic designer living</li>
                
             
              </ul>
            </div>
            <div className="col-md-6 about-bullet">
              <ul className="bullet-check">
                <li>Graphic designer living</li>
                <li>Jiusmod tempor incididunt</li>
                <li>Graphic designer living</li>
                <li>Jiusmod tempor incididunt</li>
               
              </ul>
            </div>
            
          </div>

          <div className="wrap-button mt-20">
            <a href="assets/img/vikas.pdf" className="btn btn-medium btn-inline btn-fill mr-4">Resume Download <i class="fa fa-download"></i></a>
          </div>
         
          <br/>
        </div>
        <hr/>
      </div>

      {/* <div className="about-info-wrap p-100">
        <div className="about-info p-5">
          <div className="row">
            <div className="col-md-3 col-6">
              <h6 className="text-dark text-uppercase mb-4">Contact Now</h6>
              <p><i className="fas fa-envelope-open-text mr-2 color-base"></i>freebootstrapui@gmail.com</p>
              <p><i className="fas fa-phone-alt mr-2 color-base"></i>+012 345 678 910</p>
            </div>
            <div className="col-md-3 col-6">
              <h6 className="text-dark text-uppercase mb-4">Address</h6>
              <p><i className="fas fa-map-marker-alt mr-2 color-base"></i>145 heera nager, jaipur ,India

              </p>
            </div>
            <div className="col-md-3 col-6">
              <h6 className="text-dark text-uppercase mb-4">Address</h6>
              <p><i className="fas fa-map-marker-alt mr-2 color-base"></i>145 heera nager, jaipur ,India

              </p>
            </div>
            <div className="col-md-3 col-6">
              <h6 className="text-dark text-uppercase mb-4">Social Media</h6>
              <p><i className="far fa-comment-alt mr-2 color-base"></i>Also find us social media below</p>

              <div className="inline-social">
                <ul >
                  <li><a href="#"><i className="fab fa-facebook-f" ></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </section>

  
  



    <section className="clients " style={{padding: "0px 0"}}>
    <div className="container" data-aos="zoom-in-right">
        <div className="row">
            <div className="col-lg-6 mt-5" >
                
                 <img src="assets/img/tech/about.png" style={{width: "450px", paddingLeft:"0px", height:"290px"}}/>
        
            </div>
            <div className="col-lg-6 mt-5">
                {/* <h3 className="clients-heading">
                    HAPPY CLIENTS
                </h3> */}
                <div className="row all-clients">
                 <div className="col-sm-4 col-6" >
                        <figure className="client-logo box-card" >
                            <a href="#">
                                <img src="assets/img/tech/html.png" alt="" style={{width: "70px", height: "70px"}}/>
                            </a>
                            {/* <h6 style={{fontWeight: "bolder",padding: "10px 10px 10px 10px",color: "#0d6efd", fontSize:'10px'}}>HTML</h6>
                      */}
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6">
                        <figure className="client-logo box-card">
                            <a href="#">
                                <img src="assets/img/tech/css.png" alt="" style={{width: "70px", height: "70px"}}/>
                            </a>
                            <h6 style={{fontWeight: "bolder",padding: "10px 10px 10px 10px",color: "#0d6efd", fontSize:'10px'}}>CSS</h6>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6">
                        <figure className="client-logo box-card">
                            <a href="#">
                                <img src="assets/img/tech/bootstrap.png" alt="" style={{width: "70px", height: "70px"}}/>
                            </a>
                            <h6 style={{fontWeight: "bolder",padding: "10px 10px 10px 10px",color: "#0d6efd", fontSize:'10px'}}>Bootstrap</h6>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6 ">
                        <figure className="client-logo box-card">
                            <a href="#">
                                <img src="assets/img/tech/javascript.png" alt="" style={{width: "70px", height: "70px"}}/>
                            </a>
                            <h6 style={{fontWeight: "bolder",padding: "10px 10px 10px 10px",color: "#0d6efd", fontSize:'10px'}}>Javascript</h6>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6">
                        <figure className="client-logo box-card">
                            <a href="#">
                                <img src="assets/img/tech/react.png" alt="" style={{width: "70px", height: "70px"}}/>
                            </a>
                            <h6 style={{fontWeight: "bolder",padding: "10px 10px 10px 10px",color: "#0d6efd", fontSize: '10px'}}>React Js</h6>
                        </figure>
                    </div>
                    <div className="col-sm-4 col-6 ">
                        <figure className="client-logo box-card">
                            <a href="#">
                                <img src="assets/img/tech/wordpress.png" alt="" style={{width: "70px", height: "70px"}}/>
                            </a>
                            <h6 style={{fontWeight: "bolder",padding: "10px 10px 10px 10px",color: "#0d6efd", fontSize:'10px'}}>Wordpress</h6>
                        </figure>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
</section>


   </div>
      
    );
  }
}

export default About;
