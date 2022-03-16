import React, { Component } from "react";
import './Home.css'
import TypeWriterEffect from 'react-typewriter-effect';
class Home extends React.Component {



  render() {
    return (

      <div>
  
        <section id="hero" className="d-flex flex-column justify-content-center">
     
  <div className="container" data-aos="zoom-in" data-aos-delay="100">
  {/* <marquee behavior="scroll" direction="up" scrollamount="1">Slow Scrolling</marquee> */}

            <h1> <span style={{ color: '#000'}}>Name Of</span> Portfolio</h1>


            <TypeWriterEffect
              textStyle={{
                fontFamily: 'Red Hat Display',
                margin: '15px 0px 0 53px',
                color: '#fabf15',
                letterSpacing: '1px',
                fontWeight: 700,
                fontSize: '3em',

              }}
              startDelay={2000}
              cursorColor='#ff9900'
              multiText={[
                'Hey there, This is a ...',
                'it consist of two ...',
                'Single text display ...',
                'Fonts can be ...',
                'The type speed can  ...',

              ]}
              multiTextDelay={1000}
              typeSpeed={30}
            />

            
            <div class="content">
              <div class="container">
                <div class="row">
                  <div class="col-sm-3 col-lg-4  d-flex mt-4" style={{ paddingLeft: "34px", height: "40px" }}>
                    <button type="button" class="btn btn-lg   btn-sm home-bn" style={{ width: "150px", fontSize: "18px", fontWeight: "bolder", background: '#fabf15', color: '#fff' ,
                     boxShadow: '0.5px 1px 1px hsl(220deg 60% 50% / 0.7)' }}><i class="bx bx-user"></i> Enquirey</button>
                    <button type="button" class="btn btn-lg   btn-sm" style={{ width: "150px", marginLeft: "5px", fontSize: "18px", fontWeight: "bolder", background: '#fabf15', color: '#fff',  boxShadow: '0.5px 1px 1px hsl(220deg 60% 50% / 0.7)' }}><i class="bx bx-user"></i> Download</button>
                  </div>
                </div>
              </div>
            </div>

            <marquee className="mt-2" direction="left" width="40%"><img src="assets/img//offer.png" style={{width:"70px"}}/>
             <span style={{color: '#ff0018',fontSize: '20px', fontWeight: '500'}}>This is sample scrolling text.</span>
            </marquee>


            <div className="social-links" style={{ paddingLeft: "24px" }}>
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
            
           
          </div>
        </section>

        

        <div id="folio" className="custom-folio custom-bg-dark custom-py-8 ">
          <div className="container text-center">
            <div className="col-lg-12">
              <div className="row mt-5" >
                <div class="col-sm-2 col-6" >
                  <span> <i className="bx bx-vial"></i> <i className="bx bx-info-circle" page="folio_avoriaz"></i> </span>
                </div>
                <div class="col-sm-2 col-6" >
                  <span> <i className="bx bx-book"></i> <i className="bx bx-info-circle" page="folio_utils"></i> </span>
                </div>
                <div class="col-sm-2 col-6" >
                  <span> <i className="bx bx-book"></i> <i className="bx bx-info-circle" page="folio_book"></i> </span>
                </div>
                <div class="col-sm-2 col-6" >
                  <span> <i className="bx bx-envelope"></i> <i className="bx bx-info-circle" page="folio_blog"></i> </span>
                </div>
                <div class="col-sm-2 col-6" >
                  <span> <i className="bx bx-rss"></i> <i className="bx bx-info-circle" page="folio_blog"></i> </span>
                </div>
                <div class="col-sm-2 col-6" >
                  <span> <i className="bx bx-rss"></i> <i className="bx bx-info-circle" page="folio_blog"></i> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="d-flex align-items-start">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button class="nav-link active mt-2" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" style={{ background: '#fabf15', color: '#fff' }}>HTML,CSS,JS</button>
              <button class="nav-link mt-2" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" >BOOTSTARP</button>
              <button class="nav-link mt-2" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">REACT JS</button>
              <button class="nav-link mt-2" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">WORDPRESS</button>
            </div>

            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <div id="folio" className="custom-folio custom-bg-dark custom-py-8 mt-2 ">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales enim et urna lacinia,
                    in egestas sapien. Cras a nunc ultrices, tincidunt enim non, imperdiet augue. Aenean vehicula,

                  </p>
                </div>
              </div>
              <div class="tab-pane fade mt-2" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales enim et urna lacinia,
                  in egestas sapien. Cras a nunc ultrices, tincidunt enim non, imperdiet augue. Aenean vehicula,

                </p>
              </div>
              <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales enim et urna lacinia,
                  in egestas sapien. Cras a nunc ultrices, tincidunt enim non, imperdiet augue. Aenean vehicula,

                </p>
              </div>
              <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales enim et urna lacinia,
                  in egestas sapien. Cras a nunc ultrices, tincidunt enim non, imperdiet augue. Aenean vehicula,

                </p>
              </div>
            </div>
          </div>
        </div>






      </div>

    );
  }
}

export default Home;
