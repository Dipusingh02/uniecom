import React from 'react';
import Feature from '../../components/feature/Feature';
import './webdevservices.css';


const WebDevServices = () => (
  <div className="uniblu__webdevservices1 section__margin " id="wuniblu1">
    <div className="uniblu__webdevservices1-heading">
      <h1 className="gradient__text">WEB  SERVICES WE OFFER</h1>
    </div>
    <div className="uniblu__webdevservices1-container">
      <Feature title="Website Development" text="Our team of seasoned developers leverages the latest technologies to build dynamic, high-performance websites. Whether you're looking to launch a brand-new site or revamp an existing one, we deliver customized solutions that align with your business goals." />
      <Feature title="Web Design" text="At Uniblu Consultant, we believe that a website should not only be functional but also visually appealing. Our web design experts craft beautiful, user-friendly interfaces that engage your visitors and enhance their user experience." />
      <Feature title="Frontend Development" text="We specialize in creating responsive, interactive frontend designs using HTML, CSS, JavaScript, and the latest tech like React.js. Professional graphic design ensures a cohesive brand identity across digital platforms, building trust and boosting sales." />
      <Feature title="Backend Development" text="Our backend development services ensure that your website operates smoothly, with fast loading times and optimal performance. We work with a variety of backend technologies, including PHP, Ruby on Rails, and Node.js, to develop scalable and secure web applications." />
      <Feature title="UX Design" text="User Experience (UX) is at the heart of everything we do. We focus on creating intuitive, user-centric designs that enhance usability and drive engagement. Our UX experts employ the best practices to ensure your website offers a seamless user journey." />
      <Feature title="CMS Website Development" text="Manage your content effortlessly with our CMS website development services. We specialize in WordPress, Drupal, Joomla, and other popular content management systems that allow you to update your website's content easily without any technical expertise." />
      <Feature title="Website Maintenance" text="Keep your website up-to-date and running smoothly with our comprehensive website maintenance services. From regular updates to security checks, we provide ongoing support to ensure your website remains current and secure." />
      <Feature title="Database Design" text="Our database design services are focused on creating efficient, scalable databases that support your website's functionality and performance. We ensure that your data is structured and managed effectively to facilitate easy access and security." />
    </div>
  </div>
);

export default WebDevServices;