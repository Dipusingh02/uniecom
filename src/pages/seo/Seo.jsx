import React from 'react'
import{Navbar,CTA} from "../../components";
import { Footer,} from '../../container';
import { SeoHeader,SeoPossibility,SeoFeatures,SeoServices, SeoConclude,} from '../../pages';
const Seo = () => {
  return (
    <div className="uniblu_Webdev">
    <div className="gradient__bg">
      <Navbar />
      <SeoHeader />
    </div>
    <SeoPossibility />
    <SeoServices />
     <SeoFeatures />
     <SeoConclude />
    <CTA />
    <Footer/>
    </div>
  )
}

export default Seo
