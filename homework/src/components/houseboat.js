import React from 'react';
import { Link } from 'react-router-dom';
import './houseboat.css';

const houseboat = () => {
  return (
    <div className="villa-container">
        <div>
            <Link to="/" className="home-button">Home</Link>
        </div>
        <h1>House on the water</h1>
        <div className="image-gallery">
            <img src="https://nakvartire.com/wp-content/uploads/2020/03/s1200-1-11-615x346.jpg" alt="Изображение 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBg1CgbozHJ9Fhfmnioxk_wXR3rnpzQ-0mc1akJgoOA&s" alt="Изображение 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZjM2M7dPXrtyVChwrbAXaPhbf7i1His-OkpkDsEH8w&s" alt="Изображение 3" />
        </div>
        <div className="description">
            <h2>Description</h2>
            <ul>
                <li>Easy living - everything you need is on the water, no need to go anywhere.</li>
                <li>Calmness - gentle rocking on the waves makes you feel relaxed.</li>
                <li>Great views - you can see beautiful scenery all around you.</li>
                <li>Quiet - away from busy places, so it's peaceful and quiet.</li>
            </ul>
        </div>
    </div>
  );
}

export default houseboat;
