import React from 'react';
import { Link } from 'react-router-dom';
import './VillaByTheSea.css';

const VillaByTheSea = () => {
  return (
    <div className="villa-container">
        <div>
            <Link to="/HomeUnusualhouse" className="home-button">Home</Link>
        </div>
        <h1>Villa by the Sea</h1>
        <div className="image-gallery">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrmqCrOstVX_ebOQ3W1v96kShDnSA69cTM_8UKNlTuw&s" alt="Изображение 1" />
            <img src="https://myfin.by/source/thumb_440_880/1/1559825135thimbleIslands.jpg" alt="Изображение 2" />
            <img src="https://tengritravel.kz/userdata/news/2023/news_498663/thumb_m/photo_430207.jpeg" alt="Изображение 3" />
        </div>
        <div className="description">
            <h2>Description</h2>
            <ul>
            <li>A beach house is a nice place to relax.</li>
            <li>Beach houses look really nice because they're well-designed.</li>
            <li>They're in quiet places, with lots of plants and nice-smelling flowers around.</li>
            <li>The inside of beach houses is cozy, with lots of light and warmth.</li>
            </ul>
        </div>
    </div>
  );
}

export default VillaByTheSea;
