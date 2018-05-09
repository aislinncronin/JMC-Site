import React from 'react';

const Contact = () => {
  return(
    <div className="center">
      <div className="contact">
        <div className="contact-container">
          <h1 className="contact-title">CONTACT US</h1>
          <div className="job-title">JMC Stone Maintenance</div>
          <div>Yonkers, NY 10704</div>
          <div className="pad"><span className="bold">Phone:</span><a href="tel:19175594047"
            className="clickable"> (917) 559-4047</a></div>
          <div className="pad"><span className="bold">Fax:</span> (212) 305-3756</div>
          <div className="pad"><span className="bold">Email:</span><a href="mailto:info@jmcstonemaintenance.com"
            className="clickable">  info@jmcstonemaintenance.com</a></div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
