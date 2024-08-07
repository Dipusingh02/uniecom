import React from 'react';
import './ddheader.css';
import { useTypewriter } from 'react-simple-typewriter';
import { HashLink as Link } from 'react-router-hash-link';
const SeoHeader = () => {

const [text] = useTypewriter({
  words: [' Data-Driven', 'Decision Making'],
  loop : {},
  typeSpeed : 50,
  deleteSpeed : 40,
});
  
  return (
    <div className='uniblu__header section__padding' id='home'>
      <div className='uniblu__header-content'>
        <h1 className='gradient__text'>
        
Uniblu Empowering{' '} <span> { text } </span> 
        </h1>
        <p>
        Uniblu stands at the forefront of empowering organizations through data-driven insights, driving strategies, optimizing performance, and propelling business growth.</p>           
          <div className='uniblu__headerDD-content__input'>
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
