import React from 'react';
import './Gallery.css';
import gallery_1 from './assets/gallery-1.png';
import gallery_2 from './assets/gallery-2.png';
import gallery_3 from './assets/gallery-3.png';
import gallery_4 from './assets/gallery-4.png';
import white_arrow from './assets/white-arrow.png';

const Gallery = () => {
  return (
    <div className="tours">
        <h1 className="tours-title">Previous Campaigns</h1>
        <p className="tours-description">What we do</p>
        <div className="gallery">
            <img src={gallery_1} alt="1" />
            <img src={gallery_2} alt="2" />
            <img src={gallery_3} alt="3" />
            <img src={gallery_4} alt="4" />
        </div>
        <button className="tours-btn">See more here <img src={white_arrow} alt="arrow icon"/></button>
    </div>
  )
}

export default Gallery;
