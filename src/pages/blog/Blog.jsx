// import React from 'react'
// import { Article } from '../../components'
// import img1 from './blogimg/blog1img.webp'
// const ArticleData =[
//     {
//         imgUrl :img1,
//          date :"ET 21 MAY" ,
//          text : 'Does Adobe Lightroom have AI? New tools offer "erase" feature with just one click'
//     }
// ]
// const Blog = () => {
//   return (
//     <div>
//     {ArticleData.map((item, index) => (
//         <Article imgUrl={item.imgUrl}  date={item.date} text={item.text} key={item.title + index} />
//       ))}
//     </div>
//   )
// }

// export default Blog


import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => (
    <section className='uniblu_wh_bghero' id='blogid'>
    <div className='uniblu_wh_heroblur'></div>
  <div className="uniblu_blog section__padding" id="blog">
    <div className="uniblu_blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="uniblu_blog-container">
      <div className="uniblu_blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Google is reportedly investing $350 million in Flipkart, valuing the firm at $37 billion." text2="Alphabet's Google is set to acquire a minority stake worth $350 million in Walmart-backed Flipkart, valuing the Indian e-commerce giant at $37 billion, according to a source familiar with the matter who spoke to Reuters. Neither Google nor Flipkart immediately confirmed the investment details. In a statement, Flipkart announced that Google will join as an investor in its latest funding round. This round will be led by Walmart, Flipkart's largest shareholder, and will see Google becoming a minority investor, pending approvals." />
      </div>
      <div className="uniblu_blog-container_groupB">
        <Article imgUrl={blog02} date="May 26, 2024" text="ChatGPT Fails to Meet EU Data Accuracy Standards, Says EU Board
        Data accuracy is a key principle of EU data protection rules." />
        <Article imgUrl={blog03} date="May 26, 2024" text="New Leak Reveals Samsung Galaxy Ring Delivery Process: Here's How It Could Work" />
        <Article imgUrl={blog04} date="May 26, 2024" text="Google and Meta Compete with Million-Dollar Bids for Hollywood Content as AI Licensing Race Intensifies: Report" />
        <Article imgUrl={blog05} date="May 26, 2024" text="Nothing Phone 2a Teased to Receive New Color Options; Could Include Red and Yellow Variants" />
      </div>
    </div>
  </div>
  </section>
);

export default Blog;
