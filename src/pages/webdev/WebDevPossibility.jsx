import React from 'react';
import web1 from '../../assets/webdev1.png';
import './webdevpossibility.css';

const WebDevPossibility = () => (
  <div className="uniblu__possibilityw section__padding" id="possibility">
    <div className="uniblu__possibilityw-image">
      <img src={ web1 } alt="possibility" />
    </div>
    <div className="uniblu__possibilityw-content">
      <h4>Enhance Your Organization's online presence !</h4>
      <h1 className="gradient__text">Offering High-End <br /> Scalable Web Applications </h1>
      <p>Ready to take your online presence to the next level? Contact Uniblu Consultant today, and let us help you create a stunning, effective website that drives results. Whether you're looking for website development, design, maintenance, or any of our other services, we're here to turn your digital dreams into reality.</p>
      {/* <h4>Request Early Access to Get Started</h4> */}
    </div>
  </div>
);

export default WebDevPossibility;