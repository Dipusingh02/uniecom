import React from 'react';
import './webdevheader.css';

import webdev2 from '../../assets/webdev2.jpg'
import { useTypewriter } from 'react-simple-typewriter';
import { HashLink as Link } from 'react-router-hash-link';
const Header = () => {

const [text] = useTypewriter({
  words: ['Premier Web Development','UX Design','Website Maintenance','Responsive Design','Database Design'],
  loop : {},
  typeSpeed : 50,
  deleteSpeed : 40,
});
  
  return (
    <div className='uniblu__headerwh section__padding' id='home'>
      <div className='uniblu__headerwh-content'>
        <h1 className='gradient__text'>
        Uniblu Consultant <br /> provides {' '} <span> { text } </span> 
        </h1>
        <p>
        Welcome to Uniblu Consultant, your ultimate partner in bridging technology and innovation to create exceptional web solutions. Our commitment to excellence and our passion for digital creativity make us your ideal choice for all web development and design needs. At Uniblu Consultant, we understand the importance of a robust online presence in today’s digital age and are dedicated to providing comprehensive, cutting-edge services tailored to meet your unique requirements.        </p>
        <div className='uniblu__headerwh-content__input'>
        <Link to="/contact-us#contactid"><button type="button">Get In Touch</button></Link>
        </div>
        {/* <div className='uniblu__webheader-image'>
        <img src={webdev2} alt="loading" />
      </div> */}
        </div>
    </div>
  )
}

export default Header
