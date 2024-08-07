import React from 'react';
import{Navbar,CTA} from "../../components";
import { Footer } from '../../container';
import { DMHeader,DMPossibility,DMServices,DMFeatures} from '../../pages';

const DigitalMarketing = () => {
 
  return (
    <div className="uniblu_Webdev">
    <div className="gradient__bg">
      <Navbar />
       <DMHeader /> 
    </div>
     <DMPossibility />
     <DMServices />
    <DMFeatures />
    <CTA />
    <Footer/>  
    </div>
  )
}



export default DigitalMarketing;
