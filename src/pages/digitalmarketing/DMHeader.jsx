import React from 'react';
import  './dmheader.css';
import { useTypewriter } from 'react-simple-typewriter';
import { HashLink as Link } from 'react-router-hash-link';
const AMHeader = () => {
const [text] = useTypewriter({
  words: ['Empowering Brands in the Digital Epoch', 'Your Vision Our Mission'],
  loop : {},
  typeSpeed : 50,
  deleteSpeed : 40,
});
  
  return (
    <div className='uniblu__header section__padding' id='home'>
      <div className='uniblu__header-content'>
        <h1 className='gradient__text'>
        
        Uniblu <br />{' '}<span> { text } </span> 
        </h1>
        <p>
        At Uniblu, we champion the transformative potential of digital marketing to redefine the trajectory of businesses in today’s fast-paced world. Our ethos is centered on guiding your brand through the dynamic digital ecosystem with pioneering strategies, avant-garde technology, and bespoke engagement, transforming your vision into tangible success
        </p>
         <div className='uniblu__headerDM-content__input'>
      
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
