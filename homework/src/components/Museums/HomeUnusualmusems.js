import React from 'react';
import './HomeUnusualmusems.css';

const Home = () => {
  return (
    <div className="home-container">
        <a href='/' className="link-button">Home</a>
      <h2>Домашняя страница</h2>
      <p>Выберите одну из страниц:</p>
      <ul>
        <li><a href="/MuseumOfIllusions" className="link-button">Museum of Illusions in Prague</a></li>
        <li><a href="/ChocolateMuseum" className="link-button">The Chocolate Museum in Barcelona</a></li>
        <li><a href="/ToyMuseum" className="link-button">The Toy Museum in London</a></li>
      </ul>
    </div>
  );
}

export default Home;