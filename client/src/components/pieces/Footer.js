import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Footer.css';

const Footer = () => {
	return(
		<footer className="page-footer">
            <div className="row">
              <div className="col l4 offset-l2 s12">
                <ul>
                  <li><a className="grey-text text-lighten-3 btn-small" href="#!">Link 1</a></li>
                </ul>
              </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
	);
};

export default Footer;
