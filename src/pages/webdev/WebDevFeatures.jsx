import React from 'react';
import Feature from '../../components/feature/Feature';
import './webdevfeatures.css';

const featuresData = [
  {
    title: 'Expertise',
    text: 'Our team is comprised of highly skilled professionals with extensive experience in web development and design.',
  },
  {
    title: 'Custom Solutions',
    text:  "We provide tailored solutions that meet your specific business needs, ensuring a unique and effective online presence.",
  },
  {
    title: 'Cutting-Edge Technology',
    text: "We utilize the latest technologies and best practices to deliver high-quality, innovative web solutions. ",
  },
  {
    title: 'Client-Centric Approach',
    text: "Your satisfaction is our top priority. We work closely with you at every step to ensure your vision comes to life. ",
  },
  {
    title: 'Competitive Pricing',
    text: "We offer competitive pricing without compromising on quality or functionality.",
  },
];

const WebDevFeatures = () => (
  <div className="unibluweb__features section__padding" id="features">
    <div className="unibluweb__features-heading">
      <h1 className="gradient__text">Unibluweb Consultant: Your Digital Solution Partner

      Innovation and scalability are crucial in the digital realm. Choose us for impactful online solutions.</h1>
      <p>
Why Opt for unibluweb Consultant?</p>
    </div>
    <div className="unibluweb__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default WebDevFeatures;