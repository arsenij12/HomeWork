import React from 'react';
import { Link } from 'react-router-dom';
import './HouseInForest.css';

const HouseInForest = () => {
  return (
    <div className="villa-container">
        <div>
            <Link to="/" className="home-button">Home</Link>
        </div>
        <h1>Wooden house in the forest</h1>
        <div className="image-gallery">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupEQD-y45UsRXEUBcgxfpRGnHJ5w-1MhpGGcz2jI8uA&s" alt="Изображение 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6YNySvtdEtypt4HPFyF4Kh3PZS1J5UgyAj52nu11WA&s" alt="Изображение 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY1tqU_u6dIKe1T2GMlB9X1HfodxmvBWxe6YOvJh4SuQ&s" alt="Изображение 3" />
        </div>
        <div className="description">
            <h2>Description</h2>
            <ul>
                <li>Coziness - warm wooden walls and soft carpets create a cozy atmosphere.</li>
                <li>Only the sounds of nature: birds chirping and rustling leaves.</li>
                <li>The scent of pine and fir trees fills every corner.</li>
                <li>Panoramic views of green trees and blue sky outside the window.</li>
            </ul>
        </div>
    </div>
  );
}

export default HouseInForest;
