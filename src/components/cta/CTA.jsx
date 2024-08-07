import React from 'react';
import './cta.css';
import { HashLink as Link } from 'react-router-hash-link';
const CTA = () => (
  <div className="uniblu__cta">
    <div className="uniblu__cta-content">
      <p>Let's Connect ?!</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="uniblu__cta-btn">
    <Link to="/contact-us#contactid"><button type="button">Get Started</button></Link>  
   </div>
  </div>
);

export default CTA;