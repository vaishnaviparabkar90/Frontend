import React from 'react';
import './HistorySection.css'; // Import the CSS file
import image from '../assets/Rectangle 3845.png'; // Replace with the actual image path
const HistorySection = () => {
  return (
    <div className="history-section">
      {/* Left-side image with overlay */}
      <div className="image-container">
        <img src={image} alt="History" className="history-image" />
        <div className="rectangle-overlay"></div>
      </div>

      {/* Right-side text content */}
      <div className="text-container">
        <h2 className="history-title">History of Company</h2>
        <p className="history-description">
          The Indian rupee is the official currency in the Republic of India. The rupee is 
          The Indian rupee is the official currency in the Republic of India. The rupee is 
          The Indian rupee is the official currency in the Republic of India. The rupee is 
          The Indian rupee is the official currency in the Republic of India. The rupee is 
          The Indian rupee is the official currency in the Republic of India. The rupee is 
          The Indian rupee is the official currency in the Republic of India. The rupee is.
        </p>
      </div>
    </div>
  );
};

export default HistorySection;
