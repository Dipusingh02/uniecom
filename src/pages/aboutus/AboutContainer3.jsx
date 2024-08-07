import React from "react";
import "./AboutContainer3.css";
import babluImage from "../../assets/bablu.jpg";
const AboutContainer3 = () => {
  return (
    <div className="uniblu__Container3 section__padding" id="Container3">
      <div className="uniblu__Container3-image">
        <img src={babluImage} alt="Container3" />
      </div>
      <div className="uniblu__Container3-content">
        {/* <h4>Enhance Your Organization's online presence !</h4> */}
        <h1 className="gradient__text">
          Bablu Kumar <br />
          CFO and Co-founder{" "}
        </h1>
        <p>
          As Uniblu's CFO, I manage finances, drive growth, and ensure fiscal
          responsibility. With strategic planning and transparency, I support
          long-term success.
        </p>
        {/* <h4>Request Early Access to Get Started</h4> */}
      </div>
    </div>
  );
};

export default AboutContainer3;
