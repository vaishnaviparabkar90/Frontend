import React from 'react';
import './Gallery.css';
import image1 from '../assets/Rectangle 215.png';
import image2 from '../assets/Rectangle 216.png';
import image3 from '../assets/Rectangle 217.png';

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-container">
      
        <div className="gallery-item">
          <img src={image1} alt="Gallery 1" />
        </div>

        <div className="gallery-item large">
          <img src={image2} alt="Gallery 2" />
        </div>

        
        <div className="gallery-item">
          <img src={image3} alt="Gallery 3" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
