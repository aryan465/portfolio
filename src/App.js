import './App.css';
import profile from './pror.png';
function App() {
  return (
    <div className="App">
      <header>
        <nav>
        <a href="" className="name">Aryan Anand</a> 
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>        
        </nav>
        
      <div className="hello">
        Hello! I'm Aryan.
      </div>
      </header>
      <div className="about" id="about">about
      <img className = "profile" src= {profile} alt=""/>
      </div>

    <div className="skills" id="skills">skills</div>    
    <div className="projects" id="projects">projects</div>    
    <div className="experience" id="experience">experience</div>        
    <div className="contact" id="contact">contact</div>
    </div>
  );
}

export default App;
