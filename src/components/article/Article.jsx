import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text,text2 }) => (
  <div className="uniblu__blog-container_article">
    <div className="uniblu__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="uniblu__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <div><p>{text2}</p></div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;