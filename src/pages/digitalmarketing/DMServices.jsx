import React from "react";
import Feature from "../../components/feature/Feature";
import "./dmservices.css";

const DMServices = () => (
  <div className="uniblu__whatuniblu section__margin " id="wuniblu">
    <div className="uniblu__whatuniblu-heading">
      <h1 className="gradient__text">Our Expertise</h1>
    </div>
    <div className="uniblu__whatuniblu-container">
      <Feature
        title="Strategic Digital Innovation"
        text="Embark on a journey of digital metamorphosis with a bespoke roadmap tailored to your business’s unique ethos. We delve into the essence of your brand, synchronizing your objectives with the digital realm’s limitless possibilities, to secure enduring growth and a competitive advantage."
      />
      <Feature
        title="Enhanced Search Engine Optimization (SEO)"
        text="Elevate your digital presence and ascend search engine rankings with our exhaustive SEO methodologies. From meticulous keyword research to content refinement, we deploy a holistic approach to drive organic traffic to your site, converting visitors into devoted patrons."
      />
      <Feature
        title="Social Media Mastery"
        text="Captivate your audience in their digital habitat. Our social media virtuosos devise captivating narratives and strategies across platforms, fostering connections with your community, fortifying brand allegiance, and broadening your message on a global scale."
      />
      <Feature
        title="Precision-Driven Pay-Per-Click (PPC) Advertising"
        text="Optimize your return on investment with laser-focused PPC campaigns. Our analytic-driven tactics ensure your advertisements connect with the intended audience precisely when they’re most receptive, transforming engagements into conversions with optimized ad expenditure and quantifiable outcomes."
      />
      <Feature
        title="Content Marketing Brilliance"
        text="Narrate your brand’s story with compelling, resonant content. From insightful blog posts to engaging videos, we craft and circulate impactful, relevant, and consistent content to captivate and retain a clearly defined audience, driving profitable customer actions."
      />
      <Feature
        title="Targeted Email Marketing"
        text="Navigate the digital noise with personalized email campaigns that directly converse with your clientele. Our bespoke strategies boost engagement, nurture loyalty, and stimulate sales, keeping your brand at the forefront of your customers' minds."
      />
      <Feature
        title="Insightful Analytics and Reporting"
        text="Make enlightened decisions powered by our comprehensive analytics and reporting services. Gain invaluable insights into your digital marketing efficacy, allowing for a deeper understanding of your audience and the refinement of your strategies for unparalleled impact."
      />
    </div>
  </div>
);

export default DMServices;
