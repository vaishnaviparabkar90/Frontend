import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/hero-image.png'; // Replace with the actual image path
import { FaPlay } from 'react-icons/fa'; // For the play icon

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Left Text Content */}
      <div className="hero-text">
        <h3 className="hero-about">About Us</h3>
        <h1 className="hero-title">
          About Mahalaxmi Arts<br />
          Learn More about Company
        </h1>
        <p className="hero-description">
          Shree Mahalakshmi Arts is a Jewelry Brand From Maharashtra. Founded by Mrs. Lalita Shinde. 
          We have a wide variety of Jewelry Products. All Our Products are of Premium Quality and 
          Are Made of Long Lasting Materials. We trade both on Online Platforms as well as Exhibitions.
        </p>
        {/* Play Now Button */}
        <div className="play-button">
          <div className="play-icon">
            <FaPlay />
          </div>
          <span>PLAY NOW</span>
        </div>
      </div>

      {/* Right Image */}
      <div className="hero-image">
        <img src={heroImage} alt="Jewelry" />
      </div>
    </section>
  );
};

export default HeroSection;
