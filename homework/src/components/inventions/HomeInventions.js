import React from 'react';
import './HomeInventions.css';

const HomeInventions = () => {
  return (
    <div className="home-container">
        <a href='/' className="link-button">Home</a>
      <h2>Home Page Inventions</h2>
      <p>Select one of the pages:</p>
      <ul>
        <li><a href="/ProgramableComputer" className="link-button">First programmable computer</a></li>
        <li><a href="/Internet" className="link-button">Internet</a></li>
        <li><a href="/Bitcoin" className="link-button">Bitcoin</a></li>
      </ul>
    </div>
  );
}

export default HomeInventions;