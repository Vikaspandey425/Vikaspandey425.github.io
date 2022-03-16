import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (

      <div>


        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mt-5">

                {/* <h3>Name</h3> */}
                <img src="assets/img/logo.png" style={{ width: "90px",height:"90px" }}></img>
                {/* <p>Et aut eum quis fuga eos sunt ipsa nihil.</p> */}
                <hr />
                <div className="social-links">
                  <h5 className="font-weight-bold text-uppercase mt-2 mb-2" style={{ fontSize: "25px", fontWeight: "bolder" }}>
                    SOCIAL MEDIA</h5>
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>



              </div>

              <div className="col-lg-2  col-6">

                <div className="row all-clients d-flex mt-5">



                  <h5 className="font-weight-bold text-uppercase mt-3 mb-4" style={{ fontSize: "18px", fontWeight: "bolder" }}>SERVICES</h5>

                  <ul className="list-unstyled" >
                    <li style={{ fontSize: "16px", fontWeight: "500" }}>
                      <a href="#hero" style={{ paddingRight: '38px' }}>Home</a>
                    </li>
                    <li style={{ fontSize: "16px", fontWeight: "500" }}>
                      <a href="#about" style={{ paddingRight: '38px' }}>About</a>
                    </li>
                    <li style={{ fontSize: "16px", fontWeight: "500" }}>
                      <a href="#resume" style={{ paddingRight: '26px' }}>Resume</a>
                    </li>
                    <li style={{ fontSize: "16px", fontWeight: "500" }}>
                      <a href="#portfolio" style={{ paddingRight: '22px' }}>Portfolio</a>
                    </li>
                    <li style={{ fontSize: "16px", fontWeight: "500" }}>
                      <a href="#services" style={{ paddingRight: '25px' }} >Services</a>
                    </li>


                  </ul>




                </div>
              </div>



           
              <div className="col-lg-2  col-6">

<div className="row all-clients d-flex mt-5">



  <h5 className="font-weight-bold text-uppercase mt-3 mb-4" style={{ fontSize: "18px", fontWeight: "bolder" }}>SERVICES</h5>

  <ul className="list-unstyled" >
    <li style={{ fontSize: "16px", fontWeight: "500" }}>
    <a href="#Study" style={{ paddingRight: "43px" }}>Study</a>
    </li>
    <li style={{ fontSize: "16px", fontWeight: "500" }}>
    <a href="#study-news" style={{ paddingRight: "0px" }}>Study News</a>
    </li>
    <li style={{ fontSize: "16px", fontWeight: "500" }}>
    <a href="#contact" style={{ paddingRight: "29px" }}>Contact</a>
    </li>
   
    


  </ul>




</div>
</div>



              <div className="col-lg-4  mt-5">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4" style={{ fontSize: "25px", fontWeight: "bolder" }}>Get In Touch</h5>

                <div className="row all-clients">
                  <div className="col-sm-4 col-6">
                    <figure className="clientf-logo">
                      <a href="#">
                        <img src="assets/img/tech/react.png" alt="" style={{ width: "70px", height: "70px" }} />
                      </a>

                    </figure>
                  </div>
                  <div className="col-sm-4 col-6">
                    <figure className="clientf-logo">
                      <a href="#">
                        <img src="assets/img/tech/react.png" alt="" style={{ width: "70px", height: "70px" }} />
                      </a>

                    </figure>
                  </div>
                  <div className="col-sm-4 col-6">
                    <figure className="clientf-logo">
                      <a href="#">
                        <img src="assets/img/tech/react.png" alt="" style={{ width: "70px", height: "70px" }} />
                      </a>

                    </figure>
                  </div>
                  {/* <div className="col-sm-4 col-6">
                    <figure className="clientf-logo">
                      <a href="#">
                        <img src="assets/img/tech/react.png" alt="" style={{ width: "70px", height: "70px" }} />
                      </a>

                    </figure>
                  </div>
                  <div className="col-sm-4 col-6">
                    <figure className="clientf-logo">
                      <a href="#">
                        <img src="assets/img/tech/react.png" alt="" style={{ width: "70px", height: "70px" }} />
                      </a>

                    </figure>
                  </div>
                  <div className="col-sm-4 col-6">
                    <figure className="clientf-logo">
                      <a href="#">
                        <img src="assets/img/client6.png" alt="" style={{ width: "70px", height: "70px" }} />
                      </a>
                    </figure>
                  </div> */}


                  
                 
                </div>
              </div>







            </div>
          </div>


          <hr />

          <div className="container">
            <div className="row">
              <div className="col-lg-6">

                <div className="copyright">
                  &copy; Copyright <strong><span>Vikas Pandey</span></strong>. All Rights Reserved<br />
                  <span style={{ color: '#000' }}>Designed by</span><a href="/">Vikas Pandey</a>
                </div>
               
              </div>

              <div className="col-lg-6">

                <div className="row all-clients d-flex">



                  <div className="payment-card">
                    <img src="assets/img/footer/visa.png"
                     style={{
                       paddingRight: '5px',
                       width: '60px',
                       height: '40px'
                       }}>

                       </img>
                    <img src="assets/img/footer/paytm.png"
                     style={{
                      paddingRight: '5px',
                      width: '60px',
                      height: '40px'
                      }}
                    ></img>
                    <img src="assets/img/footer/paypal.png"
                     style={{
                      paddingRight: '5px',
                      width: '60px',
                      height: '40px'
                      }}
                    ></img>
                    <img src="assets/img/footer/mastercard.png"
                     style={{
                      paddingRight: '5px',
                      width: '60px',
                      height: '40px'
                      }}
                    ></img>
                    <img src="assets/img/footer/maestro.png"
                     style={{
                      paddingRight: '5px',
                      width: '60px',
                      height: '40px'
                      }}
                    ></img>
                  </div>




                </div>
              </div>





            </div>
          </div>
        </footer>



      </div>

    );
  }
}

export default Footer;
