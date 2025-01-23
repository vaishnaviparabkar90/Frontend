import React from 'react';
import './Navbar.css';
import logo from '../assets/whitelogo.png'; // Replace with your logo path
import { FaSearch, FaHeart, FaShoppingBag, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Mahalaxmi Arts Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><a href="#new-collection">New Collection</a></li>
        <li><a href="#earrings">Earrings</a></li>
        <li><a href="#lockets">Lockets</a></li>
        <li><a href="#bangles">Bangles</a></li>
        <li><a href="#all-categories">All Categories</a></li>
      </ul>

      {/* Search Bar and Icons */}
      <div className="navbar-right">
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <FaSearch className="search-icon" />
        </div>

        {/* Icons */}
        <div className="navbar-icons">
          <FaUser className="icon" />
          <FaHeart className="icon" />
          <FaShoppingBag className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
