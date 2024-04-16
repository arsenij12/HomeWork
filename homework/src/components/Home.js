import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Домашняя страница</h2>
      <p>Выберите одну из страниц:</p>
      <ul>
        <li><a href="/VillaByTheSea" className="link-button">Villa by the Sea</a></li>
        <li><a href="/HouseInForest" className="link-button">House in forest</a></li>
        <li><a href="/houseboat" className="link-button">Houseboat</a></li>
        <li><a href="/UpsideDownHouses" className="link-button">Upside down houses</a></li>
      </ul>
    </div>
  );
}

export default Home;