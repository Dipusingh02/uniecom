import React from "react";
// import possibilityImage from "../../assets/possibility.png";
import dipuImage from "../../assets/dipu.jpg";
import "./AboutContainer1.css";

const AboutContainer1 = () => {
  return (
    <div
      className="uniblu__Container1 Conainer1section__padding"
      id="Container1"
    >
      <div className="uniblu__Container1-image">
        <img src={dipuImage} alt="Container1" />
      </div>
      <div className="uniblu__Container1-content">
        {/* <h4>Enhance Your Organization's online presence !</h4> */}
        <h1 className="gradient__text">
          Dipu Kr. Singh
          <br /> CEO and CTO (Co-founder){" "}
        </h1>
        <p>
          As CEO and CTO of Uniblu, I'm dedicated to propelling our
          company's expansion and innovation in the digital consulting sphere.
          Through foresight and technical proficiency, we continuously challenge
          conventional limits, offering unparalleled value to our global
          clientele. Together, we're pioneering the future of digital evolution,
          revolutionizing solutions one breakthrough at a time.
        </p>
        {/* <h4>Request Early Access to Get Started</h4> */}
      </div>
    </div>
  );
};

export default AboutContainer1;
