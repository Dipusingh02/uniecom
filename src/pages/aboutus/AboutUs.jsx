import React from "react";
import "./Aboutus.css";
import { Navbar, CTA } from "../../components";
import { Footer, Header, Whatuniblu } from "../../container";
import { AboutContainer1, AboutContainer2, AboutContainer3, AboutContainer4, AboutUsHeader } from "../../pages"
import NewContent from "../Home/NewContent";
const AboutUs = () => {
  return (
    <div className="Uniblu_AboutUs">
      <div className="gradient__bg">
        <Navbar />
        <AboutUsHeader />
        </div>
  <Whatuniblu />
  <NewContent />  
      <CTA />
      <Footer />
    </div>
  );
};

export default AboutUs;
