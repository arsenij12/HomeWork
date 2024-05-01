import React from 'react';
import { Link } from 'react-router-dom';
import './Bitcoin.css';

const Bitcoin = () => {
  return (
    <div className="villa-container">
        <div>
            <Link to="/HomeInventions" className="home-button">Home</Link>
        </div>
        <h1>Launch of the cryptocurrency Bitcoin (2009)</h1>
        <div className="image-gallery">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSclwDi9njYQud0QQ_U12FXXzmTe-ePNdZTdXf2Hsv_2g&s" alt="Изображение 1" />
            <img src="https://img1.eadaily.com/r650x400/o/8d0/8016575e038556b24504d119ee1f0.jpg" alt="Изображение 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtLyrDtQ0qZ6zIqnzUCjqvs6AKyi7DjVtVu3VH7Sp8g&s" alt="Изображение 3" />
        </div>
        <div className="description">
            <h2>Description</h2>
            <ul>
                <li>Revolutionary currency - the launch of Bitcoin heralded a new era in decentralized finance.</li>
                <li>Digital tranquility - only the hum of mining rigs and the buzz of online transactions disrupt the quiet.</li>
                <li>The scent of disruption - the aroma of financial independence fills the digital air.</li>
                <li>Landscape of innovation - panoramic views of a blockchain landscape unfold with each new block mined.</li>
            </ul>
        </div>
    </div>
  );
}

export default Bitcoin;
