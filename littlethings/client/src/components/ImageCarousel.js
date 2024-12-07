import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const ImageCarousel = ({ images, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(images.length / 4);
  const startIndex = currentPage * 4;
  const visibleImages = images.slice(startIndex, startIndex + 4);

  return (
    <div className="carousel-container">
      <div className="image-grid">
        {visibleImages.map((image, index) => (
          <div key={startIndex + index} className="image-card">
            <img src={image.src} alt={image.caption} />
            <div className="image-caption">{image.caption}</div>
          </div>
        ))}
      </div>

      <button
        className="nav-button prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="nav-button next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages - 1}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageCarousel;
