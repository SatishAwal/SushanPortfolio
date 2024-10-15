import logo from './logo.svg';
import './App.css';
import './styles/Portfolio.css';
function App() {
  return (
    <div>
     
    <nav class="navbar">
        <div class="container">
            <h1 class="logo">Sushan Thapa</h1>
            <ul class="nav-links">
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    
    <section class="hero">
        <div class="container">
            <h2>Hi, I'm Sushan Thapa</h2>
            <p>Mobile Application Development Student at Cambrian College.</p>
            <p>Passionate about creating impactful and innovative mobile solutions for real-world problems.</p>
            <div class="skills">
                <p><strong>Skills:</strong> .NET MAUI | React Native | Firebase | C# | Java | Swift</p>
                <p><strong>Current Education:</strong> Post Graduate Certificate in Mobile Application Development at Cambrian College</p>
            </div>
            <a href="#projects" class="btn">View Projects</a>
        </div>
    </section>

   
    <footer>
        <div class="container">
            <p>&copy; 2024 Sushan Thapa. All rights reserved.</p>
        </div>
    </footer>
    </div>
  );
}

export default App;
