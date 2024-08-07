import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatuniblu.css';
import { HashLink as Link } from 'react-router-hash-link';

const Whatuniblu = () => (
  <div className="uniblu__whatunibluhw section__margin" id="wuniblu">
    <div className="uniblu__whatunibluhw-feature">
      <Feature title="What is UNIBLU ?" text="Uniblu is a digital consulting company that provides all-inclusive services to increase a company's online visibility and growth, from startups to well-established companies. Our areas of expertise include optimizing websites, focusing digital marketing efforts, and using data to inform strategic choices. By doing so, we help our clients gain market recognition and a competitive edge.

      " />
    </div>
    <div className="uniblu__whatunibluhw-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <Link to="/contact-us#contactid"><p>ContactUs</p> </Link>
    </div>
  </div>
  
);

export default Whatuniblu;