import './footer.css';
import React from 'react';
import { FaBeer, FaCcVisa, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { LiaCcAmex } from "react-icons/lia";
import unibluLogo from '../../assets/uniblufinal.png';
import { CallButton } from '../../components';
import creditcard from '../../assets/cardimg.jpg';
import suimg from '../../assets/247img.jpg';
import satisfationimg from '../../assets/100img.jpg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <div className="footer-logo-circle"> 
              <img src={unibluLogo} alt="Unibluweb" />
            </div>
            <div className="para">
              <p>Unibluweb</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-contact">
            <h3>Los Angeles</h3>
            <p>Webroot-Billing-Support Inc.
            620 America Center, Ca 95002. United States</p>
            <CallButton phoneNumber={"+1 (818) 627-1987"} />
          </div>
          <div className="footer-links">
            <h3>Quick links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services/WebDev">Services</a></li>
              <li><a href="/contact-us">Contact</a></li>
              <li><a href="/about-us">About</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-newsletter">
            <h3>SIGN UP FOR OUR NEWSLETTER ➤</h3>
            <div className="footer-secure">
              <img src={creditcard} alt="Secure Payment" />
              <img src={suimg} alt="24/7 Support" />
              <img src={satisfationimg} alt="100% Satisfaction" />
            </div>
            <h3>FOLLOW US</h3>
            <div className="footer-social">
                <a><FaLinkedin /></a>
                <a> <FaTwitter /></a>
                <a> <FaFacebook /></a>
                <a><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2024 Uniblu INC. All rights reserved.</p>
        <p>
          <a href="/terms">Terms & Conditions</a> | 
          <a href="/privacy"> Privacy Policy</a> | 
          <a href="/refund"> Refund Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;