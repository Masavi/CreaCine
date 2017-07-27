import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <footer className="page-footer grey darken-4">

          <div className="container center">
            <a href="#" target="_blank"><i className="fa fa-facebook fa-2x left-logo"></i></a>
            <a href="#" target="_blank"><i className="fa fa-twitter fa-2x middle-logo"></i></a>
            <a href="#" target="_blank"><i className="fa fa-github fa-2x middle-logo"></i></a>
            <a href="#" target="_blank"><i className="fa fa-instagram fa-2x right-logo"></i></a>
          </div>

          <div className="footer-copyright">
            <div className="container">
            © CreaCine A.C.
            <a className="grey-text text-lighten-4 right" href="#" target="_blank">Xalapa, Veracruz</a>
            </div>
          </div>

        </footer>
      </div>
    );
  }
}

export default Footer;
