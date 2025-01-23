import React from 'react';
import './FeaturesBlock.css'; // Styles for the Features Section
import { FaHeadphones, FaBox, FaTruck, FaClipboardCheck, FaGem, FaUserTie } from 'react-icons/fa';

const FeaturesBlock = () => {
  const features = [
    {
      icon: <FaHeadphones />,
      title: 'Support Team',
      description: 'The Indian rupee is the official currency in the Republic of India. The rupee is.',
    },
    {
      icon: <FaBox />,
      title: 'Creative Products',
      description: 'The Indian rupee is the official currency in the Republic of India. The rupee is.',
    },
    {
      icon: <FaTruck />,
      title: 'Easy Shipment',
      description: 'The Indian rupee is the official currency in the Republic of India. The rupee is.',
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Quality Control',
      description: 'The Indian rupee is the official currency in the Republic of India. The rupee is.',
    },
    {
      icon: <FaGem />,
      title: 'Premium Material',
      description: 'The Indian rupee is the official currency in the Republic of India. The rupee is.',
    },
    {
      icon: <FaUserTie />,
      title: 'Client Management',
      description: 'The Indian rupee is the official currency in the Republic of India. The rupee is.',
    },
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesBlock;
