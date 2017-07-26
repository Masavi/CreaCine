import React, { Component } from 'react';
// import logo from '../assets/logo.png'

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <nav className="navbar">
          <div className="navbar-brand">

            <a className="navbar-item" href="http://bulma.io">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>

            <div class="navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
