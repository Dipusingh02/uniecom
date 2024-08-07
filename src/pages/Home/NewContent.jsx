import React from "react";
import "./newcontent.css";
import NewFeatures from "../../components/NewFeatures/NewFeatures";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img8 from "../../assets/8.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";

const NewContent = () =>{
  return (
    <div>
      <div className='uniblu_wh_bgheros'>
      <div className='uniblu_wh_herosblur'></div>
      <div className="uniblu__whatunibluhws uniblu__whatunibluhws-container">
        <NewFeatures
  img={img1}
  title="Enhanced Online Presence"
  text="Uniblu optimizes websites with modern design and SEO, helping businesses reach wider audiences and stay competitive." 
/>
<NewFeatures
  img={img2}
  title="Data-Driven Decision Making"
  text="Using data analysis, Uniblu helps businesses make informed decisions, improving product development and marketing strategies." 
/>
<NewFeatures
  img={img3}
  title="Brand Consistency and Recognition"
  text="Uniblu ensures a cohesive brand identity across digital platforms, building trust and boosting sales." 
/>
<NewFeatures
  img={img4}
  title="Increased Sales and Revenue"
  text="Uniblu' SEO and digital marketing strategies increase visibility, attract traffic, and boost sales." 
/>
<NewFeatures
  img={img5}
  title="Cost-Effective Marketing"
  text="Uniblu enhances ROI by targeting the most effective marketing channels, ensuring efficient budget use." 
/>
<NewFeatures
  img={img6}
  title="Improved Customer Insights"
  text="Data analysis by Uniblu reveals customer behavior and trends, enabling tailored offerings and targeted campaigns." 
/>
<NewFeatures
  img={img7}
  title="Adaptability to Market Changes"
  text="Uniblu' website maintenance and agile marketing strategies help businesses adapt quickly to market changes." 
/>
<NewFeatures
  img={img8}
  title="Networking Opportunities"
  text="Affiliate marketing with Uniblu builds valuable business and influencer relationships for cross-promotions and growth." 
/>
      </div>
      </div>
    </div>
  );
}

export default NewContent;
