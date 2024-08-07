import React from 'react';
import{Navbar,CTA} from "../../components";
import { Footer,} from '../../container';
import { DDHeader,DDPosibility,DDServices,DDFeatures,DDServices2} from '../../pages';

const DataDDMaking = () => {
 
  return (
    <div className="uniblu_Webdev">
    <div className="gradient__bg">
      <Navbar />
       <DDHeader /> 
    </div>
    <DDPosibility />
    <DDServices />
     <DDFeatures />
     <DDServices2 />
    <CTA />
    <Footer/>   
    </div>
  )
}



export default DataDDMaking;
