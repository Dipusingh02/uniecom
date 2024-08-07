import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/uniblufinal.png";
import "./navbar.css";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { FiChevronDown } from "react-icons/fi"; 
const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="uniblu__navbar gradient__bg" >
      <div className="uniblu__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="uniblu__navbar-links">
        <div className="uniblu__navbar-links_container">
          <div
            className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}
          >
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="services-dropdown">
                Services<FiChevronDown className="dropdown-icon"/>
                <ul className="dropdown gradient__bg">
                  <li>
                    <Link to="/services/WebDev" className="full-width-link">WebDev</Link>
                  </li>
                  <li>
                    <Link to="/services/SEO" className="full-width-link">Seo</Link>
                    
                  </li>
                  <li>
                    <Link to="/services/AffiliateMarketing" className="full-width-link">Affiliate Marketing</Link>
                  </li>
                  <li>
                    <Link to="/services/DigitalMarketing" className="full-width-link">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to="/services/DataDriven" className="full-width-link">Data Driven</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to='/#blogid'>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    <div className="uniblu__navbar-sign">
       <Link to="/contact-us"> <button type="button">Get In Touch</button></Link>
      
      </div>
      <div className="uniblu__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="uniblu__navbar-menu_container scale-up-center">
          <div className="uniblu__navbar-menu_container-links">
          {/* <div
            className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}
          > */}
             <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li className="services-dropdown">
                Services 
                {/* <ul className="dropdown gradient__bg"> */}
                  <li>
                    <Link to="/services/WebDev" className="full-width-link">WebDev</Link>
                  </li>
                  <li>
                    <Link to="/services/SEO" className="full-width-link">Seo</Link>
                  </li>
                  <li>
                    <Link to="/services/AffiliateMarketing" className="full-width-link">Affiliate Marketing</Link>
                  </li>
                  <li>
                    <Link to="/services/DigitalMarketing" className="full-width-link">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to="/services/DataDriven" className="full-width-link">Data Driven</Link>
                  </li>
                {/* </ul> */}
              {/* </li> */}
              <li>
                <Link to="/about-us" >About Us</Link>
              </li>
              <li>
              <Link to="/Blog">Blog</Link>
            </li>
            </ul>
          {/* </div> */}
          </div>
          <div className="uniblu__navbar-menu_container-links-sign">
          <Link to="/contact-us"> <button type="button">Get In Touch</button></Link>
          </div>
        </div>
        )}

      </div>
      </div>
  );
};

export default Navbar;
