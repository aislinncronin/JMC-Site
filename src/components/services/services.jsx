import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return(
    <div className="services-container">
      <div className="service-head">
        <h1>Services</h1>
      </div>
      <div className="service-head">
        <ul>
          <li className="service-list">Natural stone restoration of marble, granite, terrazzo, travertine, slate, etc.</li>
          <li className="service-list">Grout replacement and cleaning</li>
          <li className="service-list">Concrete polishing</li>
          <li className="service-list">Concrete overlays, colorings or special finishes</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
