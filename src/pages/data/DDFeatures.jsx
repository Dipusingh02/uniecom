import React from 'react';
import Feature from '../../components/feature/Feature';
import './ddfeatures.css';

const featuresData = [
    {
        title: 'Unparalleled Expertise',
        text: 'With a wealth of experience in data analytics and business intelligence, our seasoned professionals are committed to delivering avant-garde solutions tailored precisely to your organization.'
      },
      
      {
        title: 'Pioneering Innovation',
        text: 'We remain at the vanguard by continuously exploring emerging technologies and methodologies, ensuring our clients benefit from the latest advancements in data analytics.'
      },
      
      {
        title: 'Bespoke Solutions',
        text: 'Recognizing the unique nature of every enterprise, we engage closely with our clients to grasp their specific goals and challenges, crafting customized solutions that yield tangible outcomes.'
      },
      
];

const DMFeatures = () => (
  <div className="unibluweb__featuresdd section__padding" id="features">
    <div className="unibluweb__featuresdd-heading">
      <h1 className="gradient__text">Choosing Uniblu : Your Path to Data Excellence</h1>
      <h1 className="seofetures_color"> Uniblu stands as your trusted partner on the journey to unlocking the full potential of your data. </h1>
      <p>
      Why Opt for Uniblu</p>
    </div>
    <div className="unibluweb__featuresdd-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default DMFeatures;