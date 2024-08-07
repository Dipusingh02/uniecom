import React from 'react';
import DM01 from '../../assets/digitalmarketing.png';
import './dmpossibility.css';

const DMPossibility = () => (
  <div className="uniblu__possibility section__padding" id="possibility">
    <div className="uniblu__possibility-image">
      <img src={DM01 } alt="possibility" />
    </div>
    <div className="uniblu__possibility-content">
      <h4>Embark on Your Digital Transformation</h4>
      <h1 className="gradient__text">Unveiling Premium and Scalable Web Solutions<br /> A Digital Marketing Odyssey </h1>
      <p>Elevate your digital marketing strategy with Uniblu today. Let’s initiate a dialogue on how we can help usher your business into a new era of digital excellence.</p>
    </div>
  </div>
);

export default DMPossibility;