import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="uniblu__possibility section__padding" id="possibility">
    <div className="uniblu__possibilityh-image">
      <img src={ possibilityImage } alt="possibility" />
    </div>
    <div className="uniblu__possibility-content">
      <h4>Enhance Your Organization's online presence !</h4>
      <h1 className="gradient__text">Offering High-End <br /> Scalable Web Applications </h1>
      <p>Uniblu, backed by skilled developers, designs scalable web applications tailored to an organization's growth trajectory. Our expertise in development and digital strategy ensures alignment with objectives and user needs, fostering efficiency and innovation for sustained expansion.</p>
      {/* <h4>Request Early Access to Get Started</h4> */}
    </div>
  </div>
);

export default Possibility;