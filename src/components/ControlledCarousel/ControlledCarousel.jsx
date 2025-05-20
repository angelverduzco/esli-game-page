import { useState } from 'react';
import './ControlledCarousel.css';

function CustomCarousel({ items }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="custom-carousel">
      <button className="carousel-btn left" onClick={prevSlide}>&lt;</button>
      <div className="carousel-slide">
        <img
          src={items[current].imagen}
          alt={items[current].descripcion}
          className="carousel-img"
        />
        <p className="carousel-desc">{items[current].descripcion}</p>
      </div>
      <button className="carousel-btn right" onClick={nextSlide}>&gt;</button>
      <div className="carousel-dots">
        {items.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot${idx === current ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default CustomCarousel;