import React from 'react';
import{Navbar,CTA} from "../../components";
import { Footer, } from '../../container';
import {WebDevFeatures, WebDevHeader,WebDevServices,WebDevPossibility, WebDevTS} from '../../pages'
const WebDev = () => {
  return (
    <div className="uniblu_Webdev">
    <div className="gradient__bg">
      <Navbar />
      <WebDevHeader />
    </div>
    <WebDevFeatures />
    <WebDevServices />
    <WebDevPossibility />
    <CTA />
    <Footer/>
    </div>
   
    
  )
}

export default WebDev
