import React from 'react';
import '../styles/Contact.css'; // CSS file for styling

const ContactForm = () => {
  return (
    <div className="contact-container">
      {/* Contact Form Section */}
      <div className="contact-form">
        <h2>Get In Touch</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="First_Name Last_Name" />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Email Address" />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" placeholder="Your Message"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <h4>Contact Information</h4>
        <p><i className="fas fa-map-marker-alt"></i> Information Technologies Building, Victoria Island, Lagos, Nigeria.</p>
        <p><i className="fas fa-phone"></i> +234 081-1236-4568</p>
        <p><i className="fas fa-envelope"></i> hello@info.com.ng</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
        {/* Google Maps iframe */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019040764274!2d-122.41941618468103!3d37.7749297797599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c3fbc53e5%3A0x90ef5f1b1b8e4d68!2sHayes%20Valley%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2sng!4v1633686474137!5m2!1sen!2sng"
          width="300"
          height="200"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
