import logo from './logo.svg';
import './App.css';
import pfp from './pfp.jpg';
import border from './border.jpg';
import Blur from "react-blur";
import resume from './Resume (2).jpg';
import darkpge from './pge-assets/pge-dark-mode.PNG'

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
	  <div className="about-me-text">I am an aspiring software engineer with a focus on web development. 
    <br></br> <br></br>
    I have several hobbies such as playing instruments, video games, watching movies, and various crafts.
    <br></br> <br></br>
    Below you can find some of the projects I've been involved in.</div>
    
    <div className="resume-text">View Resume</div>
    
      <a href={resume} target="_blank">
        <img src={resume} className="resume" alt="resume" />
      </a>

      <div className="container">
        <div className="gallery"></div>
      </div>

      <div className="project-header">Projects</div>

      <div className="pge-header">PG&E Energy Reducer</div>
      <div className="pge-desc">
        The PG&E Energy Reducer is a web application for Pacific Gas & Electric customers that allows them to visualize their heat and electric consumption through easily readable and understandable graphical representations. The app also shows trends and recurring energy spikes and gives the customer advice to help reduce their energy consumption as well as their energy costs.
        <br></br> <br></br>
        Role: Developer
        <br></br><br></br>
        <a
        href="https://www.linkedin.com/in/zayne-pepin-546a38220/"
        target="_blank"
        rel="noopener noreferrer">
          pge-app.sachinf.com
        </a>
      </div>
      <img src={darkpge} className="pge-content" alt="pgedark" />
      

      <div className="construction">In Construction...</div>

  </div>
  );
}

export default App;
