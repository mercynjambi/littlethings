import React from 'react'
import msg_icon from './assets/msg-icon.png'
import mail_icon from './assets/mail-icon.png'
import phone_icon from './assets/phone-icon.png'
import './Contacts.css'
import location_icon from './assets/location-icon.png'
import white_arrow from './assets/white-arrow.png'

const Contacts = () => {
  return (
    <div classname="contact">
        <div className="contact-col">
            <h3> Send us a message <img src={msg_icon} alt="message-icon"/></h3>
            <p> Feel fee to reach out through our contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service through our charity</p>
        <ul>
            <li><img src={mail_icon} alt="mail"/>mylittlethings@gmail.com</li>
            <li><img src={phone_icon} alt="phone"/>+254792748289<br/>+254792748289</li>
            <li><img src={location_icon} alt="location"/>Adam's Arcade, 5th floor, Ngong Road</li> 
                     

        </ul>        
        </div>

        <div className="contact-col">
            <form>
                <label>Your Name</label><br/>
                <input type="text"  name="name" placeholder='Enter Your Name' required/>
                <br/>
                <label>Phone Number</label><br/>
                <input type="tel" id="email" name="email" required/>
                <br/>
                <label> Write Your Message Here</label>
                <textarea name="message"  rows="6" required></textarea>
                
                <button type="submit"  className=" btn dark-btn"> Submit now<img src={white_arrow}  alt="arrow"/></button>
                <span>Sending...</span>
            </form>
            

        </div>

    </div>
  )
}

export default Contacts