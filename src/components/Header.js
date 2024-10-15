import '../styles/header.css';
import '../styles/Portfolio.css';

function Header() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="name">Sushan<span> Thapa</span></h1>
        <nav className="nav">
          <a href="#about"><i class="fa fa-user" aria-hidden="true"></i><span> </span>About</a>
          <a href="#projects"><i class="fa fa-sitemap" aria-hidden="true"></i><span> </span>Projects</a>
          <a href="#blog"><i class="fa fa-envelope" aria-hidden="true"></i><span> </span>Contact</a>
        </nav>
      </header>

      <section className="main-section">
        <div className="intro-text">
          <h2>Hello, my name is</h2>
          <h1>Sushan Thapa.</h1>
          <p>I am a Software Engineer that likes photography.</p>
        </div>
        <div className="profile-pic"></div>
      </section>
    </div>
  );
}

export default Header;
