import React from 'react';
import AM2 from '../../assets/affmarke.png';
import './ampossibility.css';

const AMPossibility = () => (
  <div className="uniblu__possibilityam section__padding" id="possibility">
    <div className="uniblu__possibilityam-image">
      <img src={AM2 } alt="possibility" />
    </div>
    <div className="uniblu__possibilityam-content">
      <h4>Let's Forge a Path to Success Together</h4>
      <h1 className="gradient__text">At Uniblu, we don't merely aspire for growth<br />  we engineer it </h1>
      <p>Embarking on an affiliate marketing journey or aiming to enhance your current program, Uniblu is ready to navigate you through complexities towards remarkable success. Partner with us to achieve unparalleled triumph for your brand.</p>
    </div>
  </div>
);

export default AMPossibility;