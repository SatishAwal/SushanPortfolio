import React from 'react';
import '../styles/RecentWork.css'; // CSS file for styling
import Work1 from '../assets/Icon.png';
import Work2 from '../assets/logo.jpeg';
const RecentWork = () => {
  return (
    <div className="recent-work-section" id='projects'>
      <h2>Recent Work</h2>
      <p className="intro-text">
        Solving user & business problems since the last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="recent-work-gallery">
        <div className="work-item">
          <img src={Work1} alt="Work 1" />
          
          <div className="work-info">
            <h3>Travel Buddy</h3>
            <p>
            A mobile app for planning trips and adventures using Firebase and Twilio for backend and .NET MAUI for frontend.
            </p>
            <button className="work-btn"><i className="fab fa-github"></i> GitHub</button>
          </div>
        </div>

        <div className="work-item">
          <img src={Work2} alt="Work 2" />
          <div className="work-info">
            <h3>Local Business Explorer</h3>
            <p>
            A platform to help local businesses promote their products and services, featuring a map and event listings.
            </p>
            <button className="work-btn"><i className="fab fa-github"></i> GitHub</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
