import React from 'react';
import DD01 from '../../assets/dd01.png';
import './ddposibility.css';

const DDPossibility = () => (
  <div className="uniblu__possibility section__padding" id="possibility">
    <div className="uniblu__possibility-image">
      <img src={DD01 } alt="possibility" />
    </div>
    <div className="uniblu__possibility-content">
      <h4>Commence Your Journey Today</h4>
      <h1 className="gradient__text">Your Partner in Data-Driven Web Excellence <br />  Premium Scalable Solutions </h1>
      <p>Eager to unlock the full potential of your data? Reach out to us today to schedule a consultation with one of our esteemed experts and embark on your data-driven odyssey with Uniblu.</p>
    </div>
  </div>
);

export default DDPossibility;