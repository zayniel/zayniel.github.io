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
    
      <a href={resume} target="_blank">
        <img src={resume} className="resume" alt="resume" />
      </a>

      <div className="resume-text">View My Resume</div>

      {/*
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
        
  </header> */}

        <div className="container">
          <div className="gallery"></div>
        </div>

    </div>
  );
}

export default App;