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
      <div className="contanier is-fullhd">
      <div className="notification">
        <Navbar />
        <section className=" hero is-large">
          <div className="hero-body header-image">
            <div className="">
              <h1 className="title is-header font">
              One-Mum-Her-Journey
              </h1>
              <h2 className="font">Web Developer/Tester</h2>
            </div>
           
          </div>
        </section>
        <AboutMe />
        <div className="header-image empty-div"></div>
        <Education />
        <div className="header-image empty-div"></div>
        <Skills2 id="skills"/>
        <div className="header-image empty-div"></div>
        <Projects />
        <div className="header-image empty-div"></div>
        <Experience />
        <div className="header-image empty-div"></div>
        <Contact />
        <Footer/>
        </div>
      </div>
     
    );
  }
}

export default App;
