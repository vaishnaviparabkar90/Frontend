import React from 'react';
import './Footer.css';
import logo from '../assets/Footer.png'; // Replace with your actual logo image path

const Footer = () => {
  return (
    <footer className="footer">
      {/* Background Layer */}
      <div className="footer-bg"></div>

      {/* Footer Content */}
      <div className="footer-content">
        {/* Left Column: Logo and About */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>

        {/* Center Column: Links */}
        <div className="footer-center">
          <div>
            <h4>CUSTOMER SERVICE</h4>
            <p>Contact Us</p>
            <p>Our Blogs</p>
            <p>Track Your Order</p>
            <p>Shipping & Return</p>
          </div>
          <div>
            <h4>ABOUT US</h4>
            <p>FAQ</p>
            <p>Our Products</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h4>CATALOG</h4>
            <p>Earning</p>
            <p>Pendent</p>
            <p>Rings</p>
            <p>Chain Bangals</p>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="footer-line"></div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        <span>© 2024 Shree Mahalaxmi Arts. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
