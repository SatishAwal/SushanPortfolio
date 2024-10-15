import React from 'react';
import '../styles/RecentWork.css'; // CSS file for styling

const RecentWork = () => {
  return (
    <div className="recent-work-section">
      <h2>Recent Work</h2>
      <p className="intro-text">
        Solving user & business problems since the last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="recent-work-gallery">
        <div className="work-item">
          <img src="https://via.placeholder.com/500x300" alt="Work 1" />
          <div className="work-info">
            <h3>Travel Buddy</h3>
            <p>
              Labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button className="work-btn">Know more {'>'}</button>
          </div>
        </div>

        <div className="work-item">
          <img src="https://via.placeholder.com/500x300" alt="Work 2" />
          <div className="work-info">
            <h3>Local Business Explorer</h3>
            <p>
              Rempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt u.
            </p>
            <button className="work-btn">Know more {'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
