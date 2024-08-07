import React from "react";
import "./AboutUsHeader.css";
import { useTypewriter } from "react-simple-typewriter";

const AboutUsHeader = () => {
  const [text] = useTypewriter({
    words: ["Micheal", "Josef",],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 40,
  });

  return (
    <div className="uniblu__AboutUsheader section__padding" id="home">
      <div className="uniblu__AboutUsheader-content">
        <h1 className="gradient__text">
          Meet the Pioneers at the Helm <br /> of Uniblu, {" "}
          <span> {text} </span>
        </h1>
        <p>
          Our leadership reflects the company's ethos of agility, creativity,
          and a relentless pursuit of excellence. Our team is committed to
          redefining industry standards by offering scalable, impactful digital
          strategies that cater to the evolving needs of businesses in the
          digital age. Uniblu is not just a
          company but a dynamic force, ready to empower businesses with the
          tools needed for digital success in today’s competitive landscape.
        </p>
        {/* <div className='uniblu__webheader-image'>
          <img src={webdev2} alt="loading" />
        </div> */}
      </div>
    </div>
  );
};

export default AboutUsHeader;
