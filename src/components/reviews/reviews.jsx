import React from 'react';
import { Link } from 'react-router-dom';

const Review = () => {
  return(
    <div className="review-container">
      <div className="review-header">
        <h1>Testimonials</h1>
      </div>
      <div className="reviews">
        <div className="review">
          "Honestly, when I had John first come into my home, I was still speaking with other vendors - I'd never heard of him or JMC. But after I met him, I trusted him to get the job done well. He pointed out details that needed to be addressed that even I hadn't caught. After having him do the work in my home, I'm so glad that I chose him. Everything he touched turned to clean! Thank you JMC for cleaning and sealing all of my counters and making my old home feel new again!"
          <div className="review-author">-Tejash S in New Canaan, CT</div>
        </div>
        <div className="review">
          "Many had told me the stone (marble) was far too damaged to restore. After speaking with John he gave me hope that the marble could be restored. It appeared that perhaps some cleaning solvent was applied to two bathroom floors. The floor was absolutely disgusting. It was so bothersome that the marble was destroyed. I had faith that John and his team could salvage the marble and make it look better. They did an amazing job!! Beyond my expectations! I shared before and after pictures with others and they were in awe.. John and his staff were straight -forward, responsive, professional and very thorough. I have given people John's name and number. Call JMC Stone Maintenance... you will be glad that you did!! Thank you, John!"
          <div className="review-author">-Marianne P in Piermont, NY</div>
        </div>
        <div className="review">
          "JMC Stone Masters was a pleasure to work with. The owner was polite and his service was superb. He was on time and his workmenship was excellent. I would tell my friends and family if anyone needed a stone man, he's your guy!!"
          <div className="review-author">-Robert P in Yonkers, NY</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
