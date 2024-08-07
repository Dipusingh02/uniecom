import React from 'react';
import Feature from '../../components/feature/Feature';
import './seofeatures.css';

const featuresData = [
  {
    title: 'Bespoke Strategies',
    text: 'Your business is unique, and so are our SEO solutions. Custom-crafted to meet your specific objectives, our strategies ensure you stand out in the digital crowd.',
  },
  {
    title: 'Future-Forward Techniques',
    text:  "Staying abreast of the latest SEO trends and algorithm updates, we employ only the most effective, future-forward techniques to keep you ahead of the curve.",
  },
  {
    title: 'Transparent Reporting',
    text: "With Uniblu Consultant, there are no black boxes. Expect comprehensive, transparent reporting that demystifies SEO and shows you exactly how you’re achieving success.",
  },
  {
    title: 'Ethical Practices',
    text: "Our integrity is non-negotiable. We employ only white-hat SEO techniques, ensuring your growth is sustainable and penalty-free. ",
  },
  {
    title: 'Competitive Pricing',
    text: "We offer competitive pricing without compromising on quality or functionality.",
  },
];

const SeoFeatures = () => (
  <div className="unibluweb__featuresse section__padding" id="features">
    <div className="unibluweb__featuresse-heading">
      <h1 className="gradient__text">Unleashing the Power of Organic Growth: Advanced SEO Solutions</h1>
      <h1 className="seofetures_color"> In a digital-centric business landscape, Uniblu Consultant delivers elite, custom SEO Solutions to propel your brand to the forefront of organic search rankings, blending innovative strategies with cutting-edge insights for unparalleled digital prominence.</h1>
      <p>
Why Opt for unibluweb Consultant</p>
    </div>
    <div className="unibluweb__featuresse-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default SeoFeatures;