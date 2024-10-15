// import logo from './logo.svg';
import ContactForm from './components/Contact.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import About from './components/About.js';
import Skill from './components/Skill.js';
import RecentWork from './components/RecentWork.js';
import '../src/styles/Portfolio.css';

function App() {
  return (
    <div>
      <Header />
      {/* <Main /> */}
      
      <About />  

      <Skill />

      
      {/* Recent Work Section */}
      <RecentWork />

      {/* Footer Section */}
      <ContactForm />
    </div>
  );
}

export default App;
