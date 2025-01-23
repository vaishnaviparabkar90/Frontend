import React from 'react';
import './Contact.css';
import { FaFacebook, FaYoutube, FaTelegram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact">
      {/* Header */}
      <h3>Get in touch with us</h3>

      <div className="contact-content">
        {/* Contact Info Section */}
        <div className="contact-info">
          <div className="address">
            <h4>Address</h4>
            <p>Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
          </div>
          <div className="email">
            <h4>Email</h4>
            <p>nexton@example.com</p>
          </div>
          <div className="phone">
            <h4>Phone</h4>
            <p>000-123-456-7890</p>
          </div>
          <div className="social">
            <h4>Socials</h4>
            <div className="social-icons">
              <FaFacebook className="social-icon facebook" />
              <FaYoutube className="social-icon youtube" />
              <FaTelegram className="social-icon telegram" />
              <FaTwitter className="social-icon twitter" />
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="full-name">Full Name</label>
            <input type="text" id="full-name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Write your message"></textarea>
          </div>
          <button type="submit" className="send-button">Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
