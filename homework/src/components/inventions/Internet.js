import React from 'react';
import { Link } from 'react-router-dom';
import './Internet.css';

const Internet = () => {
  return (
    <div className="villa-container">
        <div>
            <Link to="/HomeInventions" className="home-button">Home</Link>
        </div>
        <h1>Birth of the Internet (1960s)</h1>
        <div className="image-gallery">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSclwDi9njYQud0QQ_U12FXXzmTe-ePNdZTdXf2Hsv_2g&s" alt="Изображение 1" />
            <img src="https://img1.eadaily.com/r650x400/o/8d0/8016575e038556b24504d119ee1f0.jpg" alt="Изображение 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtLyrDtQ0qZ6zIqnzUCjqvs6AKyi7DjVtVu3VH7Sp8g&s" alt="Изображение 3" />
        </div>
        <div className="description">
            <h2>Description</h2>
            <ul>
                <li>Groundbreaking invention - the birth of the Internet marked a monumental leap forward in connectivity.</li>
                <li>Echoes of discovery - only the click of keyboards and the whir of servers break the digital silence.</li>
                <li>The aroma of exploration - the scent of possibility permeates every virtual corridor.</li>
                <li>Vast horizons - panoramic views of a digital realm expand with each webpage accessed.</li>
            </ul>
        </div>
    </div>
  );
}

export default Internet;
