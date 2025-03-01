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
      <h1>Testimonials</h1>
      <p>What People Say</p>
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User 1" />
                <div className="user-text">
                  <h3>Jane Wambui</h3>
                  <span>Kajiado, Kenya</span>
                </div>
              </div>
              <p>Through My Little Thing, I have learnt how to start and manage my small business but also how to budget and manage a small business.  This opportunity has changed my life. </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User 2" />
                <div className="user-text">
                  <h3>Mary Atieno</h3>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
              <p>I used to struggle to find financial stability as  a young mum, but the enterpreneurship training from my Little Thing gave me confidence and skills to  start my own businness. </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User 3" />
                <div className="user-text">
                  <h3>Kennedy Parmuat</h3>
                  <span>Kajiado, Kenya</span>
                </div>
              </div>
              <p>I love playing football but I never had proper sports gear. My Little Thing gave us jerseya and football kits, and now our school team looks like real champions.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User 4" />
                <div className="user-text">
                  <h3>Stacy Resiato</h3>
                  <span>Kajiado, Kenya</span>
                </div>
              </div>
              <p>I used to share a  single book with my classmates because we did not have enough. But now, thanks to my little thing, I have my own books and learning has become easier.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
