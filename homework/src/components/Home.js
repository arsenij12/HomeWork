import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Домашняя страница</h2>
      <p>Выберите одну из страниц:</p>
      <ul>
        <li><a href="/HomeUnusualHouse" className="link-button">Unusual Houses</a></li>
        <li><a href="/HomeUnusualmusems" className="link-button">Unusual Museums </a></li>
      </ul>
    </div>
  );
}

export default Home;