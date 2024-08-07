import React from 'react';
import Feature from '../../components/feature/Feature';
import './amservices.css';


const AMServices = () => (
  <div className="uniblu__whatuniblu section__margin " id="wuniblu">
    <div className="uniblu__whatuniblu-heading">
      <h1 className="gradient__text">Affiliate Marketing Services We Offer</h1>
    </div>
    <div className="uniblu__whatuniblu-container">
      <Feature title="Affiliate Program Strategy & Development" text="We craft the blueprint for success, meticulously designing affiliate programs to attract elite affiliates. By defining optimal partnerships and structuring commission models, we establish the foundation for a flourishing affiliate network. " />
      <Feature title="Affiliate Recruitment & Management" text="Our skilled team diligently scouts, recruits, and fosters a select group of top-tier affiliates, influencers, and content creators aligned with your brand values. We manage all aspects of affiliate relationships to promote mutual growth and success." />
      <Feature title="Performance Optimization" text="Utilizing cutting-edge analytics, we continuously enhance and fine-tune your affiliate program. Implementing conversion rate optimization (CRO) techniques and optimizing creative assets, we ensure your campaign reaches its pinnacle." />
      <Feature title="Compliance Monitoring & Fraud Prevention Development" text="We protect your brand's integrity through strict compliance measures and proactive monitoring to prevent fraud. This approach ensures your affiliate program maintains the highest ethical standards." />
      <Feature title="Reporting & Analytics" text="At the heart of our approach is transparency. With detailed, insightful reports, we provide a clear view of your affiliate program's performance, shedding light on affiliate activities and offering strategic recommendations for sustained growth. " />
      {/* <Feature title="CMS Website Development" text="Manage your content effortlessly with our CMS website development services. We specialize in WordPress, Drupal, Joomla, and other popular content management systems that allow you to update your website's content easily without any technical expertise." />
      <Feature title="Website Maintenance" text="Keep your website up-to-date and running smoothly with our comprehensive website maintenance services. From regular updates to security checks, we provide ongoing support to ensure your website remains current and secure." />
      <Feature title="Database Design" text="Our database design services are focused on creating efficient, scalable databases that support your website's functionality and performance. We ensure that your data is structured and managed effectively to facilitate easy access and security." />
    */}
    </div> 
  </div>
);

export default AMServices;