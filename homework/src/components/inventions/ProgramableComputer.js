import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramableComputer.css';

const ProgramableComputer = () => {
  return (
    <div className="villa-container">
        <div>
            <Link to="/HomeInventions" className="home-button">Home</Link>
        </div>
        <h1>Invention of the first programmable computer (1940s)</h1>
        <div className="image-gallery">
            <img src="https://www.techcult.ru/content/2021/9399/eniak-uQV8.jpg" alt="Изображение 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROeWykHKnejE-OmJHCFNGljXkqqm1eYwEOLI75FtT2XQ&s" alt="Изображение 2" />
            <img src="https://www.techcult.ru/content/2021/9399/mesm.jpg" alt="Изображение 3" />
        </div>
        <div className="description">
            <h2>Description</h2>
            <ul>
                <li>Revolutionary innovation - the first programmable computer introduced a new era in technology.</li>
                <li>Ambient silence - only the hum of circuits and the clacking of keys break the quiet.</li>
                <li>The aroma of innovation - the scent of freshly printed circuits fills the air.</li>
                <li>Limitless potential - panoramic views of a digital landscape unfold with each computation.</li>
            </ul>
        </div>
    </div>
  );
}

export default ProgramableComputer;
