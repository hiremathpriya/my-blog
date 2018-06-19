import React, { Component } from 'react';
import AboutMe from './AboutMe'
import Education from './skills/Education';
import Footer from './Footer';
import Navbar from './Navbar';
import Skills2 from './skills/Skills2';
import Projects from './Projects';
import Contact from './Contact';
import Experience from './Experience';


class App extends Component {
  render() {
    return (
      <div className="contanier ">
      <div>
        <Navbar />
        <div className="hero is-large is-flex-mobile">
          <div className="hero-body header-image is-flex-mobile">
            <div className="">
              <div className="title is-header is-flex-mobile font is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">My-Journey</div>
                
              </div>
              <div className="subtitle font is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">Web Developer/Tester</div>
            </div>
           
          </div>
        </div>
        <AboutMe />
        <div className="header-image empty-div is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"></div>
        <Education />
        <div className="header-image empty-div is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"></div>
        <Skills2 id="skills"/>
        <div className="header-image empty-div is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"></div>
        <Projects />
        <div className="header-image empty-div is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"></div>
        <Experience />
        <div className="header-image empty-div is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"></div>
        <Contact />
        <Footer/>
        </div>
      
     
    );
  }
}

export default App;
