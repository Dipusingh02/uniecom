import React from 'react';
import Feature from '../../components/feature/Feature';
import './amfeatures.css';

const featuresData = [
    
        {
          "title": "Exceptional Expertise & Profound Experience",
          "text": "Boasting an extensive background and steadfast commitment to affiliate marketing, our team delivers unparalleled expertise and deep-seated industry insight."
        },
        {
          "title": "Customized Strategic Frameworks",
          "text": "Understanding the uniqueness of each brand, we craft personalized strategies that flawlessly integrate with your brand's identity and strategic objectives, ensuring a bespoke fit."
        },
        {
          "title": "Outcome-Focused Methodology",
          "text": "At Uniblu, our dedication to achieving measurable results is absolute. Each strategy and action is carefully formulated to drive significant growth, elevating sales and enhancing brand prestige."
        },
        {
          "title": "Unwavering Ethical Standards",
          "text": "Ethical integrity is foundational to our principles. We champion ethical marketing practices to safeguard your brand's reputation, ensuring it remains impeccable."
        },
        {
          "title": "Expansive Global Affiliate Network",
          "text": "Leveraging our broad network of affiliates across myriad sectors and niches, we are able to establish mutually beneficial partnerships, thereby unlocking unprecedented opportunities for engagement and growth."
        }
      
      
];

const AMFeatures = () => (
  <div className="unibluweb__featuresam section__padding" id="features">
    <div className="unibluweb__featuresam-heading">
      <h1 className="gradient__text">Why Entrust Uniblu with Your Affiliate Marketing Endeavors</h1>
      <h1 className="seofetures_color">Eager to revolutionize your affiliate marketing strategy? Reach out to us today to commence the journey toward transformative growth.</h1>
    </div>
    <div className="unibluweb__featuresam-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default AMFeatures;