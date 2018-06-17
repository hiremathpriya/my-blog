import React, { Component } from 'react';
import './skills.css';


class Education extends Component {
  render() {
    return (
         <div className="hero native-js skills" id="Education">
             <div className="hero-body">
             <div className="contanier">
            
            <div className="has-text-centered is-half has-text-Black-bold title font">Education</div>
                 <div className="level">
                    
                        <div className="columns is-multiline">     
                            
                            <div className="column is-one-quarter skill-group">
                                 <div className="button topic has-text-black font is-size-5">Web-Development</div>
                             </div>                                
                             <div className="column is-three-quarters" >
                                 <div className="button has-text-light font is-size-5">Enspiral Dev Academy Web Development Bootcamp</div>
                             </div>

                             <div className="column is-one-quarter skill-group" >
                                 <div className="button topic has-text-black font is-size-5">Testing</div>
                             </div>
                             <div className="column is-three-quarters has-text-light">
                                 <div className="button has-text-light margin-right font is-size-5" >ISTQB Certification</div>
                                 <div className="button has-text-light margin-right font is-size-5">Diploma in Software Testing</div>
                                 <div className="button has-text-light margin-right font is-size-5">Software Testing (Foundation)</div>
                             </div>

                            
                             <div className="column is-one-quarter skill-group">
                                <div className="button topic has-text-black font is-size-5">Diplomas</div>
                            </div>
                            <div className="column is-three-quarters">
                             <div className="button  margin-right has-text-light font is-size-5">Diploma in Hotel Management & Catering Technology</div>
                                <div className="button  margin-right has-text-light font is-size-5">Diploma in Home Science</div>
                                
                            </div>

                             <div className="column is-one-quarter skill-group">
                                 <div className="button topic has-text-black font is-size-5">Degree</div>
                             </div>
                             <div className="column is-three-quarters">
                                 <div className="button  margin-right has-text-light font is-size-5">BA (Hons) Psychology + Travel & Tourism</div>
                                 
                             </div>  
                            
                             <div className="column is-one-quarter skill-group">
                                 <div className="button topic has-text-black font is-size-5">Other-certificates</div>
                             </div>                                     <div className="column is-three-quarters">
                                 <div className="button has-text-light font is-size-5">Plant Protection Agri-Business Training Ltd</div>
                                     <div className="button has-text-light font is-size-5">Producing safe food certification</div>
                             </div>
                            
                         </div>

                 </div>
                            
             </div>
             </div>
       </div>
     
     );
   }
 }

export default Education;

