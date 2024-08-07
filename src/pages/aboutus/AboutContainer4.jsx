import React from "react";
import "./AboutContainer4.css";
import possibilityImage from "../../assets/kundan.jpg";

const AboutContainer4 = () => {
  return (
    <div>
    <div className="uniblu__Container4 section__padding lapi4" id="Container4">
      <div className="uniblu__Container4-content">
        {/* <h4>Enhance Your Organization's online presence !</h4> */}
        <h1 className="gradient__text">
          Om Prakash Singh <br /> CMO and Managing Director{" "}
        </h1>
        <p>
          As CMO and Managing Director at Uniblu, I guide our
          marketing strategy and business operations to boost our brand's
          visibility and ensure strategic alignment, reinforcing our leadership
          in digital consulting.
        </p>
        {/* <h4>Request Early Access to Get Started</h4> */}
      </div>
      <div className="uniblu__Container4-image">
        <img src={possibilityImage} alt="Container4" />
      </div>
      </div>
      <div className="uniblu__Container4 section__padding mobile4" id="Container4">
      <div className="uniblu__Container4-image">
        <img src={possibilityImage} alt="Container4" />
      </div>
      <div className="uniblu__Container4-content">
        {/* <h4>Enhance Your Organization's online presence !</h4> */}
        <h1 className="gradient__text">
          Om Prakash Singh <br /> CMO and Managing Director{" "}
        </h1>
        <p>
          As CMO and Managing Director at Uniblu, I guide our
          marketing strategy and business operations to boost our brand's
          visibility and ensure strategic alignment, reinforcing our leadership
          in digital consulting.
        </p>
        {/* <h4>Request Early Access to Get Started</h4> */}
      </div>
      
      </div>
    </div>
  );
};

export default AboutContainer4;
