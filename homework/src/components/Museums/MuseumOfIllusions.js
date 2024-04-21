import React from 'react';
import { Link } from 'react-router-dom';
import './MuseumOfIllusions.css';

const MuseumOfIllusions = () => {
  return (
    <div className="villa-container">
        <div>
            <Link to="/HomeUnusualmusems" className="home-button">Home</Link>
        </div>
        <h1>Museum of Illusions in Prague</h1>
        <div className="image-gallery">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rI4PWg6NUF1xLWkKjOepDMyaq7U6moQCLhX6-fNZbA&s" alt="Изображение 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85GV-lL3UOhZPQ4kFraGherNoan2jTzxhdhO26qQK8A&s" alt="Изображение 2" />
            <img src="https://upload.turumba.ru/s_pXZvvP8G/t676x452/natsionalnyy-muzey.jpg" alt="Изображение 3" />
        </div>
        <div className="description">
            <h2>The Museum of Illusions in Prague is like stepping into a magical world where what you see isn't always what you get. It's full of cool stuff that tricks your eyes and makes you question what's real. Here's what you'll love about it.</h2>
            <ul>
                <li>Getaway from Boredom: It's a place where things aren't normal - they're mind-bending and fun.</li>
                <li>Fun for Your Senses: You'll see things that make you go "wow" and want to touch and play with them.</li>
                <li>Explore Cool Stuff: Walk through rooms filled with mind-blowing stuff that messes with your head.</li>
                <li>Discover New Things: It's all about finding out how things work and having fun doing it.</li>
            </ul>
        </div>
    </div>
  );
}

export default MuseumOfIllusions;
