import logo from './logo.svg';
import './App.css';
import pfp from './pfp.jpg';
import border from './border.jpg';
import Blur from "react-blur";
import resume from './Resume (2).jpg';

function App() {
  return (
    
    <div className="App"> 
    <br></br> 
    <br></br> 
    <br></br>   

    <img src={pfp} className="App-logo" alt="pfp" />

    <header className="App-header">
        <p>
          <h1>Zayne Pepin</h1>
          <a
          href="https://www.linkedin.com/in/zayne-pepin-546a38220/"
          target="_blank"
          rel="noopener noreferrer"
          >
          LinkedIn
        </a>
        <a
        href="https://github.com/zayniel"
        target="_blank"
        rel="noopener noreferrer"
        >
        <br></br>
          GitHub 
        </a>
        </p>
        
  </header>

	  <div className="about-me">About Me</div>
	  <div className="about-me-text">Hi! My name is Zayne and I am a Senior Software Engineering major at Michigan Technological University. I have several hobbies such as playing music (drums, guitar, piano), playing video games, watching movies, and learning how to make various crafts. Below you can find more on some of the projects I have worked on during my time here at Tech.</div>
    
    <div className="resume-text">View My Resume</div>
    
      <a href={resume} target="_blank">
        <img src={resume} className="resume" alt="resume" />
      </a>

        <div className="container">
          <div className="gallery"></div>
        </div>

    </div>
  );
}

export default App;
