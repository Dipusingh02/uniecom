import React from 'react';
import Feature from '../../components/feature/Feature';
import './seoservices.css';
// import '../../assets/webdev1.jpg';

const SeoServices = () => (
  <div className="uniblu__whatuniblu section__margin " id="wuniblu">
    <div className="uniblu__whatuniblu-heading">
      <h1 className="gradient__text">SEO SERVICES WE OFFER</h1>
    </div>
    <div className="uniblu__whatuniblu-container">
      <Feature title="Keyword Research and Analysis" text="Gain insights into your target audience's search behavior and identify high-value keywords that will drive relevant traffic to your website." />
      <Feature title="On-Page Optimization" text="Optimize your website's content, meta tags, images, and internal linking structure to enhance its relevance and visibility for search engines." />
      <Feature title="Off-Page Optimization" text="Build quality backlinks from authoritative websites, improve your website's domain authority, and strengthen its online reputation." />
      <Feature title="Technical SEO Audit" text="Identify and address technical issues that may be hindering your website's performance in search results, such as crawlability, site speed, and mobile-friendliness. " />
      <Feature title="Content Creation and Optimization" text="Create compelling, relevant content that resonates with your target audience and aligns with their search intent, while also optimizing it for search engine visibility." />
      <Feature title="Local SEO" text="Optimize your online presence for local search, ensuring that your business appears prominently in local search results and on location-based platforms like Google Maps." />
      <Feature title="SEO Reporting and Analysis" text="Track the performance of your SEO campaigns with detailed reporting and analysis, and gain actionable insights to continuously improve your strategy and drive better results. " />
      <Feature title="Enhanced User Experience Design" text="Understanding the pivotal role of user experience in SEO success, we refine your website’s usability and engagement metrics, fostering an environment where visitors are encouraged to convert." />
    </div>
  </div>
);

export default SeoServices;