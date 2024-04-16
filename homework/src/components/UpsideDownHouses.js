import React from 'react';
import { Link } from 'react-router-dom';
import './UpsideDownHouses.css';

const UpsideDownHouses = () => {
  return (
    <div className="villa-container">
        <div>
            <Link to="/" className="home-button">Home</Link>
        </div>
        <h1>Upside down houses</h1>
        <div className="image-gallery">
            <img src="https://tranio.ru/articles/4150/terfens_EklBS0A.jpg" alt="Изображение 1" />
            <img src="https://tranio.ru/articles/4150/rugen.jpg" alt="Изображение 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1t7tPUYJRQ833Pq6Hix0HlN0ZL9ER2zouifNihBeSSg&s" alt="Изображение 3" />
        </div>
        <div className="description">
            <h2>Description</h2>
            <ul>
                <li>Surprise - doors, windows, and furniture on the ceiling create a strange atmosphere.</li>
                <li>Playing with gravity - feeling like you're on the ceiling adds fun and surprise.</li>
                <li>Cool photos - who can compete with pictures from inside an upside-down house?</li>
                <li>Spectacle - to everyone outside, it looks like the house is upside down, catching attention and interest.</li>
            </ul>
        </div>
    </div>
  );
}

export default UpsideDownHouses;
