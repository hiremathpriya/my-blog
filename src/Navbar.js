import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (

        <div>
            <nav className="navbar navigation is-flex-mobile"  aria-label="main navigation">
                <div className="is-flex-mobile">
                     <div className="navbar-item has-text-right is-expanded">
                        <div className="navbar-item font is-hoverable is-flex-mobile">
                        <a href="#Projects">Projects</a> 
                        </div>
                        <div className="navbar-item font is-flex-mobile">    
                        <a href="#AboutMe">About Me</a> 
                        </div>
                        <div className="navbar-item font is-flex-mobile">    
                            <a href="#skills">Skills</a>
                        </div>
                        
                        <div className="navbar-item font is-flex-mobile">    
                            <a href="#Experience">Experience</a>
                        </div>
                        <div className="navbar-item font is-flex-mobile">    
                            <a href="https://hiremathpriya.github.io/">Phase-0</a>
                        </div>
                        <div className="navbar-menu font is-flex-mobile">    
                            <a href="#Contact">Get In Touch</a>
                        </div>
                    </div>    
                </div>
            </nav>
        </div>    
    );
  }
}

export default Navbar;