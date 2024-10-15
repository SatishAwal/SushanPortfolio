// import logo from './logo.svg';
import ContactForm from './components/Contact.js';
import RecentWork from './components/RecentWork.js';
import './styles/Portfolio.css';

function App() {
  return (
    <div>

      <div className="portfolio">
        {/* Header Section */}
        <header className="portfolio-header">
          <nav>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Recent Work</a></li>
              <li><a href="#">Get in Touch</a></li>
            </ul>
          </nav>
        </header>

        {/* Main Section */}
        <main className="main-content">
          <div className="intro-text">
            <h1>Sushan Thapa</h1>
            <p>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="cta-button">Let's get started</button>
          </div>
          <div className="profile-image">
            <img src="your-image-url.jpg" alt="Profile" />
          </div>
        </main>
      </div>

      {/* Recent Work Section */}
      <RecentWork />

      {/* Footer Section */}
      <ContactForm />
    </div>
  );
}

export default App;
