import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


class Contact extends Component {
  render() {
    return (
    <div className=" hero  native-js is-medium" id="Contact">
        <div className="hero-body">
          <div className="container">
          
          <h1 className="has-text-Black is-bold title font has-text-centered">Contact</h1>
            <h2 className="has-text-Black-bold has-text-centered font is-size-5">Would you like to have a coffee catch-up?</h2>

            <div>
            
            <div className="has-text-centered"><a href="mailto:priyahrish18@gmail.com">Email</a>
            
            
            </div>

            <div className="has-text-centered">P| 0212130586</div>

            <div className="has-text-centered">
                 <a href="https://github.com/hiremathpriya"><FontAwesome name="github"/></a>

                <div>
                 <i className="fab fa-linkedin-in"></i> 
                <a href="https://www.linkedin.com/in/priya-hiremath-06794b101/"><FontAwesome name="linkedin"/></a>
                </div>
            
            <div className="has-text-centered">Little things about me</div>
            <div className="has-text-centered">I believe "If you dare to dream, then you have all that it takes to bring that into a reality"<br/>
                I am passionate about my learning and this journey into the tech world.<br/> My favorite things are to spend time with my family, cook, travel and play Badminton.
            </div> 
        </div>
     </div>
     </div>
     </div>
     </div>
     
    );
  }
}

export default Contact;