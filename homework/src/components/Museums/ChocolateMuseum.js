import React from 'react';
import { Link } from 'react-router-dom';
import './ChocolateMuseum.css';

const ChocolateMuseum = () => {
  return (
    <div className="villa-container">
        <div>
            <Link to="/HomeUnusualmusems" className="home-button">Home</Link>
        </div>
        <h1>The Chocolate Museum in Barcelona </h1>
        <div className="image-gallery">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGRw8gLYOBcx-4ZE6bCFrU80lyRWZy3Iyg_WM13LH9g&s" alt="Изображение 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUM1JvZ0TCowmYgendGhCgLEGg2fVDuWFQQLm_rdDgMQ&s" alt="Изображение 2" />
            <img src="https://cdn.getyourguide.com/img/location/57766f6ea30d0.jpeg/68.jpg" alt="Изображение 3" />
        </div>
        <div className="description">
            <h2>The Chocolate Museum in Barcelona is like a sweet paradise where you can dive into the fascinating world of chocolate. It's not just about learning - it's about enjoying every delicious moment. Here's what makes it awesome.</h2>
            <ul>
                <li>Learn and Taste: Discover the story behind chocolate and how it's made, while also getting to taste different kinds.</li>
                <li>Sweet Inspiration: Get inspired by all the chocolatey goodness around you, sparking ideas for your own sweet creations.</li>
                <li>Explore and Enjoy: Wander through exhibits that showcase the history and magic of chocolate, with plenty of opportunities to satisfy your cravings.</li>
                <li>Treat Yourself: Indulge in the many forms of chocolate available, from bars to truffles, ensuring you leave with a smile on your face and a satisfied sweet tooth.</li>
            </ul>
        </div>
    </div>
  );
}

export default ChocolateMuseum;
