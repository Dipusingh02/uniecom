import React from "react";
import Feature from "../../components/feature/Feature";
import "./ddservices.css";

const DDServices = () => (
  <div className="uniblu__whatuniblu section__margin " id="wuniblu">
    <div className="uniblu__whatuniblu-heading">
      <h1 className="gradient__text">Our Methodology</h1>
    </div>
    <div className="uniblu__whatuniblu-container">
    <Feature
    title="Data Exploration"
    text="Embark on a comprehensive analysis of your organization's data landscape, meticulously identifying valuable sources and latent insights to drive informed decision-making."
/>

<Feature
    title="Data Integration"
    text="Seamlessly integrate disparate data sources, dismantling silos to establish a cohesive perspective of your organization's data, facilitating cohesive insights and strategic alignment."
/>

<Feature
    title="Advanced Analytics"
    text="Leverage state-of-the-art analytical techniques to extract profound insights from your data reservoir. Discern patterns, trends, and opportunities that underpin strategic decision-making, empowering your organization with actionable intelligence."
/>

<Feature
    title="Visualization and Reporting"
    text="Harness the persuasive power of visualization to articulate intricate insights effectively. Our intuitive dashboards and reports provide stakeholders with lucid, actionable insights at a glance, fostering clarity and driving strategic initiatives."
/>

    </div>
  </div>
);

export default DDServices;
