import React, { Component } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
// import { Document } from 'react-pdf'

class Skills extends React.Component {
 

  render() {
    // const Skills = () => {
    //   fileSaver.saveAs(
    //     process.env.REACT_APP_CLIENT_URL + "/assets/img/vikas.pdf",
    //     "vikas.pdf"
    //   );
    return (
    
          <div>
           
           <section id="skills" className="skills section-bg">
       <div className="container" data-aos="fade-up">

        <div className="section-title">
        <h2>skil<span style={{color:'#fabf15'}}>ls</span> </h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        */}
        </div>
         
        <div className="row skills-content">

          <div className="col-lg-6">

            <div className="progress">
           
              <span className="skill">HTML <i className="val">100%</i></span>
            
              
                <ProgressBar completed={100} customLabel="HTML"/>
                

           
            </div>

            <div className="progress">
           
           <span className="skill">Bootstrap <i className="val">70%</i></span>
         
           
             <ProgressBar completed={70} customLabel="Bootstarp"/>
             

        
         </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">90%</i></span>
              <ProgressBar completed={90} customLabel="CSS"/>
              {/* <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div> */}
            </div>
            <div className="progress">
           
           <span className="skill">React JS <i className="val">60%</i></span>
         
           
             <ProgressBar completed={60} customLabel="React JS"/>
             

        
         </div>
            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <ProgressBar completed={75} customLabel="JS"/>
              {/* <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div> */}
            </div>

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">PHP <i className="val">20%</i></span>
              {/* <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div> */}
              <ProgressBar completed={75} customLabel="PHP"/>
            </div>

            <div className="progress">
              <span className="skill">WordPress/CMS <i className="val">90%</i></span>
              {/* <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div> */}
              <ProgressBar completed={90} customLabel="WordPress"/>
            </div>

            <div className="progress">
              <span className="skill">Photoshop <i className="val">55%</i></span>
              {/* <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div> */}
              <ProgressBar completed={30} customLabel="Photoshop"/>
            </div>

              {/* <div className="col-12">
                            <div className="mt-4 pt-2 text-center">
                                <a href="assets/img/vikas.pdf"   className="btn  btn-sm" style={{fontSize: "20px", fontWeight: "500", background: "#6A1B9D", color: "#fff"}}>Resume  <i className="bx bx-download" style={{fontSize: "24px"}}></i></a>
                            </div>
             </div> */}

          </div>

        </div>

      </div>
    </section>

    
   </div>
      
    );
  }
}

export default Skills;
