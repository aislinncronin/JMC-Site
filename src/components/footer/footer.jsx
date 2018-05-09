import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <div className="footer">
      <div className="footer-head">JMC Stone Maintenance</div>
      <div className="footer-text">
        <span><a href="tel:19175594047"
          className="clickable"> (917) 559-4047</a></span>
        <span><a href="mailto:info@jmcstonemaintenance.com"
          className="clickable">  info@jmcstonemaintenance.com</a></span>
      </div>
    </div>
  );
};

export default Footer;
