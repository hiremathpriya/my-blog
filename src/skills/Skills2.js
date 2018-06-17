import React, { Component } from 'react';
import './skills.css';


class Skills2 extends Component {
  render() {
    return (
        <div className="hero native-js skills" id="skills">
            <div className="hero-body">
            <div className="contanier">
            
            <div className="has-text-centered is-half has-text-Black-bold title font">Skills</div>
                <div className="level">
                    
                        <div className="columns is-multiline">     
                            
                            <div className="column is-one-quarter skill-group">
                                <div className="button topic has-text-black font is-size-6 is-flex-mobile">Agile Methodologies</div>
                            </div>                                
                            <div className="column is-three-quarters" >
                                <div className="button has-text-light font is-size-6 is-flex-mobile">Scrum</div>
                            </div>

                            <div className="column is-one-quarter skill-group" >
                                <div className="button topic has-text-black font is-size-6 is-flex-mobile">Java Script</div>
                            </div>
                            <div className="column is-three-quarters has-text-light">
                                <div className="button has-text-light margin-right font is-size-6 is-flex-mobile" >jQuery</div>
                                <div className="button has-text-light margin-right font is-size-6 is-flex-mobile">Bootstrap</div>
                                <div className="button has-text-light margin-right font is-size-6 is-flex-mobile">Bulma</div>
                            </div>

                            
                            <div className="column is-one-quarter skill-group">
                                <div className="button topic has-text-black font is-size-6 is-flex-mobile">Front End Technologies</div>
                            </div>
                            <div className="column is-three-quarters">
                                <div className="button  margin-right has-text-light font is-size-6 is-flex-mobile">Redux</div>
                                <div className="button  margin-right has-text-light font is-size-6 is-flex-mobile">HTML</div>
                                <div className="button  margin-right has-text-light font is-size-6 is-flex-mobile">CSS</div>
                            </div>

                            <div className="column is-one-quarter skill-group">
                                <div className="button topic has-text-black font is-size-6 is-flex-mobile">Node JS</div>
                            </div>
                            <div className="column is-three-quarters">
                                <div className="button  margin-right has-text-light font is-size-6 is-flex-mobile">Webpack</div>
                                <div className="button  margin-right has-text-light font is-size-6 is-flex-mobile">Jest</div>
                                <div className="button  margin-right has-text-light font is-size-6 is-flex-mobile">Enzyme</div>
                                <div className="button  margin-right has-text-light font is-size-6 is-flex-mobile">Cypress</div>
                                <div className="button  margin-right has-text-light font is-size-6 is-flex-mobile">VS code</div>
                            </div>  
                            
                            <div className="column is-one-quarter skill-group">
                                <div className="button topic has-text-black font is-size-6 is-flex-mobile">Source Control</div>
                            </div>        
                            <div className="column is-three-quarters">
                                <div className="button has-text-light font is-size-6 is-flex-mobile">Git</div>
                            </div>
                            
                        </div>

                </div>
                            
            </div>
            </div>
      </div>
     
    );
  }
}

export default Skills2;

