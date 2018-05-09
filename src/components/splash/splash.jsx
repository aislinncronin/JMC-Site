import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../services/services';
import Review from '../reviews/reviews';

const Splash = () => {
  return(
    <div>
      <div className="background">
        <div className="text-container">
          <div className="splash-text">
            JMC Stone Maintenance
          </div>
          <div className="splash-text-small">
            Natural stone restoration services
          </div>
          <div className="splash-text-italics">
            Proudly serving Yonkers, NY and the surrounding area since 1995
          </div>
          <div className="splash-text-small">Give us a call today!</div >
            <div className="splash-number">(917) 559-4047</div>
          </div>
        </div>
        <Services />
        <Review />
    </div>
  );
};

export default Splash;
