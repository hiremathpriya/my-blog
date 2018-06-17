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
                                <div className="button topic has-text-black font is-size-5">Agile Methodologies</div>
                            </div>                                
                            <div className="column is-three-quarters" >
                                <div className="button has-text-light font is-size-5">Scrum</div>
                            </div>

                            <div className="column is-one-quarter skill-group" >
                                <div className="button topic has-text-black font is-size-5">Java Script</div>
                            </div>
                            <div className="column is-three-quarters has-text-light">
                                <div className="button has-text-light margin-right font is-size-5" >jQuery</div>
                                <div className="button has-text-light margin-right font is-size-5">Bootstrap</div>
                                <div className="button has-text-light margin-right font is-size-5">Bulma</div>
                            </div>

                            
                            <div className="column is-one-quarter skill-group">
                                <div className="button topic has-text-black font is-size-5">Front End Technologies</div>
                            </div>
                            <div className="column is-three-quarters">
                                <div className="button  margin-right has-text-light font is-size-5">Redux</div>
                                <div className="button  margin-right has-text-light font is-size-5">HTML</div>
                                <div className="button  margin-right has-text-light font is-size-5">CSS</div>
                            </div>

                            <div className="column is-one-quarter skill-group">
                                <div className="button topic has-text-black font is-size-5">Node JS</div>
                            </div>
                            <div className="column is-three-quarters">
                                <div className="button  margin-right has-text-light font is-size-5">Webpack</div>
                                <div className="button  margin-right has-text-light font is-size-5">Jest</div>
                                <div className="button  margin-right has-text-light font is-size-5">Enzyme</div>
                                <div className="button  margin-right has-text-light font is-size-5">Cypress</div>
                                <div className="button  margin-right has-text-light font is-size-5">VS code</div>
                            </div>  
                            
                            <div className="column is-one-quarter skill-group">
                                <div className="button topic has-text-black font is-size-5">Source Control</div>
                            </div>        
                            <div className="column is-three-quarters">
                                <div className="button has-text-light font is-size-5">Git</div>
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

// "Methodologies	Agile Methodologies
// Front End	jQuery, Bootstrap, Bulma, React, Redux, HTML, CSS, NodeJS, webpack
// Testing	Jest, Enzyme, Cypress 
// Tools	VS Code
// Version Control	git
// "