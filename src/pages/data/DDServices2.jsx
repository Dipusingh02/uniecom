import React from "react";
import Feature from "../../components/feature/Feature";
import "./ddservices2.css";

const DDServices2 = () => (
  <div className="uniblu__whatuniblu section__margin " id="wuniblu">
    <div className="uniblu__whatuniblu-heading">
      <h1 className="gradient__text">Our Services</h1>
    </div>
    <div className="uniblu__whatuniblu-container">
<Feature
    title="Data Exploration"
    text="Embark on a comprehensive analysis of your organization's data landscape, meticulously identifying valuable sources and latent insights to drive informed decision-making."
/>

<Feature
    title="Data Strategy Consulting"
    text="Collaborate with our seasoned experts to architect robust data strategies congruent with your business imperatives. We guide you through every facet of the data journey, ensuring alignment with your organizational goals."
/>

<Feature
    title="Predictive Analytics"
    text="Harness the potency of predictive modeling and machine learning to foresee future trends and behaviors. Empower proactive decision-making by leveraging our advanced predictive analytics capabilities."
/>

<Feature
    title="Performance Optimization"
    text="Liaise with our team to identify avenues for performance enhancement across your operations. Utilize data-driven insights to drive efficacy and efficiency, optimizing performance and maximizing business outcomes."
/>

<Feature
    title="Data Governance and Compliance"
    text="Safeguard the integrity, security, and regulatory compliance of your data with our adept professionals. We assist in instituting robust data governance frameworks that mitigate risks and ensure adherence to regulatory mandates."
/>

    </div>
  </div>
);

export default DDServices2;
