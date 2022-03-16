import React from 'react';

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Facts from './Component/Facts';
import About from './Component/About';
import Skills from './Component/Skills';
import Resume from './Component/Resume';
import Portfolio from './Component/Portfolio';
import Services from './Component/Services';
import Workflow from './Component/Workflow';
import Whychose from './Component/Whychose';
import Study from './Component/Study';
import Subscribe from './Component/Subscribe'
import Studynews from './Component/Studynews';
import Contact from './Component/Contact';
import Footer from './Component/Footer';



// import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';

function App() {
  return (
    <>

      <Navbar />
      <Home />
      <Facts />
      <About />
      <Skills />
  
      <Resume />
      <Services />
      <Workflow/>
      <Whychose/>
      <Study />
      <Subscribe/>
      <Studynews />
      <Portfolio />
      <Contact />
      <Footer />

     
    </>
    //  <Router>
    //     <Navbar/>
    //   <Switch>


    //      <Route exact path='/' component = {Home} />
    //      <Route exact path='/About' component = {About}/>
    //      <Route exact path='/Facts' component = {Facts}/>
    //      <Route exact path='/Skills' component={Skills}/>
    //      <Route exact path='/Resume' component = {Resume}/>
    //      <Route exact path='/Portfolio' component = {Portfolio}/>
    //      <Route exact path='/Services' component = {Services}/>
    //      <Route exact path='/Study' component = {Study}/> 
    //      <Route exact path='/Contact' component = {Contact}/> 





    //     </Switch>
    //     <Footer/>
    //   </Router> 

  );
}

export default App;
