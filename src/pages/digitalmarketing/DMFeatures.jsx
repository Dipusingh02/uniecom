import React from 'react';
import Feature from '../../components/feature/Feature';
import './dmfeatures.css';

const featuresData = [
 {
  title: 'Unrivaled Expertise and Experience:',
  text: 'Our cadre of digital marketing mavens brings to the table years of cross-industry expertise, ensuring your brand benefits from both time-tested and groundbreaking strategies.'
},
{
  title: 'Bespoke Digital Solutions',
  text:  "Recognizing the uniqueness of each business, we offer tailor-made services that align perfectly with your distinct needs and aspirations, guaranteeing personalized attention and strategies that resonate with your brand’s ethos. "
},
{
  title: 'Transparent Partnership',
  text: "At Uniblu, clarity and partnership are paramount. We pledge transparent, ongoing communication, furnishing you with regular insights and updates to keep you apprised and engaged at every juncture."
},
{
  title: 'Outcome-Focused Methodology',
  text: "Integrity : We measure our success by yours. Our approach is relentlessly focused on delivering quantifiable results that bolster growth, amplify your digital footprint, and significantly enhance your profitability. "
},
{
  title: 'Competitive Pricing',
  text: "We believe in offering competitive pricing that reflects the value of our services."
},
];

const DMFeatures = () => (
  <div className="unibluweb__featuresdm section__padding" id="features">
    <div className="unibluweb__featuresdm-heading">
      <h1 className="gradient__text">Digital Dynamo Igniting Your Online Success with Innovative Marketing Solutions</h1>
      <h1 className="seofetures_color"> Uniblu, Pioneering digital marketing transforms businesses with avant-garde strategies, technology, and bespoke engagement. Achieve tangible success.</h1>
      <p>
      Why Partner with Uniblu</p>
    </div>
    <div className="unibluweb__featuresdm-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default DMFeatures;