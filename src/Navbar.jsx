import React, { useState } from 'react';
import './Navbar.css'; // custom CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-header">
        <div className="logo">YourLogo</div>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close" onClick={() => setIsOpen(false)}>×</button>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Programs</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Internship</a></li>
          <li><a href="/">Contact Us</a></li>
          <li><button className="donate-btn">Donate</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
