import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

import { FaHome, FaClock, FaEnvelopeOpenText } from 'react-icons/fa';


const Contact = () => {
  return (
   <>
     {/* <div className='cstm-about-bg-parlx'>
        <div className='cstm-about-text-img'>
            <p className='cstm-about-text'>Contact Us</p>
        </div>
      </div> */}




        <div className="contact-header">
      <div className="overlay">
        <h1 className="contact-title">CONTACT US</h1>
        <div className="breadcrumb">
          <span>Home</span>
          <FaChevronRight className="breadcrumb-icon" />
          <span className="active">Contact Us</span>
        </div>
        <p className="contact-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation
        </p>
      </div>
    </div>







<div className="contact-section mt-5 container">
      <div className="contact-left">
        <h2>GET IN TOUCH</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam
        </p>

        <div className="contact-info">
          <div className="info-box">
            <div className="icon"><FaHome /></div>
            <div className="info-text">
              <h3>HEAD OFFICE</h3>
              <p>Address: Jl. Sneakers Raya No. 88, Las Vegas, United States</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon"><FaEnvelopeOpenText /></div>
            <div className="info-text">
              <h3>EMAIL US</h3>
              <p>Email: support@sneaky, example@mail.com</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon"><FaClock /></div>
            <div className="info-text">
              <h3>OUR WORKING HOURS</h3>
              <p>Monday – Saturday, 9:00 AM – 6:00 PM (EST)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <form>
          <label>
            FIRST NAME *
            <input type="text" placeholder="FIRST NAME HERE" required className='w-100' />
          </label>

          <label>
            LAST NAME *
            <input type="text" placeholder="LAST NAME HERE" required  className='w-100'/>
          </label>

          <label>
            EMAIL ADDRESS *
            <input type="email" placeholder="ADD EMAIL" required  className='w-100' />
          </label>

          <label>
            COMMENTS / QUESTIONS *
            <textarea placeholder="COMMENTS" rows="5" required   className='w-100'/>
          </label>

          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>


    <div className="map-container mt-5 mb-5">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d85326.576651073!2d77.092979!3d28.6723666!3m2!1i1024!2i768!4f13.1!2m1!1sKD-3%2C%20Third%20Floor%2C%20near%20Kohat%20Enclave%20metro%20station%2C%20Delhi%20-%20110034!5e1!3m2!1sen!2sin!4v1756553418650!5m2!1sen!2sin" 
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>


   </>
  )
}

export default Contact