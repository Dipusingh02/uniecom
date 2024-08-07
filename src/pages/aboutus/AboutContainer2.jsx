import React from "react";
import "./AboutContainer2.css";
import dinoImage from "../../assets/dino.jpg";
// import possibilityImage from '../../assets/possibility.png'

const AboutContainer2 = () => {
  return (
    <div>
    <div className="uniblu__Container2 section__padding lapic2" id="Container2">
      <div className="uniblu__Container2-content">
        {/* <h4>Enhance Your Organization's online presence !</h4> */}
        <h1 className="gradient__text">
          Dino Raj <br /> COO and Co-founder{" "}
        </h1>
        <p>
          As the Chief Operating Officer (COO) of Uniblu, I lead
          efforts to optimize our operations for peak performance. My focus on
          efficiency and innovation fosters a collaborative culture within our
          team. Through strategic initiatives and leveraging our combined
          expertise, I strive to propel both Uniblu and our clients
          toward enduring growth and success.
        </p>
        {/* <h4>Request Early Access to Get Started</h4> */}
      </div>
      <div className="uniblu__Container2-image">
        <img src={dinoImage} alt="Container2" />
      </div>
      </div>
      <div className="uniblu__Container2 section__padding mobilec2" id="Container2">
      <div className="uniblu__Container2-image">
        <img src={dinoImage} alt="Container2" />
      </div>
      <div className="uniblu__Container2-content">
        {/* <h4>Enhance Your Organization's online presence !</h4> */}
        <h1 className="gradient__text">
          Dino Raj <br /> COO and Co-founder{" "}
        </h1>
        <p>
          As the Chief Operating Officer (COO) of Uniblu, I lead
          efforts to optimize our operations for peak performance. My focus on
          efficiency and innovation fosters a collaborative culture within our
          team. Through strategic initiatives and leveraging our combined
          expertise, I strive to propel both Uniblu and our clients
          toward enduring growth and success.
        </p>
        {/* <h4>Request Early Access to Get Started</h4> */}
      </div>
      
      
    </div>
    </div>
   
  );
};

export default AboutContainer2;
