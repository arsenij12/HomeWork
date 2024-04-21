import React from 'react';
import { Link } from 'react-router-dom';
import './ToyMuseum.css';

const ToyMuseum = () => {
  return (
    <div className="villa-container">
        <div>
            <Link to="/HomeUnusualmusems" className="home-button">Home</Link>
        </div>
        <h1>The Toy Museum in London</h1>
        <div className="image-gallery">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5vPoi5s9olUzucM_B24qFxqRn0MxRL911mL9NAbf4Fg&s" alt="Изображение 1" />
            <img src="https://www.londonxlondon.com/wp-content/uploads/2022/07/Pollocks-Toy-Museum.jpg-8-720x405.jpg" alt="Изображение 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZuuqv5aIHvbzy8AD71jp2sqjKNCpsgzz0f_I_8ReVhw&s" alt="Изображение 3" />
        </div>
        <div className="description">
            <h2>The Toy Museum in London is like stepping into a time machine that takes you back to your childhood. It's a special place filled with all kinds of toys from the past, bringing back memories and feelings of nostalgia. Here's why it's so great.</h2>
            <ul>
                <li>Time Travel: Explore toys from different times and places, giving you a glimpse into what playtime was like for kids throughout history.</li>
                <li>Childhood Memories: Rediscover your favorite toys and see ones you've never even heard of, sparking fond memories and a sense of nostalgia.</li>
                <li>Cultural Journey: Dive into the rich tapestry of toys from around the world, learning about different cultures and their play traditions.</li>
                <li>Fun for All Ages: Whether you're young or just young at heart, there's something for everyone to enjoy at the Toy Museum, making it a great place for families and toy enthusiasts alike</li>
            </ul>
        </div>
    </div>
  );
}

export default ToyMuseum;
