import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import { useTypewriter } from 'react-simple-typewriter';
import { HashLink as Link } from 'react-router-hash-link';


<Link to="/contact-us#targetSection">
  <button type="button">Get In Touch</button>
</Link>

const Header = () => {

const [text] = useTypewriter({
  words: ['Developers','Strategists','Counselors', 'Consultant', 'UNIBLU'],
  loop : {},
  typeSpeed : 100,
  deleteSpeed : 60,
});
  
  return (
    <div className='uniblu__headerhh section__padding' id='home'>
      <div className='uniblu__headerhh-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing! <br /> We are {' '} <span> { text } </span> 
        </h1>
        <p>
          Uniblu offers a holistic approach to digital growth and online presence, making it a potentially valuable partner for businesses looking to establish or enhance their digital footprint. Our services suggest a deep understanding of the digital ecosystem and how to navigate it successfully to drive business growth.
        </p>
        <div className='uniblu__headerhh-content__input'>
        <Link to="/contact-us#contactid"><button type="button">Get In Touch</button></Link>
        </div>
      </div>
      <div className='uniblu__headerhh-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
