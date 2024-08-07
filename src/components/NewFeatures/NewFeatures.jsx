import React from 'react';
import './newfeatures.css';

const NewFeatures = ({img, title, text }) => (
  <div className="uniblu__features-container__featurebox">
  <div className='uniblu__features-container__featurebox-img'>

  <img src={img} alt='img' />
  </div>
    <div className="uniblu__features-container__featurebox-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="uniblu__features-container__featurebox-text">
      <p>{text}</p>
    </div>
  </div>
);

export default NewFeatures;