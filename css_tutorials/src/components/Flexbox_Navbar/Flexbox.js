import React from 'react';
import './Flexbox.css';

const Flexbox = () => {
  return (
    <nav>
      <ul className="container">
        <li>Home</li>
        <li>Profile</li>
        <li className="search">
          <input type="text" className="search-input" placeholder="Search" />
        </li>
        <li>Logout</li>
      </ul>
    </nav>
  );
};

export default Flexbox;
