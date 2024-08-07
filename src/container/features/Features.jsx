import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Digital Marketing',
    text: 'Uniblu crafts tailored digital campaigns across platforms, optimizing for ROI and brand visibility, driving engagement and business growth.',
  },
  {
    title: 'Search Engine Optimization',
    text:  "Uniblu's SEO service optimizes websites for higher search engine rankings, driving organic traffic and enhancing online visibility and growth.",
  },
  {
    title: 'Website Production and Maintenance',
    text: "Uniblu produces and maintains websites, ensuring optimal functionality, user experience, and continuous improvement for sustained online success.",
  },
  {
    title: 'Affiliate Marketing',
    text: "Uniblu maximizes brand reach and revenue through strategic affiliate marketing partnerships, driving sales and fostering business growth.",
  },
  {
    title: 'Data Driven Decision Making',
    text: "Uniblu empowers data-driven decision making, leveraging insights to inform strategies, optimize performance, and drive business growth.",
  },
];

const Features = () => (
  <div className="uniblu__features section__padding" id="features">
    <div className="uniblu__features-heading">
      <h1 className="gradient__text">Explore the endless possibility of scalable solutions for an impactful online presence </h1>
      <p>Our Services Include...</p>
    </div>
    <div className="uniblu__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;