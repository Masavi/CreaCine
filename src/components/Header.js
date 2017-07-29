import React, { Component } from 'react';
// import logo from '../assets/logo.png'

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <nav>
          <div className="nav-wrapper grey darken-4">
            <a href="#!" className="brand-logo">CreaCine</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse right"><i className="material-icons">menu</i></a>

            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
            </ul>

            <ul className="side-nav" id="mobile-demo">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
            </ul>

          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
