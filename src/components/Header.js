import React, { Component } from 'react';
// import logo from '../assets/logo.png'

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <nav>
          <div className="nav-wrapper">
            <a href="" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
