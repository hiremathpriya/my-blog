import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (

        <div>
            <nav className="navbar navigation is-fixed-top"  aria-label="main navigation">
                <div className="  navbar-brand">
                    <a className="navbar-item">
                        <h1 className="has-text-white font">Priya</h1>
                    </a>

                    <div className="navbar-item has-text-right is-expanded">
                        <div className="navbar-item has-text-white font">
                        <a href="#Projects">Projects</a> 
                        </div>
                        <div className="navbar-item has-text-white font">    
                        <a href="#AboutMe">About Me</a> 
                        </div>
                        <div className="navbar-item has-text-white font">    
                            <a href="#skills">Skills</a>
                        </div>
                        
                        <div className="navbar-item has-text-white font">    
                            <a href="#Experience">Experience</a>
                        </div>
                        <div className="navbar-item has-text-white font">    
                            <a href="https://hiremathpriya.github.io/">Phase-0</a>
                        </div>
                        <div className="navbar-menu has-text-white font">    
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