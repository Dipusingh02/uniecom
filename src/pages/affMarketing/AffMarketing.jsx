import React from 'react';
import{Navbar,CTA} from "../../components";
import { Footer,} from '../../container';
import {  AMHeader,AMPossibility,AMServices,AMFeatures} from '../../pages';
const AffMarketing = () => {
  return (
    <div className="uniblu_Webdev">
    <div className="gradient__bg">
      <Navbar />
      <AMHeader />
    </div>
     <AMPossibility />
    <AMServices />
    <AMFeatures />
    <CTA />
    <Footer/> 
    </div>
  )
}


export default AffMarketing
