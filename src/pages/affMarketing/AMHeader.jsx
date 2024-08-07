import React from 'react';
import './affmheader.css';
import { useTypewriter } from 'react-simple-typewriter';
import { HashLink as Link } from 'react-router-hash-link';
const AMHeader = () => {
const [text] = useTypewriter({
  words: ['Elevating Your Brand through Strategic Affiliate Marketing Solutions'],
  loop : {},
  typeSpeed : 50,
  deleteSpeed : 40,
});
  
  return (
    <div className='uniblu__header section__padding' id='home'>
      <div className='uniblu__header-content'>
        <h1 className='gradient__text'>
        
        Uniblu{' '} <span> { text } </span> 
        </h1>
        <p>
        In the dynamic digital marketplace, Uniblu is your elite partner for affiliate marketing excellence. We specialize in tailored strategies that propel businesses and entrepreneurs to exceptional success, ensuring your brand outshines competitors in its niche.       
        </p>
         <div className='uniblu__headerAM-content__input'>
      
         <Link to="/contact-us#contactid"><button type="button">Get In Touch</button></Link>
         </div>
        {/* <div className='uniblu__webheader-image'>
        <img src={seo1} alt="loading" />
      </div> */}
        </div>
    </div>
  )
}

export default AMHeader;
