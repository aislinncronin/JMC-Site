import React from 'react';

const About = () => {
  return(
    <div>
      <div className="padding">
        <div className="center">
          <h1 className="color">About Us</h1>
        </div>
        <div className="flex">
          <img src="https://s3.us-east-2.amazonaws.com/johnmc-site/placeholder.jpg" className="about-image"/>
          <div className="padding">
            <div className="padding">
              <div className="about-content">
                For over 25 years, JMC Stone Maintenance has been working in homes and businesses making floors, countertops, bathrooms and other stone or tiled surfaces look beautiful. Our reputation for service, quality and attention to detail has made us the company of choice in New York City, Westchester county and the tri-state area. We service home owners, contractors, installers, real estate agents and more. As a stone and tile restoration company, we are dedicated to the art of:
              </div>
              <div className="flex-about">
                <ul className="bullets">Cleaning</ul>
                <ul className="bullets">Restoring</ul>
                <ul className="bullets">Sealing</ul>
                <ul className="bullets">Polishing</ul>
                <ul className="bullets">Honing</ul>
                <ul className="bullets">Stripping</ul>
                <ul className="bullets">Grout Changing</ul>
              </div>
              <div className="about-content">
                In our 25 years of practice, we have acquired vast knowledge of various types of stone and tile, including but limited to:
              </div>
              <div className="flex-about">
                <ul className="bullets">Marble</ul>
                <ul className="bullets">Travertine</ul>
                <ul className="bullets">Limestone</ul>
                <ul className="bullets">Sandstone</ul>
                <ul className="bullets">Onyx</ul>
                <ul className="bullets">Granite</ul>
              </div>
              <div className="flex-about">
                <ul className="bullets">Saltillo</ul>
                <ul className="bullets">Slate</ul>
                <ul className="bullets">Brick</ul>
                <ul className="bullets">Pavers</ul>
                <ul className="bullets">Terazzo</ul>
                <ul className="bullets">Other Stone</ul>
              </div>
              <div className="about-content">
                We work hard to make your stone and tile look beautiful, no matter when it was installed. We have the solutions to make it look new again. I personally inspect and coordinate with my staff during the process of restoration and guarantee satisfaction with every job from begining to end.
              </div>
              <div className="about-content">
                John McCartney
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
