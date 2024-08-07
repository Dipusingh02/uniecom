import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, WebDev, DataDDMaking, DigitalMarketing, Seo, AboutUs, ContactUs, AffMarketing, Blog } from './pages';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services/AffiliateMarketing" element={<AffMarketing />} />
        <Route path="/services/WebDev" element={<WebDev />} />
        <Route path="/services/DataDriven" element={<DataDDMaking />} />
        <Route path="/services/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/services/SEO" element={<Seo />} />
     {   <Route path="/Blog" element={<Blog />} />}
      </Routes>
    </Router>
  );
}

export default App;
