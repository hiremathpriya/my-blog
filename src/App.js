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
      <div className="contanier is-flex-mobile">
      <div>
        <Navbar />
        <div className=" hero is-large is-flex-mobile">
          <div className="hero-body header-image is-flex-mobile">
            <div className="">
              <div className="title is-header font is-flex-mobile">
                My-Journey
              </div>
              <div className="font is-flex-mobile">Web Developer/Tester</div>
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
      </div>
     
    );
  }
}

export default App;
