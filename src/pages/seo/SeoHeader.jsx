import React from 'react';
import './seoheader.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useTypewriter } from 'react-simple-typewriter';
const SeoHeader = () => {
const [text] = useTypewriter({
  words: ['SEO Services','SEO Services'],
  loop : {},
  typeSpeed : 50,
  deleteSpeed : 40,
});
  
  return (
    <div className='uniblu__header section__padding' id='home'>
      <div className='uniblu__header-content'>
        <h1 className='gradient__text'>
        
Elevate Your Online Visibility with Expert{' '} <span> { text } </span> 
        </h1>
        <p>
        Welcome to Uniblu Consultant, your trusted partner for unlocking the full potential of your online presence through cutting-edge Search Engine Optimization (SEO) services. In today's digital landscape, having a well-optimized website is crucial for standing out amidst the competition and reaching your target audience effectively. With our proven strategies and dedicated team of SEO experts, we're here to help you achieve top rankings on search engine results pages (SERPs) and drive valuable organic traffic to your website. </p>
        <div className='uniblu__headerseo-content__input'>
        <Link to="/contact-us#contactid"><button type="button">Get In Touch</button></Link>
        </div>
        {/* <div className='uniblu__webheader-image'>
        <img src={seo1} alt="loading" />
      </div> */}
        </div>
    </div>
  )
}

export default SeoHeader
