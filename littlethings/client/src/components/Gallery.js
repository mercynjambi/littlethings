import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import './Gallery.css';
import littlething6 from './assets/littlething1.jpg';
import littlething7 from './assets/littlething2.jpg';
import littlething9 from './assets/littlething3.jpg';
import littlething10 from './assets/littlething4.jpg';
import events1 from './assets/events1.jpg';
import events2 from './assets/events2.jpg';
import events3 from './assets/events3.jpg';
import events4 from './assets/events4.jpg';
import next_icon from './assets/next-icon.png';
import back_icon from './assets/back-icon.png';



const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const images = [
    { src: littlething6, caption: 'Hustle ya daily' },
    { src: littlething7, caption: 'Hustle ya daily' },
    { src: littlething9, caption: 'Hustle ya daily' },
    { src: littlething10, caption: 'Hustle ya daily' },
    { src: events1, caption: 'Kajiado' },
    { src: events2, caption: 'kajiado' },
    { src: events3, caption: 'kajiado' },
    { src: events4, caption: 'Kajiado' },
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Previous Campaigns</h2>
          <p className="gallery-subtitle">Making a difference in our communities</p>
        </div>

        <ImageCarousel
          images={images}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />

        <div className="pagination">
          {Array.from({ length: Math.ceil(images.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`dot ${currentPage === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;