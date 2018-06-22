import React, { Component } from 'react';



class AboutMe extends Component {
  render() {
    return (
        <div className=" hero  native-js is-medium" id="AboutMe">
          <div className="hero-body">
            <div className="columns is-flex-mobile is-centered">
              <img className="image is-128x128" src="../../images/DSC_0317.jpg" alt="authorImage" />
            </div>
              <h1 className="has-text-Black is-bold title font has-text-centered">Nice to meet you,</h1>
                <h2 className="has-text-Black-bold has-text-left font is-size-5"> Hi! I am Priya Hiremath, I am a web developer/Tester who is on this new tech journey.
                I am looking for a fresh new start to my career in software testing field and at the same time challenge myself to do something completely new.
                  I love meeting people and learning about their stories through respect and empathy. I also love to share my experience as an Individual, a Mum and as a Chef.
                  My inspiration to get into the tech world are my kids. In this 'DIGI' world everything revolves around the technology and I want to be a part of that.  
              </h2>
            </div>
        </div>
       
      
     
    );
  }
}

export default AboutMe;