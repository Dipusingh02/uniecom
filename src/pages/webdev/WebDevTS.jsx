import React from 'react';
import reactim from '../../assets/library.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import node from '../../assets/nodejs.png';
import express from '../../assets/expressjs.png'
import next from '../../assets/nextjs.png'

import './webdevts.css'
const WebDevTS= () => {
  return (
    <div className='uniblu_webdevts section__padding'>
      <div>
        <img src={html} alt="HTML" />
      </div>
      <div>
        <img src={css} alt="CSS" />
      </div>
      <div>
        <img src={reactim} alt="React.js" />
      </div>
      <div>
        <img src={next} alt="Next.js" />
      </div>
      <div>
        <img src={node} alt="Node.js" />
      </div>
      <div>
        <img src={express} alt="Express.js" />
      </div>
    </div>
  )
}

export default WebDevTS
