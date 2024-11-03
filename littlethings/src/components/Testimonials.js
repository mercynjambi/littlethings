import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from './assets/next-icon.png';
import back_icon from './assets/back-icon.png';
import user_1 from './assets/user-1.png';
import user_2 from './assets/user-2.png';
import user_3 from './assets/user-3.png';
import user_4 from './assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User 1" />
                <div className="user-text">
                  <h3>Jane Njeri</h3>
                  <span>Kajiado, Kenya</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ex ac felis viverra fermentum. Nulla facilisi. In euismod ante vel dolor consectetur, in bibendum urna consectetur.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User 2" />
                <div className="user-text">
                  <h3>Jane Njeri 2</h3>
                  <span>Kajiado, Kenya</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ex ac felis viverra fermentum. Nulla facilisi. In euismod ante vel dolor consectetur, in bibendum urna consectetur.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User 3" />
                <div className="user-text">
                  <h3>Jane Njeri 3</h3>
                  <span>Kajiado, Kenya</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ex ac felis viverra fermentum. Nulla facilisi. In euismod ante vel dolor consectetur, in bibendum urna consectetur.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User 4" />
                <div className="user-text">
                  <h3>Jane Njeri 4</h3>
                  <span>Kajiado, Kenya</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ex ac felis viverra fermentum. Nulla facilisi. In euismod ante vel dolor consectetur, in bibendum urna consectetur.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
